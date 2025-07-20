"use server";

import { auth, signIn, signOut } from "@/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInAction() {
  return signIn("google", { redirectTo: "/dashboard" });
}

export async function signOutAction() {
  return signOut({ redirectTo: "/" });
}

export async function createMember(newMember: object) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { data, error } = await supabase.from("members").insert([newMember]);

  if (error) {
    console.error("Supabase error:", error.message);
    throw new Error("New member could not be created");
  }

  return data;
}

export async function createGymBooking(id: number, formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const booking = {
    memberId: session.user.memberId,
    trainingClassId: id,
    fullName: formData.get("fullName"),
    nationality: formData.get("country"),
    phoneNumber: formData.get("phoneNumber"),
    instructor: formData.get("instructor"),
    comment: formData.get("optional-info"),
    status: "unconfirmed",
    isPaid: false,
  };

  const { error } = await supabase.from("bookings").insert([booking]).select();

  if (error) {
    console.error("Supabase error:", error.message);

    throw new Error("Gym class failed to book");
  }

  revalidatePath("/training-classes");
  redirect("/training-classes");
}

// shopping APIs
export async function addToCart(product: {
  productName: string;
  productPrice: number;
  productImage: string;
}) {
  const { error } = await supabase.from("cart").insert([product]).select();

  if (error) {
  } else {
    revalidatePath("/shopping/cart");
  }
}
