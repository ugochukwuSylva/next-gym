import CartBasketIcon from "@/app/_components/CartBasketIcon";
import CartCheckOutButton from "@/app/_components/CartCheckOutButton";
import CartItemList from "@/app/_components/CartItemList";
import { getCart } from "@/app/_lib/data-services";
import { formatCurrency } from "@/app/_utils/formatDate";
import { auth } from "@/auth";
import Link from "next/link";

export default async function page() {
  const session = await auth();
  const shoppings = await getCart(session?.user?.email as string);

  const totalCartItems = shoppings.reduce(
    (cur, acc) => cur + acc.productQuantity,
    0
  );

  const totalCost = shoppings.reduce((cur, acc) => cur + acc.totalPrice, 0);

  if (shoppings.length === 0)
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-2xl  text-stone-600">Your cart is empty 🛒</p>
        <Link
          href="/shopping"
          className="bg-red-500 w-full md:w-fit text-gray-200 px-6 py-3 border-none rounded-md hover:bg-stone-900 transition-all duration-300 mt-auto text-center"
        >
          Start shopping
        </Link>
      </div>
    );

  return (
    <>
      <div className="flex justify-between items-center border-b p-4">
        <p className="text-2xl text-red-500 hidden sm:block italic">
          Cart Items ({`${totalCartItems}`})
        </p>
        <span className=" block sm:hidden">
          <CartBasketIcon numProduct={totalCartItems} />
        </span>

        <p className="text-red-500 font-semibold text-2xl italic">
          <span className="text-sm sm:text-lg text-red-400 ">Total Cost:</span>{" "}
          {formatCurrency(totalCost)}
        </p>
      </div>

      <div className="w-full max-h-96 overflow-y-scroll my-4 rounded-md shadow-lg bg-stone-50">
        <CartItemList shoppings={shoppings} />
      </div>

      <CartCheckOutButton shoppings={shoppings} />
    </>
  );
}
