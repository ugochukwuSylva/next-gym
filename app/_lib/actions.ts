"use server";

import { signIn, signOut } from "@/auth";

export async function signInAction() {
  return signIn("google", { redirectTo: "/training-classes" });
}

export async function signOutAction() {
  return signOut({ redirectTo: "/" });
}
