import { Metadata } from "next";
import ShoppingPage from "../_components/ShoppingPage";
import { getProducts } from "../_lib/data-services";

export const metadata: Metadata = {
  title: "Shopping cart",
};

export default async function Shopping() {
  const products = await getProducts();

  return (
    <main>
      <ShoppingPage products={products} />
    </main>
  );
}
