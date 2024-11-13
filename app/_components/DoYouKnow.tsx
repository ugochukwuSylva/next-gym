import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function DoYouKnow() {
  return (
    <div className="flex flex-col gap-8 z-10">
      <div>
        <h1 className="uppercase tracking-wider text-lg font-bold text-stone-300">
          Do you know
        </h1>
        <p className="leading-8">
          Gyming is not a destination, it is a way of life. Many newcomers to
          the gym have lofty expectations about rapid weight loss or significant
          muscle gain. However, the reality of fitness involves gradual
          progress, consistency, and often a learning curve.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Link
          href=""
          className="flex items-center gap-3 group transition-all cursor-pointer"
        >
          <span className="rounded-full p-2 bg-red-500 text-xl">
            <FaLocationDot />
          </span>{" "}
          <span>Los angeles, 12634 Long Beach</span>
        </Link>

        <Link href="tel:09096859314" className="flex items-center gap-3">
          <span className="rounded-full p-2 bg-red-500 text-xl">
            <MdCall />
          </span>
          <span>+234 909 685 9314</span>
        </Link>

        <Link
          href="mailTo:sylvaspecial@gmail.com"
          className="flex items-center gap-3"
        >
          <span className="rounded-full p-2 bg-red-500 text-xl  ">
            <HiOutlineMailOpen />
          </span>
          <span>Sylvaspecial@gmail.com</span>
        </Link>
      </div>
    </div>
  );
}
