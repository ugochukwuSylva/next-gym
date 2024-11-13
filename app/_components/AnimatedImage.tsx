"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AnimatedImage() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const translateX = (scrollY / 2) * 0.1;

  return (
    <Image
      src="/sectionOne-image-1.jpg"
      alt="lady working-out"
      className="md:object-contain w-80 lg:w-full h-full m-auto"
      style={{
        transform: `translateX(${translateX}px)`,
        transition: "all 500ms ease-out",
      }}
      width={500}
      height={500}
    />
  );
}
