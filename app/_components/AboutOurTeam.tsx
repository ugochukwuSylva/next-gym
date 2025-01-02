import { Suspense } from "react";
import { getTrainers } from "../_lib/data-services";
import TrainersSlider from "./TrainersSlider";
import SectionHeaders from "./SectionHeaders";
import SpinnerMini from "./SpinnerMini";

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

      <Suspense fallback={<SpinnerMini />}>
        <TrainersSlider trainers={trainers} />
      </Suspense>
    </div>
  );
}

export default AboutOurTeam;
