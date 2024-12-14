import Image from "next/image";

type Props = {
  image: string;
  headingText: string;
  backgroundText: string;
  children: React.ReactNode;
};

export default function HeroItemMini({
  image,
  headingText,
  backgroundText,
  children,
}: Props) {
  return (
    <div className="relative md:min-h-80 rounded-sm hover:animate w-full lg:w-1/2 shadow-sm">
      <Image
        src={image}
        alt=""
        fill
        quality={80}
        className="object-cover -z-30 "
        sizes="100"
      />
      <div className="absolute  top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-red-950/90 from-10% to-red-400/50  -z-20"></div>
      {/*  */}
      <span className="absolute text-red-950 text-6xl -z-10 uppercase font-extrabold top-12 left-9">
        {backgroundText}
      </span>
      <div className="z-50 p-10  flex flex-col h-full justify-center">
        <h1 className="uppercase text-gray-200 text-3xl font-bold mb-6">
          {headingText}
        </h1>
        {children}
      </div>
    </div>
  );
}
