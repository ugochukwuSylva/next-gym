"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";

export default function Article() {
  const { targetRef } = useFixedOnScroll();
  return (
    <div className="h-full" ref={targetRef}>
      Article
    </div>
  );
}
