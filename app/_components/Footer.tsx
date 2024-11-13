"use client";

import Image from "next/image";
import DoYouKnow from "./DoYouKnow";
import { useBottomPage } from "../customHook/useBottomPage";
import FooterText from "./FooterText";

export default function Footer() {
  const { isBottomPage } = useBottomPage();

  return (
    <div
      className={`h-full bg-black ${
        isBottomPage ? "" : "-z-50"
      }  px-4 md:px-10 text-white fixed left-0 bottom-0 w-full`}
    >
      <Image
        src="/footer-bg.jpg"
        fill
        alt="footer background-image"
        className=" object-cover grayscale opacity-15 scale-150"
      />

      <div className="grid grid-rows-[1fr_5rem] h-full">
        <div className="grid grid-cols-3 ">
          <DoYouKnow />
        </div>

        <div className="border-t border-stone-800 w-full flex flex-col md:flex-row py-5 text-center md:text-start md:justify-between items-center z-10 *:text-stone-400 *:text-sm *:not-italic">
          <FooterText />

          <div className="flex  text-sm w-full justify-center md:justify-end gap-3">
            <span className="cursor-pointer border-r border-stone-700 -skew-x-[20deg] p-1 px-4 hover:text-red-500 transition-all duration-300">
              Privacy Policy
            </span>
            <span className="p-1 hover:text-red-500 transition-all duration-300 cursor-pointer">
              Fitness Program
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
