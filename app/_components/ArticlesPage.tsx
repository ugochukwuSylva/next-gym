"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import PagesBackgroundContainer from "./PagesBackgroundContainer";

export default function ArticlesPage() {
  const { targetRef } = useFixedOnScroll();

  return (
    <div className="md:min-h-screen lg:h-screen" ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/articles-bg.jpg"
        altText="background image"
      />
    </div>
  );
}
