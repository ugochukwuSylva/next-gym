import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getMembers() {
  const { data, error } = await supabase.from("member").select("*");

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
    throw new Error("Could not fetch data");
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
    notFound();
  }

  return data;
}

export async function getArticles() {
  const { data, error } = await supabase.from("articles").select("*");
  if (error) {
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

export async function getCart() {
  const { data, error } = await supabase.from("cart").select("*");

  if (error) {
    throw new Error("Could not fetch data");
  }

  return data;
}

export async function getMember(email: string | null | undefined) {
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

export async function getPaymentDetails(email: string) {
  const { error, data } = await supabase
    .from("payments")
    .select("*")
    .eq("email", email)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Could not get payment details");
  }

  return data;
}

export async function handleCheckout(priceId: string, email: string) {
  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ priceId, email }),
  });
  const data = await res.json();
  console.log(data);

  if (data?.url) {
    window.location.href = data.url; // browser redirect
  } else {
    console.error("❌ No checkout session URL returned", data);
  }
}
