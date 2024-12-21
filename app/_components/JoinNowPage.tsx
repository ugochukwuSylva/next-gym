"use client";

import useFixedOnScroll from "@/app/customHook/useFixedOnScroll";

type Props = {
  user: string | null | undefined;
};

export default function JoinNowPage({ user }: Props) {
  const { targetRef } = useFixedOnScroll();
  const firstName = user?.split(" ")[0];

  return (
    <div className="md:min-h-screen lg:h-screen " ref={targetRef}>
      <div className="absolute left-0 top-0 h-full w-full ">
        <div className="h-full w-full pt-[7rem] md:pt-40">
          <p className="">Welcome, {firstName}</p>
        </div>
      </div>
    </div>
  );
}
