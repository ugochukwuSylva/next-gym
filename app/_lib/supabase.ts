import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  (process.env.NEXT_PULIC_SUPABASE_URL as string) ??
  "https://wsgmrmiumjmzwttdqicx.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
