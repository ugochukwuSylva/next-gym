import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import Overlay from "./Overlay";

type Props = {
  imagePath: string;
  heading: string;
  subHeading: string;
};

export default function GalleryContent1({
  imagePath,
  heading,
  subHeading,
}: Props) {
  return (
    // <div className="grid grid-cols-[6rem_15rem] lg:grid-cols-[6rem_1fr] gap-4 py-2 [&:not(:last-child)]:border-b border-b-stone-700 justify-center lg:justify-start">
    <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-[6rem_1fr] gap-4 py-2 [&:not(:last-child)]:border-b border-b-stone-700  lg:justify-start">
      <picture className="w-24 h-24 z-10 relative">
        <Image
          src={imagePath}
          alt="gym-workout"
          width={100}
          height={100}
          className="h-full w-full object-cover rounded-md cursor-pointer "
        />

        {/* prettier-ignore */}
        <Overlay  size="text-xl" icon={<FaLink />} customName="redLink" />
      </picture>

      <div className="flex flex-col justify-center items-start gap-2">
        <h1 className="text-xl font-bold text-white transition-all duration-300 hover:text-red-500 cursor-pointer">
          {heading}
        </h1>

        <div className="flex justify-center items-center gap-3">
          <FaRegClock className="text-stone-400" />
          <p className="text-sm text-stone-400">{subHeading}</p>
        </div>
      </div>
    </div>
  );
}
