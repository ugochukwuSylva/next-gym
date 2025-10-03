"use client";

import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import QuantityButtons from "./QuantityButtons";
import { formatCurrency } from "../_utils/formatDate";
import { editCartItem } from "../_lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

type Props = {
  shopping: {
    id: number;
    productPrice: number;
    productImage: string;
    productName: string;
    productQuantity: number;
  };
  removeItem: (id: number) => void;
};

export default function CartItem({ shopping, removeItem }: Props) {
  const { productImage, productName, productPrice, productQuantity, id } =
    shopping;

  const [isPending, startTransition] = useTransition();
  const [isEditing, startEditing] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this item ?")) {
      startTransition(() => removeItem(id));
    }
  }

  function handleIncrease() {
    if (productQuantity > 100) return;
    startEditing(
      async () => await editCartItem(id, productQuantity + 1, productPrice)
    );
  }

  async function handleDecrease() {
    if (productQuantity === 1) removeItem(id);
    // if (productQuantity === 1) return;
    startEditing(
      async () => await editCartItem(id, productQuantity - 1, productPrice)
    );
  }

  return (
    <div className="[&:not(:last-child)]:border-b p-3 mx-5 hover:bg-stone-100 hover:shadow-lg transition-all duration-200">
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-2 h-full w-[70%]">
          <div className="overflow-hidden h-24 w-24">
            <Image
              src={productImage}
              alt="cartItem-image"
              height={100}
              width={100}
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <p className="text-sm -mb-2 font-medium">{productName}</p>
            <span className="text-xs mt-1 text-amber-900">Free delivery</span>
            <p className="">{`${formatCurrency(productPrice)}`}</p>

            <button
              onClick={handleDelete}
              className="mt-1.5 text-sm text-red-600 flex gap-1 items-center hover:bg-red-200 bg-red-100 p-1 rounded-full px-2 transition-all duration-200 outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:inset-ring-2 border-none"
            >
              <span className="text-lg">
                <RiDeleteBin6Line />
              </span>
              <span>{isPending ? "Removing..." : "Remove"}</span>
            </button>
          </div>
        </div>

        <QuantityButtons
          increase={handleIncrease}
          decrease={handleDecrease}
          pending={isPending || isEditing}
        >
          {isEditing ? (
            <SpinnerMini />
          ) : (
            <input
              value={productQuantity}
              disabled
              className="text-stone-700 w-10 text-center text-lg border-2 border-stone-500"
            />
          )}
        </QuantityButtons>
      </div>
    </div>
  );
}
