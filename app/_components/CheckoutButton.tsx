"use client";

import { useTransition } from "react";
import { handleCheckout } from "../_lib/data-services";

type Props = {
  priceId: string;
  email: string;
};

export default function CheckoutButton({ priceId, email }: Props) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(param1: string, param2: string) {
    startTransition(() => handleCheckout(param1, param2));
  }

  return (
    <form action={() => handleSubmit(priceId, email)}>
      <button
        disabled={isPending}
        className={`py-2 px-3 rounded-full  bg-green-200 hover:bg-green-300 transition-all duration-200 ${
          isPending ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        {isPending ? "redirecting..." : "Pay now"}
      </button>
    </form>
  );
}
