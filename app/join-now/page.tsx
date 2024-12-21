import { Metadata } from "next";
import { auth } from "@/auth";
import { Suspense } from "react";
import JoinNowPage from "../_components/JoinNowPage";

export const metadata: Metadata = {
  title: "Join Now",
};

export default async function page() {
  const session = await auth();
  const user = session?.user?.name;

  return (
    <Suspense fallback={<p>Please wait...</p>}>
      <JoinNowPage user={user} />
    </Suspense>
  );
}
