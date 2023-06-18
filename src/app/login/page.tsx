"server-only";

import { SupabaseLogin } from '@/app/login/login';
import { SupabaseLogout } from '@/app/login/logout';
import { createServerClient } from '@/utils/supabase-server';

export default async function LoginPage() {
  const supabase = createServerClient();

  const { data: { session } } = await supabase.auth.getSession();

  return (
    session ? <SupabaseLogout /> : <SupabaseLogin />
  );
};