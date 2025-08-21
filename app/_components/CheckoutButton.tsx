"use client";

import { useTransition } from "react";
import { handleCheckout } from "../_lib/data-services";

type Props = {
  bookingId: number;
  priceId: string;
  email: string;
  pending: boolean;
};

export default function CheckoutButton({
  email,
  priceId,
  bookingId,
  pending,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(param1: string, param2: string, param3: number) {
    startTransition(() => handleCheckout(param1, param2, param3));
  }

  return (
    <form action={() => handleSubmit(priceId, email, bookingId)}>
      <button
        disabled={isPending || pending}
        className={`py-2 px-3 whitespace-nowrap rounded-full  bg-green-200 hover:bg-green-300 transition-all duration-200 ${
          isPending || pending
            ? "opacity-40 cursor-not-allowed bg-green-300"
            : ""
        }`}
      >
        {isPending ? "redirecting..." : "Pay now"}
      </button>
    </form>
  );
}
