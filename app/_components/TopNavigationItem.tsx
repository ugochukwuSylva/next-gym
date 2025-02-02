"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  items: { address: string; text1: string; text2: string };
  index: number;
};

function TopNavigationItem({ items, index }: Props) {
  const { address, text1, text2 } = items;
  const pathname = usePathname();

  return (
    <Link
      href={address}
      className={`flex  flex-col gap-1  justify-center md:text-center hover:pl-5 md:hover:px-4  text-stone-300 h-full px-1 md:px-4 transition-all duration-100 z-50  
    border-b border-stone-700/60 md:border md:border-transparent  md:hover:border-b-2  md:hover:border-b-red-500 md:hover:text-red-500 w-full 
    ${
      address === pathname || pathname.startsWith(`${address}/`)
        ? "pl-5  md:!text-red-500  md:border-b-red-500 md:border-b-2"
        : ""
    } 
      `}
    >
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: index * 0.05, type: "spring" }}
      >
        <p className=" font-semibold ">{text1}</p>
        <span className="text-sm font-light whitespace-nowrap">{text2}</span>
      </motion.div>
    </Link>
  );
}

export default TopNavigationItem;
