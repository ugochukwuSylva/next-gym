import { useState } from "react";
import InstructorCard from "./InstructorCard";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function InstructorsSlider() {
  const btnLeft: object = {
    top: "40%",
    transform: "translate(-50%,-50%)",
  };

  const btnRight: object = {
    top: "40%",
    transform: "translate(50%,-50%)",
  };

  const list = ["A", "B", "C", "D", "E", "F", "G"];
  const [translatePosition, setTranslatePosition] = useState<number>(0);

  function prev() {
    setTranslatePosition((prev) => prev - 1);
  }

  function next() {
    setTranslatePosition((next) => next + 1);
  }

  return (
    <div className="relative w-full h-[35rem]">
      <div className="mt-8 relative w-[75rem] h-full m-auto overflow-x-hidden">
        {list.map((_, i) => {
          return (
            <InstructorCard
              key={i}
              fullName="ugo"
              specialty="builder"
              image="/trainer-image-6.jpg"
              index={i}
              translatePosition={translatePosition}
            />
          );
        })}
      </div>

      <FaChevronLeft
        className="text-2xl cursor-pointer absolute left-0 text-stone-500"
        style={btnLeft}
        onClick={prev}
      />

      <FaChevronRight
        className="text-2xl cursor-pointer absolute right-0  text-stone-500"
        style={btnRight}
        onClick={next}
      />
    </div>
  );
}

export default InstructorsSlider;
