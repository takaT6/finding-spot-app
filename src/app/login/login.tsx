'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

// Supabase auth needs to be triggered client-side
export function SupabaseLogin() {
  const supabase = createClientComponentClient();

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
    }
  };

  // this `session` is from the root loader - server-side
  // therefore, it can safely be used to conditionally render
  // SSR pages without issues with hydration
  return (
    <>
      <button onClick={handleEmailLogin}>Email Login</button>
    </>
  );
}