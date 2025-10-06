"use client";

import Image from "next/image";
import PagesBackgroundContainer from "./PagesBackgroundContainer";
import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import ProductDetails from "./ProductDetails";
import ProductForm from "./ProductForm";

type Props = {
  product: {
    id: number;
    productName: string;
    productPrice: number;
    productImage: string;
    aboutProduct: string;
  };
  cartItems: string[];
  isSignedIn: boolean;
};

export default function SelectedProduct({
  product,
  cartItems,
  isSignedIn,
}: Props) {
  const { targetRef } = useFixedOnScroll();

  const { id, productImage, productName, productPrice, aboutProduct } = product;

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
                ${productPrice}
              </p>
              <p className="text-lg text-stone-700 leading-8">{aboutProduct}</p>

              <ProductForm
                product={product}
                cartItems={cartItems}
                isSignedIn={isSignedIn}
              />
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
