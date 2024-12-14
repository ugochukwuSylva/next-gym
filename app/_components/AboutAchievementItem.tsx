"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  headerText: number;
  paragraphText: string;
  index: number;
};

function AboutAchievementItem({ headerText, paragraphText, index }: Props) {
  const [inView, setInView] = useState(false);

  // Use Intersection Observer hook
  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.5, // Element must be 50% visible
  });

  // If the element is in view, start the count-up animation
  if (isInView && !inView) {
    setInView(true);
  }

  return (
    <div
      ref={ref}
      className="bounce border border-1 min-h-48 flex flex-col justify-center items-center gap-4 rounded-md  transition-all duration-200"
    >
      <h1 className="text-red-500 text-5xl font-semibold ">
        {inView && (
          <CountUp
            start={0}
            end={headerText}
            duration={index + 5}
            delay={index / 3}
          />
        )}
        {paragraphText === "Global Winners" && "+"}
      </h1>
      <p className="text-stone-500 text-xl">{paragraphText}</p>
    </div>
  );
}

export default AboutAchievementItem;
