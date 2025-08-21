import Container from "../_components/Container";
import DashboardSideNavItem from "../_components/DashboardSideNavItem";
import Greetings from "../_components/Greetings";
import SignOutButton from "../_components/SignOutButton";

import { FaHome } from "react-icons/fa";
// import { MdManageAccounts } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";

import { auth } from "@/auth";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const session = await auth();
  const user = session?.user?.name ?? "";
  const image = session?.user?.image ?? "";

  const firstName = user.split(" ")[0];

  return (
    <Container>
      <div className="grid grid-cols-[4rem_1fr] sm:grid-cols-[5rem_1fr] md:grid-cols-[15rem_1fr] lg:grid-cols-[20rem_1fr] px-1 py-4 md:py-10 lg:p-10 gap-2 sm:gap-3 h-full bg-white overflow-x-hidden">
        <aside className="flex flex-col  h-full bg-stone-50 p-0 sm:p-3 border-r">
          <DashboardSideNavItem link="/dashboard" text="Home">
            <FaHome />
          </DashboardSideNavItem>
          <DashboardSideNavItem link="/dashboard/bookings" text="Bookings">
            <MdOutlineEditCalendar />
          </DashboardSideNavItem>
          {/* <DashboardSideNavItem link="/dashboard/profile" text="Profile">
            <MdManageAccounts />
          </DashboardSideNavItem> */}
          <DashboardSideNavItem link="/dashboard/cart" text="Cart">
            <BsCart4 />
          </DashboardSideNavItem>

          <SignOutButton />
        </aside>

        <main>
          <Greetings name={firstName} image={image} />
          {children}
        </main>
      </div>
    </Container>
  );
}
