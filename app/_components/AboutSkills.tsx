"use client";

import Image from "next/image";
import SectionHeaders from "./SectionHeaders";
import SkillProgressBar from "./SkillProgressBar";

function AboutSkills() {
  return (
    // <div className="pb-20 md:pb-0 py-6 px-4 md:px-10 flex flex-col-reverse justify-center items-center md:grid grid-cols-2 lg:justify-start lg:items-start gap-8 bg-white">
    <div className="bg-white flex flex-col-reverse justify-center items-center md:grid grid-cols-2 lg:justify-start lg:items-start gap-8 py-20  px-4 md:px-10 w-full ">
      <div className="relative w-full h-96 lg:h-full overflow-hidden rounded-md">
        <Image
          src="/about-skill-image.jpg"
          alt="A female working out in the gym"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="w-full">
        <SectionHeaders text1="No Pain No Gain" text2="Our" text3="Skills" />

        <SkillProgressBar skill="Fitness" progress="88%" />
        <SkillProgressBar skill="BodyBuilding" progress="92%" />
        <SkillProgressBar skill="Personal Training" progress="94%" />
        <SkillProgressBar skill="Swimming Lessons" progress="78%" />
        <SkillProgressBar skill="Sports Massage" progress="86%" />
      </div>
    </div>
  );
}

export default AboutSkills;
