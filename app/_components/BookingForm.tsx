import Image from "next/image";
import CloseButton from "./CloseButton";
import { useRouter } from "next/navigation";

type Props = {
  isBlured: boolean;
  children: React.ReactNode;
};

export default function BookingForm({ isBlured, children }: Props) {
  const router = useRouter();

  return (
    <div
      className={`flex justify-center items-center fixed w-full left-0 top-0 z-50 bg-black/50 backdrop-blur-sm h-screen transition-all duration-700 ${
        isBlured ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <CloseButton close={() => router.back()} />

      <form className="flex justify-end items-center relative min-h-[30rem] w-[95%] sm:w-[80%] xl:w-[60rem] rounded-md shadow-black overflow-hiddens px-0 py-6 lg:p-10   md:bg-gradient-to-r  lg:bg-gradient-120 from-transparent  to-white/70 lg:from-40% lg:to-40% from-50% to-50%">
        <div className=" w-full md:w-[50%] lg:w-80 flex flex-col gap-6 px-8 lg:px-0 lg:pr-4">
          <input
            type="text"
            required
            placeholder="Full name"
            className="border p-3 placeholder:text-stone-600 md:placeholder:text-stone-400  bg-white/70 md:bg-white focus:outline-none focus:ring-2 focus:ring-black/20 uppercase tracking-wider"
          />

          {children}

          <textarea
            placeholder="Extra information (optional)"
            className="h-32 md:h-24 border p-3 text-lg focus:outline-none focus:ring-2 focus:ring-black/20 placeholder:text-stone-600 md:placeholder:text-stone-400  bg-white/70 md:bg-white"
          />

          <button className=" bg-red-500 w-full  text-gray-200 px-6 py-3 border-none rounded-md hover:bg-stone-900 transition-all duration-300">
            Submit
          </button>
          <Image
            src="/bookingForm-bg.jpg"
            alt="form background image"
            fill
            className="object-cover rounded-md object-left  -z-20"
          />
        </div>
      </form>
    </div>
  );
}
