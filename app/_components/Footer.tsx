"use client";

import Image from "next/image";

import { useBottomPage } from "../customHook/useBottomPage";
import DoYouKnow from "./DoYouKnow";
import FooterText from "./FooterText";
import FooterGallery1 from "./FooterGallery1";
import FooterGallery2 from "./FooterGallery2";

export default function Footer() {
  const { isBottomPage } = useBottomPage();

  return (
    <div
      className={`min-h-full bg-black ${
        isBottomPage ? "" : "-z-50"
      }  px-4 py-3 md:px-10 text-white relative  lg:fixed  lg:left-0 lg:bottom-0 w-full`}
    >
      <Image
        src="/footer-bg.jpg"
        fill
        alt="footer background-image"
        className=" object-cover grayscale opacity-15"
      />

      <div className="grid grid-rows-[1fr_5rem] h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 *:z-10 py-6">
          <DoYouKnow />
          <FooterGallery1 />
          <FooterGallery2 />
        </div>

        <div className="border-t border-stone-800 w-full flex flex-col md:flex-row py-5 text-center md:text-start md:justify-between items-center z-10 *:text-stone-400 *:text-sm *:not-italic">
          <FooterText />

          <div className="flex items-center  text-sm w-full justify-center md:justify-end gap-3">
            <span className="cursor-pointer   p-1  hover:text-red-500 transition-all duration-300">
              {" "}
              Privacy Policy
            </span>
            <span className="w-[1px] h-7 bg-stone-700 -skew-x-[20deg]"></span>
            <span className="p-1 hover:text-red-500 transition-all duration-300 cursor-pointer">
              Fitness Program
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
