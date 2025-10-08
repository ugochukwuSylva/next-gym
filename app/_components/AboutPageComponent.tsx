import PagesBackgroundContainer from "../_components/PagesBackgroundContainer";
import SectionHeaders from "../_components/SectionHeaders";
import Image from "next/image";
import AboutAchievements from "../_components/AboutAchievements";
import AboutAllPackages from "./AboutAllPackages";
import AboutSkills from "./AboutSkills";

type Props = {
  children: React.ReactNode;
};

export default function AboutComponentPage({ children }: Props) {
  return (
    <div className=" md:min-h-screen lg:h-screen w-full ">
      <PagesBackgroundContainer
        imageUrl="/about-bg.jpg"
        altText="about background"
      />

      <div className="bg-gradient-to-b from-white to-red from-55% to-55% pb-6 lg:pb-[110vh]">
        <div className="py-6 md:px-10 px-2 flex flex-col md:grid grid-cols-2 justify-start items-center  relative bg-white">
          <SectionHeaders text1="About Our Team" text2="Why" text3="Choose us?">
            At Next-gym, we know that keeping fit is more than just a hobby,
            it’s a way of life. It’s about pushing yourself to new limits every
            single day, striving for strength, endurance, and progress. That’s
            why our gym is specifically designed to meet the needs of serious
            athletes like you. We offer state-of-the-art equipment that’s built
            to withstand your toughest workouts, whether you’re lifting heavy,
            training for hypertrophy, or working on your endurance.
          </SectionHeaders>
          <picture className="w-full h-96 md:h-full relative">
            <Image
              src="/about-image-1.jpg"
              className="object-cover object-center"
              fill
              alt="image of a dumb bell"
              sizes=""
            />
          </picture>
        </div>
        <AboutAchievements />
        {children}
        {/*The AboutOurTeam component was rendered as children prop to enable us render a server component through a client component */}
        <AboutAllPackages />
        <AboutSkills />
      </div>
    </div>
  );
}
