"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";
import PagesBackgroundContainer from "./PagesBackgroundContainer";

type Props = {
  user: string | null | undefined;
};

export default function DashboardPage({ user }: Props) {
  const { targetRef } = useFixedOnScroll();
  const firstName = user?.split(" ")[0];

  return (
    <div className="md:min-h-screen lg:h-screen " ref={targetRef}>
      <PagesBackgroundContainer
        imageUrl="/dashboard-bg.jpg"
        altText="background image"
      />

      <p className="">Welcome, {firstName}</p>
    </div>
  );
}
