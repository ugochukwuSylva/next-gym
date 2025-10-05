"use client";

import { useRef } from "react";
import useViewPort from "../customHook/useViewPort";
import InstructorCard from "./InstructorCard";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";

// swiper css styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

type Props = {
  trainers: { fullName: string; specialty: string; image: string }[];
};

export default function TrainersSlider({ trainers }: Props) {
  const btnLeft: object = {
    top: "40%",
    transform: "translate(-50%,-50%)",
  };

  const btnRight: object = {
    top: "40%",
    transform: "translate(50%,-50%)",
  };

  const swiperRef = useRef<SwiperClass | null>(null);

  function nextSlide() {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }

  function prevSlide() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }

  const { size: isScreenSize1249 } = useViewPort(1249);
  const { size: isScreenSize767 } = useViewPort(767);

  return (
    <div className="relative   w-full  h-[35rem] flex justify-center items-center">
      <div className="mt-8  relative w-[20rem] md:w-[45rem]  lg:w-[75rem] h-full ">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          autoplay={{ delay: 5000 }}
          centeredSlides
          speed={1000}
          spaceBetween={0}
          slidesPerView={isScreenSize767 ? 1 : isScreenSize1249 ? 3 : 5}
          pagination={{ clickable: true }}
          className="swiperContainer"
        >
          {trainers.map((trainer) => {
            return (
              <SwiperSlide key={trainer.fullName}>
                <InstructorCard
                  fullName={trainer.fullName}
                  specialty={trainer.specialty}
                  image={`${trainer.image}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <FaChevronLeft
        // className=" text-2xl cursor-pointer absolute left-10 text-red-500 z-20"
        className="absolute left-10 text-[2.5rem] transition-all duration-500 rounded-full cursor-pointer   text-red-500 hover:text-white z-20 hover:bg-red-500/80 p-2"
        style={btnLeft}
        onClick={nextSlide}
      />

      <FaChevronRight
        className="absolute right-10 text-[2.5rem] transition-all duration-500 rounded-full cursor-pointer   text-red-500 hover:text-white z-20 hover:bg-red-500/80 p-2"
        style={btnRight}
        onClick={prevSlide}
      />
    </div>
  );
}
