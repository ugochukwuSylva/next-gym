import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

type Props = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  children: React.ReactNode;
};

export default function PricingBox({
  text1,
  text2,
  text3,
  text4,
  children,
}: Props) {
  return (
    <div className=" flex flex-col  bg-gradient-to-b from-black/60  via-black/20 to-transparent/5 from-10% rounded-md hover:animate">
      <div className="flex flex-col items-center md:items-start gap-16 w-full relative pt-16 px-8 md:px-8 lg:px-3">
        <div className="absolute top-10 left:10 lg:left-3 text-5xl text-red-500/15 font-extrabold uppercase">
          {text1}
        </div>
        <div className="text-red-500 text-xl sm:text-center md:text-start">
          <span className="">{text2} </span>
          <span className="font-semibold border-b-2 border-dotted border-red-500 pb-0.3 inline-block">
            {text3}
          </span>
        </div>
        <div>
          <span className="text-7xl font-semibold">{text4}</span>
          <span className="text-stone-400">/ month</span>
        </div>
        {children}
      </div>
      <ButtonLink />
    </div>
  );
}

function ButtonLink() {
  return (
    <div className="mt-20 lg:mt-auto bg-red-500 px-6 py-4  transition duration-300 hover:bg-white hover:text-red-500 text-white border-b-4 border-transparent hover:border-b-4 hover:border-b-red-500">
      <Link href="#">
        <p className="transition duration-500 group-hover:animate-mini flex items-center gap-3 justify-center">
          More details <TbExternalLink className="font-semibold text-xl" />
        </p>
      </Link>
    </div>
  );
}
