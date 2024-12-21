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
