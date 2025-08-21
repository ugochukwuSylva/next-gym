"use client";

import { signOutAction } from "../_lib/actions";
import { BiLogOut } from "react-icons/bi";
import SpinnerMini from "./SpinnerMini";
import { useTransition } from "react";

function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  function handleSignOut() {
    if (confirm("Are you sure you want to sign out ?")) {
      startTransition(() => signOutAction());
    }
  }

  return (
    <form action={handleSignOut} className="dashboardItems">
      <button className="text-xl text-stone-600 ">
        <BiLogOut />
      </button>
      <button className="hidden md:flex items-center">
        {isPending ? <SpinnerMini /> : "Sign out"}
      </button>
    </form>
  );
}

export default SignOutButton;
