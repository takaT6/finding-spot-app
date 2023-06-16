import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from "@/types/database.types";

export const createServerClient = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies
  });