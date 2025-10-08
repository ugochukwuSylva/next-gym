"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type Props = {
  imageUrl: string;
  altText: string;
};

function PagesBackgroundContainer({ imageUrl, altText }: Props) {
  const pathname = usePathname();
  const pageName = pathname.split("/")[1].replace("-", " ");

  return (
    <div className="h-60 sm:h-72 w-full  relative bg-black/50">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        quality={100}
        className="object-cover w-full h-full -z-10"
      />

      <div className="absolute top-32 md:top-48 left-0 mt-0 sm:mt-6 md:mt-0 w-full p-4 flex flex-col sm:flex-row justify-between items-center px-8 sm:px-16">
        <div className=" capitalize font-black text-3xl text-stone-200">
          {pageName}
        </div>

        <div className="text-stone-300 flex  items-center justify-center text-xl gap-4 sm:gap-2">
          <Link href="/">
            <AiFillHome />
          </Link>

          <div className="flex items-center gap-4 sm:gap-2 text-stone-400 *:font-semibold">
            <MdKeyboardDoubleArrowRight />
            <span className="text-sm capitalize ">{pageName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagesBackgroundContainer;
