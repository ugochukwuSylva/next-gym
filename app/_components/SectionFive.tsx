"use client";

import SectionHeaders from "./SectionHeaders";
import Slider from "./Slider";
import TestimonialCard from "./TestimonialCard";

export default function SectionFive() {
  return (
    <div className="pt-24 lg:pb-[100vh] px-8 md:px-16 w-full bg-gradient-to-b from-white to-transparent from-55% to-55%">
      <div className="flex justify-center group toCenter">
        <SectionHeaders
          text1="Our Clients Testimonials"
          text2="People"
          text3="Believe"
          text4="Other People"
        />
      </div>

      <div className="flex sm:flex-row flex-col  gap-6 py-16">
        <TestimonialCard
          name="Vaughn Jasper"
          image="/sectionFiveImage-1.jpg"
          avater="/avatar-1.jpg"
        >
          Every rep brings you closer to the best version of yourself !
        </TestimonialCard>

        <TestimonialCard
          name="Sydney Bristol"
          image="/sectionFiveImage-2.jpg"
          avater="/avatar-2.jpg"
        >
          Strength doesn’t come from what you can do, it comes from overcoming
          the things you once thought you couldn’t
        </TestimonialCard>
      </div>
      {/*  */}
      <Slider />
    </div>
  );
}
