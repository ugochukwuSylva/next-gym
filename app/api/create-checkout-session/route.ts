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
      success_url: "http://localhost:3000/dashboard/bookings/success",
      cancel_url: "http://localhost:3000/dashboard/bookings/cancel",
      // custom property
      metadata: {
        booking_id: bookingId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
