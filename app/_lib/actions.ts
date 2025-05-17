"use server";

import { signIn, signOut } from "@/auth";
import { supabase } from "./supabase";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  return signIn("google", { redirectTo: "/dashboard" });
}

export async function signOutAction() {
  return signOut({ redirectTo: "/" });
}

export async function createMember(newMember: object) {
  const { data, error } = await supabase.from("members").insert([newMember]);

  if (error) {
    console.error("Supabase error:", error.message);
    throw new Error("New member could not be created");
  }

  return data;
}

// shopping APIs
export async function addToCart(product: {
  productName: string;
  productPrice: number;
  productImage: string;
}) {
  const { error } = await supabase.from("cart").insert([product]).select();

  if (error) {
    () => toast.error("Could not add product 😞");
  } else {
    () => toast.success("Added product successfully 😊");
    revalidatePath("/shopping/cart");
  }
}
