"use client";

import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { formatDate } from "../_utils/formatDate";
import ActionButton from "./ActionButton";
import CheckoutButton from "./CheckoutButton";
import { deleteBooking } from "../_lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import toast from "react-hot-toast";

type Props = {
  booking: {
    id: number;
    created_at: string;
    instructor: string;
    comment: string;
    status: string;
    trainingClasses: {
      image: string;
      price: number;
      stripePriceId: string;
      workoutType: string;
    };
    members: { email: string; fullName: string };
  };
};

export default function BookingCard({ booking }: Props) {
  const [isPending, setTransition] = useTransition();

  async function handleDelete(id: number) {
    (function () {
      setTransition(async () => {
        const deleteSelectedBooking = await deleteBooking(id);

        if (deleteSelectedBooking.success) {
          toast.success(deleteSelectedBooking.message);
        } else {
          toast.error(deleteSelectedBooking.message);
        }
      });
    })();
  }

  return (
    <div className="w-full pt-2 sm:pt-0 mb-3 pb-2 border-b border-b-stone-200 [&:not(:last-child)]:border-t border-t-stone-200 sm:[&:not(:last-child)]:border-t-0 hover:bg-stone-100 hover:shadow-lg transition-all duration-200">
      <div className="flex justify-between sm:grid grid-cols-[16rem_1fr_1fr_1fr] lg:grid-cols-[16rem_1fr_1fr_1fr_1fr_1fr] sm:justify-center items-center">
        <div className=" flex items-center h-full  gap-2">
          <div className="h-24 w-16 sm:min-w-24 overflow-hidden">
            <Image
              src={booking.trainingClasses.image}
              alt="booking-image"
              height={100}
              width={100}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="h-full flex flex-col">
            <div className="leading-4">
              <p className="text-sm text-red-500 font-bold text-nowrap">
                {booking.trainingClasses.workoutType}
              </p>
              <p className="text-sm text-stone-500 uppercase">Gym Class</p>
            </div>

            <div className="flex sm:hidden items-center">
              <p className="italic">$ {booking.trainingClasses.price}</p>
              <span className="text-stone-500 text-sm italic ml-1">
                &bull;{booking.status === "unconfirmed" ? " unpaid" : " paid"}
              </span>
            </div>

            <div className="text-xs block sm:hidden text-stone-500 whitespace-nowrap">
              {formatDate(booking.created_at)}
            </div>
            <p className="text-xs text-nowrap mt-auto">
              Trainer: {booking.instructor}
            </p>
          </div>
          {/*  */}
        </div>
        <div className="text-center text-xs hidden sm:block">
          {formatDate(booking.created_at)}
        </div>
        <div className="hidden lg:block text-center">
          $ {booking.trainingClasses.price}
        </div>
        <div
          className={`hidden lg:block text-center text-sm px-2 p-1 w-fit m-auto border rounded-full ${
            booking.status === "unconfirmed"
              ? "bg-blue-50 text-blue-800 border-blue-500"
              : "bg-green-50 text-green-500  border-green-500 "
          }`}
        >
          {booking.status}
        </div>
        <div className="text-center text-sm">
          {booking.status === "unconfirmed" ? (
            <CheckoutButton
              priceId={booking.trainingClasses.stripePriceId}
              bookingId={booking.id}
              email={booking.members.email}
              pending={isPending}
            />
          ) : (
            <div className="hidden sm:block">Paid</div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          {booking.status === "unconfirmed" && (
            <ActionButton
              actionType="update"
              id={booking.id}
              user={booking.members.fullName}
              comment={booking.comment}
            >
              <TbEdit />
            </ActionButton>
          )}

          <ActionButton
            action={handleDelete}
            actionType="delete"
            id={booking.id}
            isPending={isPending}
          >
            {isPending ? <SpinnerMini /> : <RiDeleteBin6Line />}
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
