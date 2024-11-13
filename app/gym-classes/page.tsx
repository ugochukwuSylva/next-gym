"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";

export default function GymClasses() {
  const { targetRef } = useFixedOnScroll();
  return (
    <div className="h-full " ref={targetRef}>
      Your gym classes
    </div>
  );
}
