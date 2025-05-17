"use client";

import Image from "next/image";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { addToCart } from "../_lib/actions";

type Props = {
  productName: string;
  productPrice: number;
  oldPrice: number;
  productImage: string;
  id: string;
  productQuantity: number;
  totalPrice: number;
};
export default function Product({
  productName,
  productPrice,
  oldPrice,
  productImage,
  id,
  totalPrice,
  productQuantity,
}: Props) {
  const newProduct = {
    productName,
    productPrice,
    productImage,
    id,
    totalPrice,
    productQuantity,
  };

  return (
    <div className="relative h-96 w-72 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 m-auto">
      <Link href={`/shopping/product/${id}`}>
        <div className="h-[70%] relative">
          <Image
            src={productImage}
            alt="gym product"
            fill
            className="object-cover"
          />
        </div>
        <span className="p-4 bg-stone-800 absolute top-0 right-0 text-red-500 font-bold text-lg tracking-wider">
          {!!oldPrice && (
            <span className="text-sm opacity-75 line-through font-normal">
              ${oldPrice}
            </span>
          )}{" "}
          ${productPrice}
        </span>

        <div className="h-[20%] bg-stone-800 flex justify-center items-center font-black text-lg text-stone-200">
          {productName}
        </div>
      </Link>

      <div className="h-[10%] bg-red-500 text-center flex justify-center items-center text-stone-200  transition-colors duration-300 border-t-2 border-t-transparent hover:border-t-red-500 hover:bg-stone-800">
        <RiShoppingCartLine /> <span className="ml-2">Add to cart</span>
      </div>
    </div>
  );
}
