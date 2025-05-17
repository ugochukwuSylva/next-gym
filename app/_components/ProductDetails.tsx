import { BsCheckLg } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import ShareButtonContainer from "./ShareButtonContainer";

type Props = {
  id: number;
  productName: string;
  productImage: string;
};

export default async function ProductDetails({
  id,
  productImage,
  productName,
}: Props) {
  return (
    <div className="">
      <div className="border-t ">
        <div className="grid grid-cols-[4rem_1fr] gap-2 py-5 text-sm">
          <div className="font-semibold text-stone-800">Brand</div>
          <div className="">Next-Gym</div>
          <div className="font-semibold text-stone-800">SKU</div>
          <div className="">{`SKU_${id}`}</div>
          <div className="font-semibold text-stone-800">Status</div>
          <div className="flex gap-1 items-center">
            <span className="font-semibold">100</span> <span>in stock</span>
            <BsCheckLg className="text-green-500 font-bold text-lg" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-t py-5">
        <div className="grid grid-cols-[2rem_1fr] items-center text-lg text-stone-700">
          <GrStatusGood className="" />{" "}
          <div className="">Free shipping on all orders over $100</div>
        </div>
        <div className="grid grid-cols-[2rem_1fr] items-center text-lg text-stone-700">
          <GrStatusGood className="" />{" "}
          <div className="">14 days easy refund & returns</div>
        </div>
        <div className="grid grid-cols-[2rem_1fr] items-center text-lg text-stone-700">
          <GrStatusGood className="" />{" "}
          <div className=""> Product taxes and customs duties included</div>
        </div>
      </div>

      <div className=" mt-2 w-full">
        <ShareButtonContainer
          id={id}
          productImage={productImage}
          productName={productName}
        />
      </div>
    </div>
  );
}
