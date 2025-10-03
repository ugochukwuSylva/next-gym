"use client";

import Image from "next/image";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";
import { ProductProps } from "../_types/PropTypes";
import { BsCheckLg } from "react-icons/bs";
import { addToCart } from "../_lib/actions";
import { useTransition } from "react";
import toast from "react-hot-toast";

type Props = {
  product: ProductProps;
  cartItems: ProductProps[];
};

export default function Product({ product, cartItems }: Props) {
  const { productName, productPrice, oldPrice, productImage, id } = product;
  const [isPending, startTransition] = useTransition();

  const isInCart = cartItems
    .map((cartItem) => cartItem.productName)
    .includes(productName);

  function handleAddToCart() {
    startTransition(async () => {
      const product = {
        productName,
        productImage,
        productQuantity: 1,
        productPrice,
        totalPrice: 1 * productPrice,
      };

      const cartItem = addToCart.bind(null, product);
      const { success } = await cartItem(product);

      if (success) {
        toast.success(`Product #${id} added to cart successfully 😊`);
      } else {
        toast.error(`Product #${id} could not be added 😞`);
      }
    });
  }

  return (
    <div
      className={`relative h-96 w-72 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 m-auto`}
    >
      <Link href={isInCart ? "/dashboard/cart" : `/shopping/product/${id}`}>
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
        {isInCart ? (
          <Link href={"/dashboard/cart"} className="flex items-center">
            <BsCheckLg size={24} /> <span className="ml-2">View cart</span>
          </Link>
        ) : (
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center h-full w-full"
            disabled={isPending}
          >
            <RiShoppingCartLine />{" "}
            <span className="ml-2">{`${
              isPending ? "Adding..." : "Add to cart"
            }`}</span>
          </button>
        )}
      </div>
    </div>
  );
}
