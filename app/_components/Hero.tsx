"use client";

import { useEffect, useState } from "react";
import HeroItem from "./HeroItem";
import HeroItemMini from "./HeroItemMini";
import TextExpander from "./TextExpander";
import useFixedOnScroll from "../customHook/useFixedOnScroll";

export default function Hero() {
  const [count, setCount] = useState(0);

  const heros = [
    <HeroItem
      key={1}
      image="/hero-image-1.jpg"
      text1="Possibilities"
      text2="abs workout"
    />,

    <HeroItem
      key={2}
      image="/hero-image-2.png"
      text1="Strong mind"
      text2="Strong body"
    />,
  ];
  const heroLength = heros.length - 1;

  useEffect(() => {
    const id = setTimeout(() => {
      setCount((prev) => (prev === heroLength ? 0 : prev + 1));
    }, 10000);

    return () => clearTimeout(id);
  }, [count, heroLength]);

  const { targetRef } = useFixedOnScroll();

  return (
    <div ref={targetRef} className="w-full min-h-[110vh] relative">
      <div className="w-full h-auto ">
        {heros[count]}
        {/*  */}
        <div className="h-[24rem] w-[95%] md:px-10 rounded-sm translate-center flex lg:flex-row flex-col lg:gap-6 gap-3">
          <HeroItemMini
            image="/hero-image-mini-1.jpg"
            headingText="for / her"
            backgroundText="fitness"
          >
            <TextExpander>
              From time-saving to fat-burn, high-intensity excercise is one of
              the fastest ways to burn fat in the system.
            </TextExpander>
          </HeroItemMini>

          <HeroItemMini
            image="/hero-image-mini-2.jpg"
            headingText="for / him"
            backgroundText="muscle"
          >
            <TextExpander>
              Combine high-intensity bursts of cardio with push-ups interval to
              burn fat and calories in a more efficient way.
            </TextExpander>
          </HeroItemMini>
        </div>
      </div>
    </div>
  );
}
