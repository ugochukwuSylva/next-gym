"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";

export default function JoinNowPage() {
  const { targetRef } = useFixedOnScroll();

  return (
    <div className="h-full" ref={targetRef}>
      Join now
    </div>
  );
}
