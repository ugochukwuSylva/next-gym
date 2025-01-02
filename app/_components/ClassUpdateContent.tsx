import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import Overlay from "./Overlay";

type Props = {
  title: string;
  imagePath: string;
};

export default function ClassUpdateContent({ title, imagePath }: Props) {
  return (
    <div className=" relative w-full h-96 cursor-pointer group ">
      <div className="relative w-full h-[80%] rounded-md overflow-hidden">
        <Image
          src={imagePath}
          alt=""
          fill
          className="object-cover object-top transition-all duration-700  group-hover:scale-125"
        />

        <Overlay size="text-3xl" icon={<FaLink />} customName="redLink" />
      </div>

      <div className="absolute bottom-6 left-6 sm:left-2.5 xl:left-4 w-11/12 flex flex-col justify-center items-center text-center bg-white rounded-md z-10 overflow-hidden">
        <span className="p-5 w-full text-xl font-semibold text-stone-700 group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
          {title}
        </span>
        <span className="p-1 tracking-wider w-full text-xs border-t-2 text-red-500/60 uppercase border-red-500">
          10 JUNE 2024
        </span>
      </div>
    </div>
  );
}
