"use client";

import Image from "next/image";
import PagesBackgroundContainer from "./PagesBackgroundContainer";
import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import { RiShoppingCartLine } from "react-icons/ri";
import ProductDetails from "./ProductDetails";
import ShoppingButtons from "./ShoppingButtons";
import BackButton from "./BackButton";
import { useState } from "react";

type Props = {
  product: {
    id: number;
    productName: string;
    productPrice: number;
    productImage: string;
    aboutProduct: string;
  };
};

export default function SelectedProduct({ product }: Props) {
  const { targetRef } = useFixedOnScroll();

  const { id, productImage, productName, productPrice, aboutProduct } = product;

  const [quantity, setQuantity] = useState<number>(1);

  function increaseQuantity() {
    setQuantity((prev) => (prev === 100 ? 100 : prev + 1));
  }

  function decreaseQuantity() {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
  }

  const [counter, setCounter] = useState<number>(1);

  return (
    <div className="md:min-h-screen lg:h-screen" ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/selectedProduct-bg.jpg"
        altText="background image"
      />

      <div className="bg-gradient-to-b from-white to-red from-55% to-55% pb-6 lg:pb-[110vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 px-4 md:px-10 gap-12 lg:gap-16 ">
          <div className="relative h-96 md:h-4/5 overflow-hidden rounded-md">
            <Image
              src={productImage}
              fill
              className="object-cover"
              alt={`image of product ${id}`}
            />
          </div>

          <div className="">
            <div className="flex flex-col gap-3 md:gap-6">
              <p className="text-4xl text-stone-800 font-black">
                {productName}
              </p>
              <p className="text-red-500 text-4xl font-black">
                ${productPrice} {counter}
              </p>
              <p className="text-lg text-stone-700 leading-8">{aboutProduct}</p>

              <div>
                <ShoppingButtons
                  increase={increaseQuantity}
                  decrease={decreaseQuantity}
                />
                {/*  */}
                <button onClick={() => setCounter((prev) => prev + 1)}>
                  increase
                </button>
                {counter}
                <button onClick={() => setCounter((prev) => prev - 1)}>
                  decrease
                </button>
                {/*  */}
                <div className="">
                  {" "}
                  {/* form */}
                  <div className="flex gap-2 mt-4">
                    <div className="p-3 rounded-md w-52 sm:w-56  bg-red-500 text-center flex justify-center items-center text-stone-200 hover:bg-stone-800  transition-colors duration-300">
                      <RiShoppingCartLine size={25} />{" "}
                      <button className="ml-2 text-lg font-bold">
                        Add to cart
                      </button>
                    </div>
                    <BackButton />
                  </div>
                </div>
              </div>

              <ProductDetails
                id={id}
                productName={productName}
                productImage={productImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
