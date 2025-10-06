import { Metadata } from "next";
import ShoppingPage from "../_components/ShoppingPage";
import { getCart, getProducts } from "../_lib/data-services";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Shopping cart",
};

export default async function Shopping() {
  const session = await auth();
  const products = await getProducts();
  const cartItems = await getCart(session?.user.email as string);

  return (
    <main>
      <ShoppingPage
        products={products}
        cartItems={cartItems}
        isSignedIn={!!session}
      />
    </main>
  );
}
