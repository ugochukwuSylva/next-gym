import Link from "next/link";
import { BsCart4 } from "react-icons/bs";

type Props = {
  numProduct: number;
};

export default function CartBasketIcon({ numProduct }: Props) {
  return (
    <Link
      href="/dashboard/cart"
      className="relative flex items-center text-stone-700"
    >
      <BsCart4 size={30} />
      {numProduct ? (
        <span className="absolute left-4 bottom-3 bg-red-500 text-stone-50 rounded-full px-2 flex items-center  justify-center h-8 w-8 transition-all duration-300">
          {numProduct}
        </span>
      ) : (
        ""
      )}
    </Link>
  );
}
