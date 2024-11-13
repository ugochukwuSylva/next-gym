"use client";

import { useState } from "react";

import { FaRegClock } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import TabHeaderItem from "./TabHeaderItem";
import TabContentItem from "./TabContentItem";

export default function Accordion() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs = ["Build Muscle", "Workout Routines", "Pro Tips", "Cardio"];

  const contents = [
    {
      text: "This muscle building, Progressive circuit may start with one ordinary exercise: the dumbbell hang clean, also known as the motion you make to rack a heavy dumbbell after a grueling set of curls. The transformation you'll see as a result of this routine.",
      title: "The Progressive Dumbbell",
      miniText: "45 Minutes Daily",
      icon: <FaRegClock />,
    },
    {
      text: "You'll start first with the dumbbell hang clean before moving on to the dumbbell squat and clean, which will work your quads, hamstrings, and glutes even harder. Finish off the set with a dumbbell hang clean and squat and press to bring the progression full circle",
      title: "The 5 intensity Workouts",
      miniText: "High-intensity Hurricane Workouts",
      icon: <RiTeamFill />,
    },
    {
      text: "The most important part of bench pressing is your set-up. When you lay back on the bench, make sure you line up your eyes directly under the bar. This will help for two reasons. First, it will allow you to pull the bar forward, setting your shoulders and back in the proper shelf position.",
      title: "Increased Bench Press",
      miniText: "Some new tips to increase your bench press",
      icon: <FaThumbsUp />,
    },
    {
      text: "Run on a track or field. Note a spot on the track that's 20 meters away to one side of you and one that's 20 meters to the opposite side. Turn and run 20 meters to one marker. Stop, turn the other direction, and run all the way back till you hit the second marker.",
      title: "1,000 meters shuttle run",
      miniText: "4 days every week",
      icon: <FaRunning />,
    },
  ];

  return (
    <div className=" min-h-96">
      <div className="w-full">
        <div className="block md:flex md:gap-6 md:items-center md:h-12 md:w-fit pr-8  md:border-b-4 md:border-stone-800 ">
          {tabs.map((tab, i) => (
            <TabHeaderItem
              onTabClick={() => setCurrentTab(i)}
              key={tab}
              tab={tab}
              isCurrentTabHeader={currentTab === i}
            />
          ))}
        </div>
      </div>
      {/* Displays one content at a time */}
      {contents.slice(currentTab, currentTab + 1).map((content) => (
        <TabContentItem key={content.title} content={content} />
      ))}
    </div>
  );
}
