"use client";

import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";

type Props = {
  instructors: { fullName: string }[];
  defaultInstructor: string;
};

export default function UpdateTrainer({
  instructors,
  defaultInstructor,
}: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selectInstructor, setSelectInstructor] = useState<string>("");

  return (
    <OutsideClickHandler onOutsideClick={() => setIsClicked(false)}>
      <div
        onClick={() => setIsClicked((prev) => !prev)}
        className=" cursor-pointer  py-3  bg-white/70 md:bg-white"
      >
        <div className="relative w-full flex justify-between items-center">
          <span className="absolute left-3  text-red-500 scale-125">
            {"🏋🏾‍♂️"}
          </span>
          <span className="px-4  tracking-wider uppercase pl-10 text-stone-700">
            {selectInstructor || defaultInstructor}
            <input
              className="opacity-0 absolute left-0"
              type="text"
              required
              name="instructor"
              defaultValue={selectInstructor}
            />
          </span>

          <RiArrowDownSFill
            className={`ml-2 text-stone-400 text-2xl transition-all duration-700 ${
              isClicked ? "rotate-180" : "rotate-0"
            }`}
          />

          <div
            className={`absolute top-9 left-0 w-full z-10 bg-white  transition-all duration-700 overflow-y-scroll ${
              isClicked
                ? "h-auto opacity-100 visible"
                : "h-0 opacity-0 invisible"
            }`}
          >
            <div className="px-2 py-1 bg-white">
              {instructors.map((instructor) => {
                function handleClick() {
                  setSelectInstructor(instructor.fullName);
                }

                return (
                  <div
                    onClick={handleClick}
                    key={instructor.fullName}
                    className={`px-2 py-2 mb-1 rounded-md hover:bg-red-50 ${
                      selectInstructor === `${instructor.fullName}`
                        ? "bg-red-50"
                        : ""
                    } text-gray-900 [&:not(:last-child)]:border-b`}
                  >
                    <span>{instructor.fullName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
