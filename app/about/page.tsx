"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";

export default function About() {
  const { targetRef } = useFixedOnScroll();

  return (
    <div ref={targetRef} className="h-full w-full relative">
      About our team
    </div>
  );
}
