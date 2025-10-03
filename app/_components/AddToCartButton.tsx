import { RiShoppingCartLine } from "react-icons/ri";
import BackButton from "./BackButton";

type Props = {
  pending: boolean;
  isInCart: boolean;
};

export default function AddToCartButton({ pending, isInCart }: Props) {
  return (
    <div className="flex gap-2 mt-4">
      <button
        disabled={pending || isInCart}
        className="p-3 rounded-md w-52 sm:w-56  bg-red-500 text-center flex justify-center items-center text-stone-200 hover:bg-stone-800  transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:border-2 disabled:border-stone-400 disabled:text-stone-800 disabled:bg-stone-50"
      >
        <RiShoppingCartLine size={25} />{" "}
        <span className="ml-2 text-lg font-bold">
          {pending ? "Adding ..." : isInCart ? "Added" : "Add to cart"}
        </span>
      </button>
      <BackButton isInCart={isInCart} path="/shopping" />
    </div>
  );
}
