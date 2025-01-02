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

export async function getTrainerById(id: string) {
  const { data, error } = await supabase
    .from("training-classes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export async function getTrainingClasses() {
  const { data, error } = await supabase.from("training-classes").select("*");

  if (error) {
    throw new Error("Could not fetch data");
  }
  return data;
}

export async function getTrainingClassById(id: string) {
  const { data, error } = await supabase
    .from("training-classes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export async function getCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,idd"
    );
    if (!response.ok) throw new Error("Failed to get country 😔");
    const data = await response.json();

    return data;
  } catch {
    throw new Error();
  }
}

// https://restcountries.com/v3.1/all?fields=name,flags,idd
