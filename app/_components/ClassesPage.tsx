"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import PagesBackgroundContainer from "./PagesBackgroundContainer";
import SectionHeaders from "./SectionHeaders";
import ClassBooking from "./ClassBooking";
import ClassesUpdate from "./ClassesUpdate";

type Props = {
  classes: {
    workoutType: string;
    workoutDescription: string;
    image: string;
    price: string;
    id: string;
  }[];
};

export default function ClassesPage({ classes }: Props) {
  const { targetRef } = useFixedOnScroll();

  return (
    <div className="md:min-h-screen lg:h-screen" ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/gymClasses-bg.jpg"
        altText="background image"
      />

      <div className=" py-10 bg-white">
        <div className="flex justify-center group toCenter">
          <SectionHeaders
            text1="Start today"
            text2="Group"
            text3="Exercise"
            text4="Classes"
          />
        </div>
      </div>

      <div className=" bg-gradient-to-b from-white to-transparent from-55% to-55% pb-6 lg:pb-[110vh]">
        <div className="px-3 md:px-20 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2  pb-16 gap-6">
            {classes.map((el) => (
              <ClassBooking
                key={el.workoutType}
                textHeader={el.workoutType}
                text={el.workoutDescription.slice(0, 300)}
                price={el.price}
                imageUrl={el.image}
                id={el.id}
              />
            ))}
          </div>

          <ClassesUpdate />
        </div>
      </div>
    </div>
  );
}
