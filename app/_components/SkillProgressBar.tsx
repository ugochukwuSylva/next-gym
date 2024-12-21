import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
  skill: string;
  progress: string;
};

function SkillProgressBar({ skill, progress }: Props) {
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
    <div ref={ref} className=" [&:not(:last-child)]:mb-2">
      <div
        style={{ width: progress }}
        className=" flex justify-between items-center"
      >
        <span className=" text-stone-800 font-medium translate-y-2 text-lg">
          {skill}
        </span>
      </div>

      <div className="mt-2 w-full h-1.5 bg-stone-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: progress }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-red-500 font-thin text-3xl  text-end h-full bg-gradient-to-r from-green-950 from-30% to-red-500 to-70% "
        >
          {inView && (
            <span className="absolute -translate-x-14 -translate-y-8">
              <CountUp end={Number(progress.split("%")[0])} duration={5} />%
            </span>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default SkillProgressBar;
