"use client";

import { signOutAction } from "../_lib/actions";
import { BiLogOut } from "react-icons/bi";
import { useTransition } from "react";
import Spinner from "./Spinner";

function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  function handleSignOut() {
    if (confirm("Are you sure you want to sign out ?")) {
      startTransition(() => signOutAction());
    }
  }

  if (isPending) return <Spinner status="Signing out" />;

  return (
    <form action={handleSignOut} className="dashboardItems">
      <button className="text-xl text-stone-600 ">
        <BiLogOut />
      </button>
      <button className="hidden md:flex items-center">Sign out</button>
    </form>
  );
}

export default SignOutButton;
