"use client";

import Image from "next/image";
import CloseButton from "./CloseButton";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";
import { updateBooking } from "../_lib/actions";
import toast from "react-hot-toast";
import { useTransition } from "react";

type Props = {
  isBlured: boolean;
  children: React.ReactNode;
  user: string;
  comment: string;
  id: number;
  setIsClickedBooking: (click: boolean) => void;
};

export default function UpdateBookingForm({
  isBlured,
  children,
  user,
  comment,
  id,
  setIsClickedBooking,
}: Props) {
  const [isPending, setTransition] = useTransition();

  return (
    <div
      className={`flex justify-center items-center fixed w-full left-0 top-0 z-50 bg-black/50 backdrop-blur-sm h-screen transition-all duration-700 ${
        isBlured ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <CloseButton close={() => setIsClickedBooking(false)} />

      <form
        action={async (formData) => {
          const updateGymBooking = updateBooking.bind(null, id);
          (() => {
            setTransition(async () => {
              const update = await updateGymBooking(formData);
              if (update.success) {
                toast.success(update.message);
              } else {
                toast.error(update.message);
              }
            });
          })();
        }}
        className="flex justify-end items-center relative min-h-[30rem] w-[95%] sm:w-[80%] xl:w-[60rem] rounded-md shadow-black overflow-hiddens px-0 py-6 lg:p-10   md:bg-gradient-to-r  lg:bg-gradient-120 from-transparent  to-white/70 lg:from-40% lg:to-40% from-50% to-50%"
      >
        <div className=" w-full md:w-[50%] lg:w-80 flex flex-col gap-6 px-8 lg:px-0 lg:pr-4">
          <input
            disabled
            type="text"
            required
            name="fullName"
            placeholder="Full name"
            defaultValue={user}
            className="text-gray-700 border p-3 placeholder:text-stone-600 md:placeholder:text-stone-400  bg-white/70 md:bg-white focus:outline-none focus:ring-2 focus:ring-black/20 uppercase tracking-wider disabled:cursor-not-allowed"
          />

          {children}

          <textarea
            disabled={isPending}
            defaultValue={comment}
            placeholder="Extra information (optional)"
            name="optional-info"
            className="text-gray-700 h-32 md:h-24 border p-3 text-lg focus:outline-none focus:ring-2 focus:ring-black/20 placeholder:text-stone-600 md:placeholder:text-stone-400  bg-white/70 md:bg-white disabled:cursor-not-allowed"
          />
          <SubmitButton />

          <Image
            src="/bookingForm-bg.jpg"
            alt="form background image"
            fill
            className="object-cover rounded-md object-left -z-20"
          />
        </div>
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={` ${
        pending
          ? "opacity-50 cursor-not-allowed bg-stone-800"
          : "cursor-pointer hover:bg-stone-900"
      } bg-red-500 text-stone-200 w-full px-6 h-12 border-none rounded-md  transition-all duration-300`}
      disabled={pending}
    >
      {pending ? (
        <span className="flex justify-center items-center">
          Submitting
          <SpinnerMini />
        </span>
      ) : (
        "Submit"
      )}
    </button>
  );
}
