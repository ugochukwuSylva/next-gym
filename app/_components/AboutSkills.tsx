import Image from "next/image";
import SectionHeaders from "./SectionHeaders";
import SkillProgressBar from "./SkillProgressBar";

function AboutSkills() {
  return (
    <div className="py-6 px-10 grid grid-cols-2 justify-start items-start gap-8 bg-white">
      <div className="relative h-full overflow-hidden rounded-md">
        <Image
          src="/about-skill-image.jpg"
          alt="A female working out in the gym"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="">
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
