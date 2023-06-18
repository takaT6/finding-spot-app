'use client';

import { createBrowserClient } from '@/utils/supabase-browser';
import { useRouter } from 'next/navigation';

// Supabase auth needs to be triggered client-side
export function SupabaseLogin() {
  const supabase = createBrowserClient();

  const router = useRouter();

  const handleEmailLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: 'test@test.com',
      password: 'test',
    });

    if (error) {
      console.log({ error });
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <>
      <button onClick={handleEmailLogin}>Email Login</button>
    </>
  );
}