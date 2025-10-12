import { stripe } from "@/app/_lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, priceId, bookingId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      expand: ["payment_intent", "payment_intent.payment_method"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url:
        "https://ugo-gym.vercel.app/dashboard/bookings/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://ugo-gym.vercel.app/dashboard/bookings/cancel",

      // custom property - single payment
      metadata: {
        type: "single",
        booking_id: bookingId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: "An unknown error occured" });
    }
  }
}
