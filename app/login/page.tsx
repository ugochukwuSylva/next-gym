"use client";

import Image from "next/image";
import SignInButton from "../_components/SignInButton";
import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import bg from "@/public/loginPage-bg.jpg";

export default function Login() {
  const { targetRef } = useFixedOnScroll();
  return (
    <div
      className="z-20  flex justify-center items-center mb-[20rem] fixed top-0 left-0 h-screen w-full"
      ref={targetRef}
    >
      <Image
        src={bg}
        alt="background-image"
        placeholder="blur"
        fill
        className="object-cover -z-30"
      />
      <SignInButton />
      <div className="absolute top-0 left-0 h-full w-full bg-black/70 -z-20"></div>
    </div>
  );
}
