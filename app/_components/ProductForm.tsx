"use state";

import React, { useState, useTransition } from "react";
import { addToCart } from "../_lib/actions";
import AddToCartButton from "./AddToCartButton";
import QuantityButtons from "./QuantityButtons";
import toast from "react-hot-toast";

type Props = {
  product: {
    id: number;
    productName: string;
    productImage: string;
    productPrice: number;
  };
  cartItems: string[];
};

export default function ProductForm({ product, cartItems }: Props) {
  const { id, productImage, productName, productPrice } = product;

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [quantity, setQuantity] = useState<number>(1);

  function increaseQuantity() {
    setQuantity((prev) => (prev === 100 ? 100 : prev + 1));
  }

  function decreaseQuantity() {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  }

  const isInCart = cartItems.includes(productName);

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const product = {
        productName,
        productImage,
        productQuantity: quantity,
        productPrice,
        totalPrice: quantity * productPrice,
      };

      const cartItem = addToCart.bind(null, product);
      const { success, message } = await cartItem(formData);

      if (message) {
        setErrorMessage(message);
      } else {
        setErrorMessage("");
      }

      if (success) {
        toast.success(`Product #${id} added successfully 😊`);
      } else {
        toast.error(`Product #${id} could not be added 😞`);
      }
    });
  }

  return (
    <form action={handleSubmit}>
      <QuantityButtons
        increase={increaseQuantity}
        decrease={decreaseQuantity}
        pending={isPending || isInCart}
      >
        <input
          onChange={(e) => setQuantity(Number(e.target.value) || 1)}
          className="text-stone-700 w-10 text-center text-lg"
          required
          value={quantity}
          name="productQuantity"
          disabled={isPending || isInCart}
        />
      </QuantityButtons>
      <p className="text-red-500">{errorMessage && errorMessage}</p>
      <AddToCartButton pending={isPending} isInCart={isInCart} />
    </form>
  );
}
