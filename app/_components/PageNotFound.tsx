"use client";

import PagesBackgroundContainer from "./PagesBackgroundContainer";
import { useRouter } from "next/navigation";

export default function PageNotFound() {
  const router = useRouter();

  return (
    <div className=" md:min-h-screen lg:h-screen w-full ">
      <PagesBackgroundContainer
        imageUrl="/notFound-image.jpg"
        altText="background image"
      />

      <div className="bg-gradient-to-b from-white to-transparent from-55% to-55%  lg:pb-[100vh] flex flex-col justify-center items-center gap-3 overflow-x-hidden">
        <div className="relative w-full ">
          <div className="-mt-10 text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-white text-[10rem] sm:text-[20rem] text-center font-black z-10">
            404
          </div>

          <p className="w-full text-center p-1 font-black text-stone-500 text-lg sm:text-3xl leading-8 sm:leading-10 absolute bottom-0 sm:bottom-10  ">
            {" "}
            How did you get here? It&apos;s cool. We&apos;ll
            <br />
            help you out
          </p>
        </div>

        <button
          onClick={() => router.back()}
          className="min-w-32 mb-20 lg:mb-0 bg-red-500 text-white hover:bg-black transition-all duration-300 p-3 rounded-md"
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
