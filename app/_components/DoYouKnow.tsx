import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function DoYouKnow() {
  return (
    <div className="flex flex-col  items-center lg:items-start gap-8">
      <div>
        <h1 className="uppercase tracking-wider text-2xl md:text-lg font-bold text-stone-300 mb-8 md:mb-6 text-center">
          Do you know
        </h1>
        <p className="leading-8 text-center lg:text-start">
          Gyming is not a destination, it is a way of life. Many newcomers to
          the gym have lofty expectations about rapid weight loss or significant
          muscle gain. However, the reality of fitness involves gradual
          progress, consistency, and often a learning curve.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-4 items-center lg:flex-col lg:items-start">
        <Link
          href=""
          className="group flex flex-col  lg:flex-row items-center  gap-3 group transition-all cursor-pointer w-fit mb-4 lg:mb-0   "
        >
          <span className="rounded-full  p-2 bg-red-500 group-hover:bg-red-900/30 text-xl">
            <FaLocationDot className="group-hover:text-red-600 duration-500" />
          </span>{" "}
          <span className="group-hover:text-red-500  duration-300 delay-300">
            Los Angeles, 12634 Long Beach
          </span>
        </Link>

        <Link
          href="tel:09096859314"
          className="group flex flex-col  lg:flex-row items-center gap-3 group transition-all cursor-pointer w-fit mb-4 lg:mb-0 "
        >
          <span className="rounded-full p-2 bg-red-500 group-hover:bg-red-900/30 text-xl">
            <MdCall className="group-hover:text-red-600 duration-500" />
          </span>
          <span className="group-hover:text-red-500  duration-300 delay-300">
            +234 909 685 9314
          </span>
        </Link>

        <Link
          href="mailTo:sylvaspecial@gmail.com"
          className="group flex flex-col  lg:flex-row  items-center gap-3 group transition-all cursor-pointer w-fit mb-4 lg:mb-0 "
        >
          <span className="rounded-full p-2 bg-red-500 group-hover:bg-red-900/30 text-xl">
            <HiOutlineMailOpen className="group-hover:text-red-600 duration-500" />
          </span>
          <span className="group-hover:text-red-500  duration-300 delay-300">
            Sylvaspecial@gmail.com
          </span>
        </Link>
      </div>
    </div>
  );
}
