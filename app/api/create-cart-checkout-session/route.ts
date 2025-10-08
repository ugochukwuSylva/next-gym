import { stripe } from "@/app/_lib/stripe";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cartItems = await req.json();
  const session = await auth();
  const email = session?.user?.email as string;

  type CartProps = {
    productName: string;
    productImage: string;
    productPrice: number;
    productQuantity: number;
  };

  try {
    const line_items = cartItems.map((item: CartProps) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName,
          // description: item.description || '',
          images: item.productImage ? [item.productImage] : [],
        },
        unit_amount: item.productPrice * 100, // assuming price is in dollars, convert to cents
      },
      quantity: item.productQuantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      customer_email: email,
      success_url: `https://ugo-gym.vercel.app/dashboard/cart/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://ugo-gym.vercel.app/dashboard/cart/cancel`,

      // custom property - bulk payment
      metadata: {
        type: "bulk",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Stripe checkout error:", error.message);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    } else {
      return NextResponse.json({ error: "Internal Server Error" });
    }
  }
}
