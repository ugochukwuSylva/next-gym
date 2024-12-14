import Image from "next/image";
import TestimonialAvatar from "./TestimonialAvatar";

type Props = {
  name: string;
  image: string;
  avater: string;
  children: React.ReactNode;
};

export default function TestimonialCard({
  children,
  name,
  image,
  avater,
}: Props) {
  return (
    <div className="relative bg-gradient-to-br from-red-500 to-black to-80%  w-full min-h-80   flex flex-col rounded-md   gap-5 justify-center items-center px-6 lg:px-16 py-6 text-white border-b-4 border-red-500 mb-12 md:mb-0 z-10">
      <div className="text-center">
        <p className="">{name} </p>
        <span className="text-stone-400">BodyBuilder</span>
      </div>

      <blockquote>
        <p className="text-xl text-center italic before:content-['\201F'] after:content-['\201F']  before:text-9xl after:text-9xl before:top-0 before:left-0 before:absolute after:absolute after:-bottom-0 after:right-0 after:text-stone-100 before:text-stone-100 after:rotate-[180deg]">
          {children}
        </p>
      </blockquote>
      <Image
        src={image}
        alt="background-image"
        fill
        className="object-cover rounded-md -z-40 opacity-20"
        sizes="100"
      />

      <div className="absolute -top-[13%] left-[40%]">
        <TestimonialAvatar avatarImage={avater} />
      </div>
    </div>
  );
}
