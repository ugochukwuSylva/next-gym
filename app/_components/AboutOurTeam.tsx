import { Suspense } from "react";
import { getTrainers } from "../_lib/data-services";
import InstructorsSlider from "./InstructorsSlider";
import SectionHeaders from "./SectionHeaders";

async function AboutOurTeam() {
  const trainers = await getTrainers();

  return (
    <div className=" bg-white pt-32 z-50">
      <div className="flex justify-center group toCenter">
        <SectionHeaders
          text1="Meet The Team"
          text2="Our Expert"
          text3="Trainers"
        />
      </div>

      <Suspense fallback={<p>Please wait...</p>}>
        <InstructorsSlider trainers={trainers} />
      </Suspense>
    </div>
  );
}

export default AboutOurTeam;
