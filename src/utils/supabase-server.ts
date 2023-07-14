import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from "@/types/database.types";

export const createSupabaseServerClient = () => createServerComponentClient<Database>({ cookies });

export async function getSession() {
  const supabase = createSupabaseServerClient();
  try {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}