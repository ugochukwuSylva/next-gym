import BookingCard from "@/app/_components/BookingCard";
import BookingsFilter from "@/app/_components/BookingsFilter";
import SpinnerMini from "@/app/_components/SpinnerMini";
import { getBookings } from "@/app/_lib/data-services";
import { auth } from "@/auth";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Bookings",
};

type Props = {
  searchParams: { status: string };
};

export default async function page({ searchParams }: Props) {
  const session = await auth();

  if (!session) throw new Error("You must be signed in");
  const memberId = session?.user.memberId;

  const bookings = await getBookings(memberId);

  const filter = searchParams?.status ?? "all";
  let filteredBookings = [];

  if (filter === "all")
    filteredBookings = bookings.filter((booking) => booking.status);
  if (filter === "confirmed")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "confirmed"
    );
  if (filter === "unconfirmed")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "unconfirmed"
    );

  return (
    <div
      className={`${
        !filteredBookings && "flex justify-center items-center"
      } h-full`}
    >
      <>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-1 sm:pt-4">
          <p className="text-lg sm:text-xl text-stone-800 mb-2 sm:mb-0">
            Your bookings
          </p>
          <div className="flex gap-2 *:transition-all *:duration-300 mb-3 sm:mb-0">
            <BookingsFilter option="all" />
            <BookingsFilter option="confirmed" />
            <BookingsFilter option="unconfirmed" />
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-[16rem_1fr_1fr_1fr_1fr] lg:grid-cols-[16rem_1fr_1fr_1fr_1fr_1fr] text-stone-200 bg-stone-700 mb-2 mt-3 *:text-center">
          <span className="[&:not(:last-child)]:border-r p-4">Program</span>
          <span className="[&:not(:last-child)]:border-r p-4">
            Booking date
          </span>
          <span className="[&:not(:last-child)]:border-r p-4 hidden lg:block">
            Price
          </span>
          <span className="[&:not(:last-child)]:border-r p-4 hidden lg:block">
            Status
          </span>
          <span className="[&:not(:last-child)]:border-r p-4">Payment</span>
          <span className="[&:not(:last-child)]:border-r p-4">Actions</span>
        </div>
      </>
      {!filteredBookings.length ? (
        <BookNow />
      ) : (
        filteredBookings.map((booking) => (
          <Suspense key={booking.id} fallback={<SpinnerMini />}>
            <BookingCard booking={booking} />
          </Suspense>
        ))
      )}
    </div>
  );
}

function BookNow() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <p className="text-xl text-stone-600 text-center">
        {" "}
        You don&apos;t have any confirmed booking yet{" "}
      </p>
      <Link
        href={`/training-classes`}
        className="bg-red-500 w-full md:w-fit text-gray-200 px-6 py-3 border-none rounded-md hover:bg-stone-900 transition-all duration-300 mt-auto text-center"
      >
        Book now
      </Link>
    </div>
  );
}
