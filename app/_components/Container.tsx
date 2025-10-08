"use client";

import PagesBackgroundContainer from "./PagesBackgroundContainer";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className=" md:min-h-screen lg:h-screen ">
      <PagesBackgroundContainer
        imageUrl="/dashboard-bg.jpg"
        altText="background image"
      />
      <div className=" bg-gradient-to-b from-white to-transparent from-55% to-55% pb-6 lg:pb-[110vh]">
        {children}
      </div>
    </div>
  );
}
