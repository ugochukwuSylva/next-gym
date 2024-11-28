import Image from "next/image";
import Overlay from "./Overlay";
import { FaPlus } from "react-icons/fa6";

type Props = {
  imageUrl: string;
};

export default function GalleryContent2({ imageUrl }: Props) {
  return (
    <picture className="w-full h-96 lg:h-full relative cursor-pointer">
      <Image src={imageUrl} alt="" className="object-cover  rounded-md" fill />
      {/*  */}
      <Overlay icon={<FaPlus />} size="text-4xl" customName="plus" />
    </picture>
  );
}
