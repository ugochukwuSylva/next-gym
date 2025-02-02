"use client";

import GymVideo from "./GymVideo";
import CloseButton from "./CloseButton";

type Props = {
  setIsVideoShown: (status: boolean) => void;
};

export default function GymVideoOverlay({ setIsVideoShown }: Props) {
  return (
    <div className="fixed left-0  top-0 w-full h-screen bg-black/50 backdrop-blur-md z-50 flex justify-center items-center">
      <GymVideo />

      <CloseButton close={setIsVideoShown} />
    </div>
  );
}
