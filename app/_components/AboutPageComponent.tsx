"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import PagesBackgroundContainer from "../_components/PagesBackgroundContainer";
import SectionHeaders from "../_components/SectionHeaders";
import Image from "next/image";
import AboutAchievements from "../_components/AboutAchievements";
import AboutOurTeam from "@/app/_components/AboutOurTeam";
import AboutAllPackages from "./AboutAllPackages";
import AboutSkills from "./AboutSkills";

export default function AboutComponentPage() {
  const { targetRef } = useFixedOnScroll();

  return (
    <div className=" md:min-h-screen lg:h-screen w-full " ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/about-bg.jpg"
        altText="about background"
      />

      <div className=" bg-white">
        <div className="py-6 px-10 grid grid-cols-2 justify-start items-center  relative bg-white">
          <SectionHeaders text1="About Our Team" text2="Why" text3="Choose us?">
            At Next-gym, we know that keeping fit is more than just a hobby,
            it’s a way of life. It’s about pushing yourself to new limits every
            single day, striving for strength, endurance, and progress. That’s
            why our gym is specifically designed to meet the needs of serious
            athletes like you. We offer state-of-the-art equipment that’s built
            to withstand your toughest workouts, whether you’re lifting heavy,
            training for hypertrophy, or working on your endurance.
          </SectionHeaders>
          <picture className="w-full h-full relative">
            <Image
              src="/about-image-1.jpg"
              className="object-cover"
              fill
              alt="image of a dung bell"
              sizes=""
            />
          </picture>
        </div>

        <AboutAchievements />
        <AboutOurTeam />
        <AboutAllPackages />
        <AboutSkills />
      </div>
    </div>
  );
}
