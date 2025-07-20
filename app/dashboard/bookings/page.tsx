import BookingCard from "@/app/_components/BookingCard";
import BookingsFilter from "@/app/_components/BookingsFilter";
import { getBookings } from "@/app/_lib/data-services";
import { auth } from "@/auth";
import Link from "next/link";

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

  let filter = searchParams?.status ?? "all";
  let filteredBookings;

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
      } h-full `}
    >
      <div>
        <div className="flex items-center justify-between pt-4">
          <p className="text-xl text-stone-800 ">Your bookings</p>
          <div className="flex gap-2 *:transition-all *:duration-300">
            <BookingsFilter option="all" />
            <BookingsFilter option="confirmed" />
            <BookingsFilter option="unconfirmed" />
          </div>
        </div>
        <div className="grid grid-cols-[18rem_1fr_1fr_1fr_1fr_1fr] text-stone-200 bg-stone-700 mb-2 p-5 mt-3 *:text-center">
          <span>Program</span>
          <span>Booking date</span>
          <span>Price</span>
          <span>Status</span>
          <span>Payment</span>
          <span>Actions</span>
        </div>
      </div>
      {!filteredBookings ? (
        <BookNow />
      ) : (
        filteredBookings.map((booking) => (
          <BookingCard booking={booking} key={booking.id} />
        ))
      )}
    </div>
  );
}

function BookNow() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <p className="text-xl text-stone-600">
        {" "}
        You don&apos;t have any booking yet{" "}
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
