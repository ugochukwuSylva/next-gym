import CartPage from "@/app/_components/CartPage";
import { getCart } from "@/app/_lib/data-services";

export const metadata = {
  title: "Cart Items",
};

export default async function page() {
  const cart = await getCart();

  return (
    <div>
      <CartPage cart={cart} />
    </div>
  );
}
