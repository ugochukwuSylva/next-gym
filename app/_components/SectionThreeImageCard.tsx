import Image from "next/image";
import Link from "next/link";

type Props = {
  text1: string;
  text2: string;
  text3: string;
  image: string;
};

export default function SectionThreeImageCard({
  text1,
  text2,
  text3,
  image,
}: Props) {
  return (
    <li className="relative group h-72 shadow-sm rounded-md mb-4 md:mb-0 hover:animate overflow-hidden">
      <Image
        src={image}
        fill
        alt="gym-excercise"
        className="object-cover z-10"
        sizes="100"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/60 z-20"></div>

      <div className="flex flex-col justify-center items-center gap-6 w-full h-full text-white *:z-30">
        <p className="text-2xl font-semibold after:content-[''] after:block after:h-[0.1px] after:w-10 after:bg-white after:m-auto after:mt-4 group-hover:after:color-flicker">
          {text1}
        </p>
        <p className="text-stone-200">{text2}</p>
        <p className="uppercase tracking-widest text-red-500/40 absolute top-10  right-25 text-3xl font-bold ">
          {text3}
        </p>

        <Link
          href="/training-classes"
          className=" bg-red-500 px-6 py-2 rounded-md transition duration-300 hover:bg-white hover:text-red-500"
        >
          <p className="transition duration-500 group-hover:animate-mini">
            Start Now
          </p>
        </Link>
      </div>
    </li>
  );
}
