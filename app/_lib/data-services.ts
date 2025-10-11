import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { auth } from "@/auth";

export async function getMembers() {
  const { data, error } = await supabase.from("members").select("*");

  if (error) {
    throw new Error("Could not fetch data");
  }

  return data;
}

export async function getTrainers() {
  const { data, error } = await supabase.from("trainers").select("*");

  if (error) {
    throw new Error("Could not fetch data");
  }

  return data;
}

export async function getBookings(memberId: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "*, trainingClasses(price, image, workoutType, stripePriceId), members(email, fullName)"
    )
    .eq("memberId", memberId)
    .order("created_at", { ascending: false });

  if (error) {
    // throw new Error(error.message);
    throw new Error("Could not fetch bookings");
  }

  return data;
}

export async function getTrainerById(id: string) {
  const { data, error } = await supabase
    .from("trainingClasses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export async function getArticleById(id: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export async function getTrainingClasses() {
  const { data, error } = await supabase.from("trainingClasses").select("*");

  if (error) {
    throw new Error("Could not fetch data");
  }
  return data;
}

export async function getTrainingClassById(id: string) {
  const { data, error } = await supabase
    .from("trainingClasses")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
    throw new Error("Could not fetch data");
  }

  return data;
}

export async function getArticles() {
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
    console.error(error.message);
    throw new Error("Could not fetch Articles");
  }

  return data;
}

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error("Could not fetch products");
  }

  return data;
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export async function getCart(email: string) {
  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .eq("email", email)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Could not fetch cart items");
  }

  return data;
}

export async function getMember(email: string | null | undefined) {
  if (!email) return;

  const { data, error } = await supabase
    .from("members")
    .select("*")
    .eq("email", email)
    .single();

  if (error && error.code !== "PGRST116") {
    throw new Error("Could not find member");
  }

  return data;
}

export async function getPaymentDetailsByEmail(email: string) {
  const { data, error } = await supabase
    .from("payments")
    .select("stripe_session_id")
    .eq("email", email);

  if (error) throw new Error("Could not fetch payment details");

  return data;
}

export async function getPaymentDetails(sessionId: string, email: string) {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const allPayments = await getPaymentDetailsByEmail(userEmail);

  const isSessionIdInPayment = allPayments
    .map((payment) => payment.stripe_session_id)
    .includes(sessionId);

  if (!isSessionIdInPayment)
    throw new Error("Valid payment session id is required");

  const { data, error } = await supabase
    .from("payments")
    .select("amount_total, card_brand, last4_digits, email")
    .eq("email", email)
    .eq("stripe_session_id", sessionId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getBookingsByMemberId(memberId: number) {
  const { data: bookings, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("memberId", memberId);

  if (error) {
    throw new Error("Could not get bookings");
  }
  return bookings;
}

export async function getBookingByBookingId(id: number) {
  const { data: bookings, error } = await supabase
    .from("bookings")
    .select(
      "id, nationality, instructor, phoneNumber, countryFlag, phoneCountryFlag"
    )
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Could not get bookings");
  }
  return bookings;
}

//
export async function getCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,flag,idd"
    );
    if (!response.ok) throw new Error("Failed to get country 😔");
    const data = await response.json();

    return data;
  } catch {
    throw new Error();
  }
}

export async function handleBooikngCheckout(
  priceId: string,
  email: string,
  bookingId: number
) {
  const res = await fetch("/api/create-booking-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ priceId, email, bookingId }),
  });
  const data = await res.json();

  if (data?.url) {
    window.location.href = data.url; // browser redirect
  } else {
    console.error("❌ No checkout session URL returned", data);
  }
}

export async function handleCartCheckout(cartArray: object[]) {
  const res = await fetch("/api/create-cart-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cartArray),
  });

  const data = await res.json();
  if (data?.url) {
    window.location.href = data.url;
  } else {
    console.error("❌ No checkout session URL returned", data);
  }
}
