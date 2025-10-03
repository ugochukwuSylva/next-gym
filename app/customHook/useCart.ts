import { useState } from "react";

export function useCart(initialValue: number) {
  const [quantity, setQuantity] = useState<number>(initialValue);

  function increaseQuantity() {
    setQuantity((prev) => (prev === 100 ? 100 : prev + 1));
  }

  function decreaseQuantity() {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  }

  return { quantity, setQuantity, increaseQuantity, decreaseQuantity };
}
