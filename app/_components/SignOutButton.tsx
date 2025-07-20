"use client";

import { signOutAction } from "../_lib/actions";
import { BiLogOut } from "react-icons/bi";

function SignOutButton() {
  function handleSignOut() {
    if (confirm("Are you sure you want to sign out ?")) signOutAction();
  }

  return (
    <form action={handleSignOut} className="dashboardItems">
      <button className="text-xl text-stone-600 ">
        <BiLogOut />
      </button>
      <button className="flex items-center ">Sign out</button>
    </form>
  );
}

export default SignOutButton;
