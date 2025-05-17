"use client";

import PagesBackgroundContainer from "./PagesBackgroundContainer";
import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";

type Props = {
  cart: {
    productName: string;
    productPrice: number;
    productImage: string;
  }[];
};

export default function CartPage({ cart }: Props) {
  const { targetRef } = useFixedOnScroll();

  return (
    <div className="md:min-h-screen lg:h-screen" ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/cart-bg.jpg"
        altText="background image"
      />
      <div className="bg-gradient-to-b from-white to-red from-55% to-55% pb-6 lg:pb-[110vh]">
        <div>{cart.length}</div>
      </div>
    </div>
  );
}
