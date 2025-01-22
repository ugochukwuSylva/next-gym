import Image from "next/image";
import advertBg from "/public/advert-bg.jpg";

export default function ArticleAds() {
  return (
    <div className="p-10 ">
      <h1 className="pb-4 w-fit border-b-2 border-b-red-500 text-2xl font-black text-stone-700">
        Ads
      </h1>

      <div className="relative mt-6 rounded-sm overflow-hidden ">
        <Image
          src={advertBg}
          alt="advertisement postal"
          placeholder="blur"
          className="object-cover opacity-20"
        />
        <span className="cursor-default absolute top-[40%] left-[25%] text-stone-500 m-auto text-3xl font-thin">
          Advertisement!
        </span>
      </div>
    </div>
  );
}
