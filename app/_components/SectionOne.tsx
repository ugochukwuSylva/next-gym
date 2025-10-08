import SectionHeaders from "./SectionHeaders";
import WorkoutList from "./WorkoutList";
import AnimatedImage from "./AnimatedImage";

export default function SectionOne() {
  return (
    <section className="bg-white  w-full md:px-6  pt-[40rem] md:pt-[45rem] flex  flex-col-reverse items-start lg:pt-[25rem] lg:grid lg:grid-cols-[20rem_1fr] gap-1 lg:gap-16 overflow-x-hidden">
      <div className="relative right-10 md:m-auto lg:right-0 h-full">
        <AnimatedImage />
      </div>

      <div className="px-6 md:px-10 ">
        <SectionHeaders
          text1="Welcome to Body Building"
          text2="Start"
          text3="Workout"
          text4="Routines"
        >
          {" "}
          All you need to eliminate your belly fat is a few sqaure feet whether
          it&apos;s in the gym or in your living room to complete this
          flab-blasting body-weight circuit
        </SectionHeaders>

        <WorkoutList />
      </div>
    </section>
  );
}
