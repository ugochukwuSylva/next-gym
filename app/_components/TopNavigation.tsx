"use client";

import { FaLocationDot } from "react-icons/fa6";
import TopNavigationItem from "./TopNavigationItem";
import { MdCall } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import { useState } from "react";
import QuickContactIcons from "./QuickContactIcons";
import Link from "next/link";
import FooterText from "./FooterText";
import Xbutton from "./CloseButton";
import { useBottomPage } from "../customHook/useBottomPage";

export default function TopNavigation() {
  const nav = [
    {
      param: "/",
      text1: "Home",
      text2: "Start here",
    },
    {
      param: "/about",
      text1: "About",
      text2: "Our team",
    },
    {
      param: "/gym-classes",
      text1: "Classes",
      text2: "Training",
    },
    {
      param: "/article",
      text1: "Article",
      text2: "Tutorials",
    },
    {
      param: "/join-now",
      text1: "Join now",
      text2: "Membership",
    },
  ];

  const [isActive, setIsActive] = useState<number>(0);
  const [isSideMenuShown, setIsSideMenuShown] = useState<boolean>(false);

  const { isBottomPage } = useBottomPage();

  return (
    // <div className="flex justify-center items-center w-full fixed mt-0 md:mt-14 z-40">
    <div className="flex justify-center items-center w-full absolute  md:mt-14 z-40">
      <div
        className={`w-full md:w-[98%] md:rounded-md transition-all ${
          isBottomPage
            ? "opacity-0 invisible h-0 duration-300"
            : "opacity-100 visible h-24 duration-500"
        } bg-black md:bg-black/60 flex justify-between  px-4 md:justify-around items-center`}
      >
        <span className="hidden md:block">
          <Logo setIsActive={setIsActive} />
        </span>

        <div className="hidden  md:flex justify-center items-center h-full">
          {nav.map((navItem, index) => (
            <TopNavigationItem
              items={navItem}
              key={navItem.param}
              isActiveLink={isActive === index}
              index={index}
              setIsActive={setIsActive}
            />
          ))}
        </div>

        <div className="group rounded-md  cursor-pointer text-red-600 hidden md:block  bg-red-600/20 ">
          <div className="rounded-md group-hover:!bg-red-500 group-hover:!text-white  flex  justify-around items-center   transition-colors duration-200 tracking-wide p-4   lg:px-10 lg:py-1 gap-5">
            <FaLocationDot
              className="transition-colors duration-300"
              size={32}
            />
            <div className=" hidden lg:block  ">
              <span className="italic text-sm text-slate-300">
                Los Angeles, CA
              </span>
              <p className="transition-colors duration-200 text-lg  font-semibold">
                12634 Long Beach
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* display only on mobile view */}
      <div className="md:hidden fixed backdrop-blur-md bg-black/50 left-0 top-0 py-2 px-4 w-full flex justify-between items-center">
        <Link
          className="f  hover:bg-red-500 p-2 rounded-full transition-all duration-200 cursor-pointer"
          href="tel:09096859314"
        >
          <MdCall className="fill-slate-50" size={25} />
        </Link>

        <Logo setIsActive={setIsActive} />
        <span
          onClick={() => setIsSideMenuShown((prev) => !prev)}
          className="hover:bg-red-500 p-2 rounded-full transition-all duration-200 cursor-pointer"
        >
          <FiMenu className="stroke-slate-50 cursor-pointer" size={25} />
        </span>

        <div
          onClick={() => setIsSideMenuShown((prev) => !prev)}
          className={`${
            !isSideMenuShown
              ? "opacity-0 invisible translate-x-[100%]"
              : " visible opacity-100 translate-x-0"
          } z-50 bg-transparent grid grid-cols-[5rem_1fr] sm:grid-cols-[10rem_1fr] absolute top-0 right-0 transition-all duration-500 h-[100vh] bg-slate-100 w-full`}
        >
          <div className="h-full bg-transparent/50 relative ">
            <Xbutton />
          </div>
          <div className=" border-b border-stone-500/40 flex flex-col items-start px-1 md:px-2 h-full bg-gradient-to-b from-red-700 to-black/90 ">
            {nav.map((navItem, index) => (
              <TopNavigationItem
                items={navItem}
                key={navItem.param}
                isActiveLink={isActive === index}
                index={index}
                setIsActive={setIsActive}
              />
            ))}

            <div className="  p-4 md:p-8 w-full flex justify-center">
              <QuickContactIcons iconSize={25} />
            </div>

            <div className="w-full text-center">
              <FooterText />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}