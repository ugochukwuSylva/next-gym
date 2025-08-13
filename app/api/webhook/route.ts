import { stripe } from "@/app/_lib/stripe";
import { supabase_mutate } from "@/app/_lib/supabase";
import { headers } from "next/headers";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  const rawBody = await req.text();
  const sig = headers().get("stripe-signature")!;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return new Response("Missing signature or secret", { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      webhookSecret as string
    );
  } catch (err: any) {
    console.log("Stripe signature verifivation failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const paymentIntentId = session.payment_intent as string;
    const response = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ["payment_method"],
    });
    const paymentIntent = response as Stripe.PaymentIntent;
    const paymentMethod = paymentIntent.payment_method as Stripe.PaymentMethod;

    const brand = paymentMethod?.card?.brand;
    const last4 = paymentMethod?.card?.last4;

    const bookingId = session?.metadata?.booking_id;
    const supabase = supabase_mutate();

    // Update supabase after a successful payment
    const { error } = await supabase
      .from("bookings")
      .update({
        isPaid: true,
        status: "confirmed",
        cardBrand: brand,
        last4Digits: last4,
      })
      .eq("id", bookingId)
      .select();

    // This particular insertion is to enable me retrieve some data to display at the success page after payment, although, it may not be a clean way of doing it
    const { error: insertionError } = await supabase.from("payments").insert([
      {
        // stripe_session_id: session.id,
        // currency: session.currency,
        email: session.customer_email,
        amount_total: session.amount_total,
        status: session.payment_status,
        card_brand: brand,
        last4_digits: last4,
      },
    ]);

    if (insertionError) {
      return new Response(`Supabase Error: ${insertionError.message}`, {
        status: 500,
      });
    }

    if (error) {
      console.log("Supabase update error:", error.message);
      return new Response(`Supabase Error: ${error.message}`, { status: 500 });
    }

    return new Response("Received", { status: 200 });
  }
}
