import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { formatDate } from "../_utils/formatDate";
import ActionButton from "./ActionButton";

import CheckoutButton from "./CheckoutButton";

type Props = {
  booking: {
    created_at: string;
    instructor: string;
    status: string;
    trainingClasses: {
      image: string;
      price: number;
      stripePriceId: string;
      workoutType: string;
    };
    members: { email: string };
  };
};

export default function BookingCard({ booking }: Props) {
  return (
    <div className="w-full mb-3 pb-2 border-b border-b-stone-200 hover:bg-stone-100 hover:shadow-lg transition-all duration-200">
      <div className="grid grid-cols-[18rem_1fr_1fr_1fr_1fr_1fr] justify-center items-center">
        <div className="h-24 flex items-center gap-2">
          <Image
            src={booking.trainingClasses.image}
            alt="booking-image"
            height={100}
            width={100}
            className="object-cover h-full"
          />
          <div className="h-full py-2 flex flex-col justify-between">
            <div className="leading-4">
              <p className="text-red-500 font-bold">
                {booking.trainingClasses.workoutType}
              </p>
              <p className="text-sm text-stone-800">Gym Class</p>
            </div>
            <p className="text-xs ">Trainer: {booking.instructor}</p>
          </div>
          {/*  */}
        </div>
        <div className="text-center text-xs">
          {formatDate(booking.created_at)}
        </div>
        <div className="text-center">$ {booking.trainingClasses.price}</div>
        <div
          className={`text-center text-sm p-1 border rounded-full ${
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
              email={booking.members.email}
            />
          ) : (
            <div>Paid</div>
          )}
        </div>
        <div className=" flex justify-center items-center gap-2">
          {booking.status === "unconfirmed" && (
            <ActionButton action="">
              <TbEdit />
            </ActionButton>
          )}

          <ActionButton action="">
            <RiDeleteBin6Line />
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
