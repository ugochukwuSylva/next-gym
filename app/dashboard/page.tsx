import DashboardBox from "../_components/DashboardBox";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineEditCalendar } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

import { auth } from "@/auth";
import {
  emailNotification,
  getBookings,
  getCart,
  getMembers,
} from "../_lib/data-services";
import Image from "next/image";
import dashboardImage from "@/public/dashboard-bg-2.jpg";

export const metadata = {
  title: "Dashboard",
};

export default async function page() {
  const session = await auth();
  const bookings = await getBookings(String(session?.user?.memberId));
  const totalBookings = bookings.length;
  const paidBookings = bookings.filter(
    (paidBooking) => paidBooking.isPaid
  ).length;

  const shoppings = await getCart(session?.user.email as string);

  const totalCartItems = shoppings.reduce(
    (cur, acc) => cur + acc.productQuantity,
    0
  );

  const isNewUser = (await getMembers())
    .map((member) => member.email)
    .includes(String(session?.user?.email));

  if (!isNewUser) await emailNotification("Your sign up is successful 😊");

  return (
    <>
      <div className="flex flex-col md:grid grid-cols-3 gap-1 md:gap-4 mt-2">
        <DashboardBox
          number={totalBookings}
          heading="All bookings"
          icon={<MdOutlineEditCalendar />}
        />
        <DashboardBox
          number={paidBookings}
          heading="Paid bookings"
          icon={<BsCashCoin />}
        />
        <DashboardBox
          number={totalCartItems}
          heading="Shoppings"
          icon={<BsCart4 />}
        />
      </div>

      <div className="w-full relative h-96 overflow-hidden rounded-md mt-4">
        <Image
          className="w-full h-full object-cover z-0"
          src={dashboardImage}
          placeholder="blur"
          alt="dashboard-image"
        />
        <div className="absolute top-0 left-0 h-full w-full  z-10 bg-black/70 p-10">
          <div className="h-full flex flex-col items-start justify-center">
            <p className="text-stone-400 text-4xl md:text-6xl font-bold">
              Get Started
            </p>
            <p className="text-7xl sm:text-8xl md:text-9xl text-red-800 font-black uppercase tracking-wide">
              Today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
