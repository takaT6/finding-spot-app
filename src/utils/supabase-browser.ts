import { Database } from "@/types/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const createBrowserClient = () =>
  createClientComponentClient<Database>();