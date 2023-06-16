import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl!, supabaseAnonKey!);

export const getAllSpotsData = async () => {
  console.log("func getAllSpotsData");
  let { data: spots, error } = await supabase.from('spots').select('*');
  console.log(spots);
  return spots;
};