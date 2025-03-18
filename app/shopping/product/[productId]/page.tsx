import SelectedProduct from "@/app/_components/SelectedProduct";
import { getProductById } from "@/app/_lib/data-services";

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

  return <SelectedProduct product={product} />;
}
