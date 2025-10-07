"use server";

import { auth, signIn, signOut } from "@/auth";
import { supabase, supabase_mutate } from "./supabase";
import { getBookingsByMemberId, getCart } from "./data-services";
import { revalidatePath } from "next/cache";

export async function signInAction() {
  return signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  return signOut({ redirectTo: "/" });
}

export async function createMember(newMember: object) {
  const { data, error } = await supabase.from("members").insert([newMember]);

  if (error) {
    console.error("Supabase error:", error.message);
    throw new Error("Could not create new member");
  }

  return data;
}

export async function createGymBooking(id: number, formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in");

  const supabase = supabase_mutate();

  const booking = {
    memberId: session.user.memberId,
    trainingClassId: id,
    fullName: formData.get("fullName"),
    nationality: formData.get("country"),
    phoneNumber: formData.get("phoneNumber"),
    countryFlag: formData.get("countryFlag"),
    phoneCountryFlag: formData.get("phoneCountryFlag"),
    instructor: formData.get("instructor"),
    comment: formData.get("optional-info"),
    status: "unconfirmed",
    isPaid: false,
  };

  const { error } = await supabase.from("bookings").insert([booking]).select();

  if (error) {
    console.error("Supabase error:", error.message);

    // I want to display the state of booking with react-hot-toast which is not supported in server actions, hence the reason I am manually returning a message that I will use from the client-side
    return { success: false, message: "Gym class failed to book 😔" };
    throw new Error("Gym class failed to book");
  }

  return { success: true, message: `Gym class #${id} booked successfully 😊` };
}

export async function deleteBooking(bookingId: number) {
  const session = await auth();
  const bookings = await getBookingsByMemberId(
    session?.user?.memberId as number
  );
  const bookingIds = bookings.map((booking) => booking.id);

  if (!session) throw new Error("You must be signed in");

  if (!bookingIds.includes(bookingId)) {
    throw new Error("You do not have permission to delete this booking");
  }

  // The service role key is needed to insert, update or delete data on supabase. A different supabase client was created for this purpose
  const supabase = supabase_mutate();

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    // I want to display the state of booking with react-hot-toast which is not supported in server actions, hence the reason I am manually returning a message that I will use from the client-side
    return {
      success: false,
      message: `Booking #${bookingId} failed to delete 😔`,
    };
    throw new Error("Could not delete booking");
  }
  revalidatePath("/dashboard/bookings");
  return {
    success: true,
    message: `Booking #${bookingId} deleted successfully 😊`,
  };
}

export async function updateBooking(id: number, formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in");
  const supabase = supabase_mutate();

  const updateBooking = {
    nationality: formData.get("country"),
    phoneNumber: formData.get("phoneNumber"),
    countryFlag: formData.get("countryFlag"),
    phoneCountryFlag: formData.get("phoneCountryFlag"),
    instructor: formData.get("instructor"),
    comment: formData.get("optional-info"),
  };

  const { error } = await supabase
    .from("bookings")
    .update([updateBooking])
    .eq("id", id);

  if (error) {
    return {
      success: false,
      message: `Booking ${id} failed to update 😔`,
    };
    throw new Error("Could not update boooking");
  }
  revalidatePath("/dashboard/bookings");

  return {
    success: true,
    message: `Booking ${id} updated successfully 😊`,
  };
}

export async function addToCart(
  product: {
    productName: string;
    productImage: string;
    productQuantity: number;
  },
  formData: FormData | object
) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in");
  const userEmail = session.user.email;

  const supabase = supabase_mutate();
  let inputError;

  const itemQuantity =
    formData instanceof FormData && formData.get("productQuantity");

  if (Number(itemQuantity) > 100) inputError = "Maximum of 100 per order";

  if (Number(itemQuantity) <= 100) {
    const { error } = await supabase
      .from("cart")
      .insert([{ ...product, email: userEmail }])
      .select();

    if (error) {
      console.error(error.message);
      return { success: false, message: "Could not add product to cart" };
      throw new Error("Could not add product to cart");
    }
    revalidatePath("/shopping");

    return { success: true, message: "" };
  }
  return { success: false, message: inputError };
}

export async function removeCartItem(cartItemId: number) {
  const session = await auth();
  const cartItems = await getCart(session?.user?.email as string);
  const cartIds = cartItems.map((cartId) => cartId.id);

  if (!session) throw new Error("You must be signed in");

  if (!cartIds.includes(cartItemId))
    throw new Error("You do not have permission to remove this item from cart");

  const supabase = supabase_mutate();

  const { error } = await supabase.from("cart").delete().eq("id", cartItemId);

  if (error) {
    console.log(error.message);
    throw new Error("Could not remove cart item");
  }

  revalidatePath("/dashboard/cart");
}

export async function editCartItem(
  cartId: number,
  itemQuantity: number,
  productPrice: number
) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in");
  const supabase = supabase_mutate();

  const { error } = await supabase
    .from("cart")
    .update([
      {
        productQuantity: itemQuantity,
        totalPrice: itemQuantity * productPrice,
      },
    ])
    .eq("id", cartId);

  if (error) {
    console.log(error.message);
    throw new Error("Could not edit cart item");
  }
  revalidatePath("/dashboard/cart");
}
