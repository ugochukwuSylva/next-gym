import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  (process.env.NEXT_PULIC_SUPABASE_URL as string) ??
  "https://wsgmrmiumjmzwttdqicx.supabase.co";

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

// For writing into supabase directly from backend. We need supabaseSecretKey to do so
export const supabase_mutate = () => {
  if (!supabaseSecretKey) {
    throw new Error("Supabase service key is required");
  }
  return createClient(supabaseUrl, supabaseSecretKey);
};
