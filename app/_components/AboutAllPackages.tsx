import Image from "next/image";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";

function AboutAllPackages() {
  return (
    <div className="min-h-screen relative mt-20 px-10 py-20 flex justify-start items-center">
      <Image
        src="/about-package-image-2.jpg"
        alt=""
        fill
        className="object-cover object-center z-10"
        quality={100}
      />
      <div className="z-10 space-y-8 text-center lg:text-start w-full lg:w-[38%]">
        <p className="uppercase text-white text-2xl font-semibold">
          Gym classes this summer
        </p>
        <h1 className="text-red-500 text-6xl capitalize font-semibold">
          40% Discount on all packages
        </h1>

        <Link
          href="/training-classes"
          className="m-auto lg:m-0 translate-y-20  flex justify-between items-center w-36 *:text-white  bg-red-500  py-4 px-5 rounded-md transition-colors duration-500 hover:bg-white *:hover:text-red-500 "
        >
          <span className="text-xl transition-colors duration-500">
            <HiOutlineUser />
          </span>

          <span className=" h-full uppercase transition-all duration-500">
            Join Now
          </span>
        </Link>
      </div>
    </div>
  );
}

export default AboutAllPackages;
