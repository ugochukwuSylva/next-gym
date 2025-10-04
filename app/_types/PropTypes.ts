export type ProductProps = {
  productName: string;
  productPrice: number;
  oldPrice: number;
  productImage: string;
  isDiscounted: boolean;
  isPopular: boolean;
  id: number;
};

export type CartProps = {
  productName: string;
  productImage: string;
  productPrice: string;
  productQuantity: number;
  totalPrice: number;
};
