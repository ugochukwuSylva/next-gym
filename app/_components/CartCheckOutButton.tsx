"use client";

import { useTransition } from "react";
import { handleCartCheckout } from "../_lib/data-services";
import Link from "next/link";

type Props = {
  shoppings: object[];
};

export default function CartCheckOutButton({ shoppings }: Props) {
  const [isPending, startTransition] = useTransition();

  function handleCheckout() {
    startTransition(() => handleCartCheckout(shoppings));
  }

  return (
    <div className="flex justify-center sm:justify-end items-center gap-2">
      <Link
        href="/shopping"
        className={`italic text-sm sm:text-lg hover:text-red-500 underline text-stone-800 transition-all duration-200 disabled:cursor-not-allowed disabled:text-stone-400 ${
          isPending ? "cursor-not-allowed hover:text-stone-800 opacity-60" : ""
        }`}
      >
        &larr; Continue shopping
      </Link>

      <button
        onClick={handleCheckout}
        disabled={isPending}
        className=" bg-red-500 w-32 text-gray-200 px-6 py-3 border-none rounded-md hover:bg-stone-900 transition-all duration-300 mt-auto text-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-red-500"
      >
        {isPending ? "Redirecting..." : "Checkout"}
      </button>
    </div>
  );
}
