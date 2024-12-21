"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";

export default function ArticlesPage() {
  const { targetRef } = useFixedOnScroll();

  return <div className="md:min-h-screen lg:h-screen" ref={targetRef}></div>;
}
