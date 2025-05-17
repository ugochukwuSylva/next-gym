import { Metadata } from "next";
import { auth } from "@/auth";
import DashboardPage from "../_components/DashBoardPage";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function page() {
  const session = await auth();
  // console.log(session);
  const user = session?.user?.name;

  return <DashboardPage user={user} />;
}
