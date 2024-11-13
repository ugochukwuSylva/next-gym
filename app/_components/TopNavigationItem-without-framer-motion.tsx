"use client";

import Link from "next/link";

type Props = {
  items: { param: string; text1: string; text2: string };
  isActiveLink: boolean;
  index: number;
  setIsActive: (i: number) => void;
};

//

function TopNavigationItem({ items, isActiveLink, index, setIsActive }: Props) {
  const { param, text1, text2 } = items;

  return (
    <Link
      onClick={() => setIsActive(index)}
      href={param}
      className={` 
    flex  flex-col gap-1  justify-center md:text-center flex-1 text-stone-300 h-full px-1 md:px-4 transition-all duration-100 z-50 hover:pl-5
    border-b border-stone-700/60 md:border md:border-transparent md:hover:border-b-2  md:hover:border-b-red-500 md:hover:text-red-500 w-full 
    ${
      isActiveLink
        ? "pl-5  md:!text-red-500 md:border-b-red-500 md:border-b-2"
        : ""
    } 
    `}
    >
      <p className=" font-semibold ">{text1}</p>
      <span className="text-sm font-light whitespace-nowrap">{text2}</span>
    </Link>
  );
}

export default TopNavigationItem;
