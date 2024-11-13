import Image from "next/image";
import PricingStatement from "./PricingStatement";
import PricingBox from "./PricingBox";

export default function SectionFour() {
  return (
    <div className=" min-h-[120%] relative bg-black/60 flex justify-center items-center py-16 pb-20 md:py-20 lg:py-36  px-10">
      <Image
        src="/sectionFourImage-bg.jpg"
        alt="background-image"
        className="object-cover -z-10"
        fill
        quality={100}
      />

      <div className="grid lg:grid-cols-4 min-h-[40rem] w-full gap-6 text-white">
        <div className="rounded-md pt-10">
          <PricingStatement />
        </div>

        <PricingBox text1="MUSCLE" text2="Muscle" text3="Building" text4="$50">
          <p className=" leading-9 text-center md:text-start ">
            Looking for a new workout that will challenge your muscular
            endurance & add some size to your frame,
            <span className="text-red-500 font-semibold"> 3D Muscle</span>{" "}
            Workout might be perfect for you!
          </p>
        </PricingBox>
        <PricingBox text1="FITNESS" text2="Fitness" text3="Pack" text4="$60">
          <p className=" leading-9">
            Shoulders the most overlooked body part for women. These three
            shoulder movements are great for overall
            <span className="text-red-500 font-semibold"> shaping</span> and
            full made functional strength.
          </p>
        </PricingBox>
        <PricingBox text1="HYBRID" text2="Ultimate" text3="Hybrid" text4="$79">
          <p className=" leading-9">
            Build both your leg strength and solid legs
            <span className="text-red-500 font-semibold"> workout</span> program
            that&apos;s heavy on squats, but highly effective at delivering
            results for you.
          </p>
        </PricingBox>
      </div>
    </div>
  );
}
