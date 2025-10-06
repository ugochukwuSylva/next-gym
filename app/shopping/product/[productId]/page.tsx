import SelectedProduct from "@/app/_components/SelectedProduct";
import { getCart, getProductById } from "@/app/_lib/data-services";
import { auth } from "@/auth";

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props) {
  const { id } = await getProductById(params.productId);

  return { title: `Product ${id}` };
}

export default async function page({ params }: Props) {
  const { productId } = params;
  const product = await getProductById(productId);
  const session = await auth();
  const cart = await getCart(session?.user.email as string);
  const cartItems = cart.map((cartItem) => cartItem.productName);

  return (
    <SelectedProduct
      product={product}
      cartItems={cartItems}
      isSignedIn={!!session}
    />
  );
}
