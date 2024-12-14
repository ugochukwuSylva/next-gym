import { auth } from "@/auth";
import { Metadata } from "next";
import JoinNowPage from "./page";

export const metadata = {
  title: "Join now",
};

async function layout() {
  const session = await auth();
  const user = session?.user?.name;

  return <JoinNowPage user={user} />;
}

export default layout;
