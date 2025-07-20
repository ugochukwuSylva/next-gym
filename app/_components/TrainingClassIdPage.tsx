"use client";

import { useState } from "react";
import Image from "next/image";
import PagesBackgroundContainer from "./PagesBackgroundContainer";
import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import SectionHeaders from "./SectionHeaders";
import BookingForm from "./BookingForm";
import BackButton from "./BackButton";

type Props = {
  selectedClass: {
    workoutType: string;
    workoutDescription: string;
    image: string;
    price: string;
    id: number;
  };
  user: string;

  children: React.ReactNode;
};

type ButtonProps = {
  setIsClickedBooking: Dispatch<SetStateAction<boolean>>;
};

export default function TrainingClassIdPage({
  selectedClass,
  children,
  user,
}: Props) {
  const [isClickedBooking, setIsClickedBooking] = useState<boolean>(false);
  const { targetRef } = useFixedOnScroll();

  const { workoutType, workoutDescription, image, id } = selectedClass;
  const [text3, text4] = workoutType.split(" ");

  return (
    <div className=" md:min-h-screen lg:h-screen w-full" ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/trainingClassId-image.jpg"
        altText="background image"
      />

      <div className="bg-gradient-to-b from-white to-red from-50% to-50% pb-6 lg:pb-[100vh]">
        <div className="bg-white flex flex-col lg:flex-col-reverse justify-center items-center md:grid grid-cols-2 lg:justify-start lg:items-start gap-8 py-24  px-4 md:px-10 w-full ">
          <div className="w-full">
            <SectionHeaders text1="" text2="" text3={text3} text4={text4} />
            <p className="text-center md:text-start text-lg leading-loose text-stone-700">
              {workoutDescription}
            </p>

            <div className="flex flex-col-reverse md:flex-row gap-3 mt-8">
              <BackButton />
              <BookingButton setIsClickedBooking={setIsClickedBooking} />
            </div>
          </div>

          <div className="relative w-full h-96 lg:h-full overflow-hidden rounded-md">
            <Image
              src={image}
              alt="Image of a gym trainer"
              fill
              className="object-cover object-center"
              quality={100}
            />
          </div>
        </div>
      </div>
      <BookingForm user={user} id={id} isBlured={isClickedBooking}>
        {children}
      </BookingForm>
    </div>
  );
}

// prettier-ignore
function BookingButton({setIsClickedBooking}:ButtonProps) {
  return (
    <button
      onClick={()=>setIsClickedBooking(true)}
      className=" bg-red-500 w-full md:w-fit text-gray-200 px-6 py-3 border-none rounded-md hover:bg-stone-900 transition-all duration-300"
    >
      Book Now
    </button>
  );
}
