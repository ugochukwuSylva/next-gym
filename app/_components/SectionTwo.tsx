import Image from "next/image";
import Accordion from "./Accordion";
import GymVideoContainer from "./GymVideoContainer";

export default function SectionTwo() {
  return (
    <div className="flex justify-center items-center min-h-full relative bg-gradient-to-r from-black/90 md:from-40% from-60% to-transparent md:p-10 p-3 overflow-x-hidden ">
      <Image
        src="/sectionTwo-image-1.jpg"
        fill
        alt="background image"
        className="object-cover flip-opposite -z-10"
      />

      <div className="flex flex-col-reverse  lg:flex-row justify-between  text-stone-300 w-full">
        <div className="lg:w-1/2 w-full">
          <Accordion />
        </div>

        <div className="flex justify-center lg:justify-start items-center lg:w-[40%] w-full lg:h-auto min-h-[60vh]">
          <GymVideoContainer />
        </div>
      </div>
    </div>
  );
}
