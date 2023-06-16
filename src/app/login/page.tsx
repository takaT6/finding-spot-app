import { SupabaseLogin } from '@/app/login/login';
import { SupabaseLogout } from '@/app/login/logout';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/database.types';

export default async function LoginPage() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: { session } } = await supabase.auth.getSession();

  return (
    session ? <SupabaseLogout /> : <SupabaseLogin />
  );
};