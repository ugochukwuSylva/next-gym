"use client";

import { useOptimistic } from "react";
import CartItem from "./CartItem";
import { removeCartItem } from "../_lib/actions";

type Props = {
  shoppings: {
    productPrice: number;
    productQuantity: number;
    productImage: string;
    productName: string;
    id: number;
  }[];
};

export default function CartItemList({ shoppings }: Props) {
  const [optimisticCartItems, optimisticRemoval] = useOptimistic(
    shoppings,
    (curCartItems, id) =>
      curCartItems.filter((curCartItem) => curCartItem.id !== id)
  );

  async function handleDeleteItem(cartId: number) {
    optimisticRemoval(cartId);
    await removeCartItem(cartId);
  }

  return (
    <div>
      {optimisticCartItems.map((shopping) => (
        <CartItem
          key={shopping.id}
          shopping={shopping}
          removeItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}
