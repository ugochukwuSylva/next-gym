"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import GymVideoOverlay from "./GymVideoOverlay";

export default function GymVideoContainer() {
  const [isVideoShown, setIsVideoShown] = useState(false);

  return (
    <div className=" flex gap-5  items-center group bg-gradient-to-r from-transparent via-black/50 to-transparent">
      <span
        onClick={() => setIsVideoShown(true)}
        className="p-7  rounded-full bg-red-500 cursor-pointer text-xl flex justify-center items-center  scale-105 group-hover:scale-110 transition-all duration-300"
      >
        <FaPlay />
      </span>

      <div className="">
        <p className="uppercase text-xl font-semibold text-stone-50">
          gym show
        </p>
        <p className="text-lg text-stone-300">Watch video</p>
      </div>

      {isVideoShown && <GymVideoOverlay setIsVideoShown={setIsVideoShown} />}
    </div>
  );
}
