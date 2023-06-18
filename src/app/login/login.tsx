'use client';

import { createBrowserClient } from '@/utils/supabase-browser';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Loading from '@/app/loading';

export function SupabaseLogin() {
  const supabase = createBrowserClient();

  const router = useRouter();

  const [showLoader, setShowLoader] = useState(false);

  const handleEmailLogin = async () => {
    setShowLoader(true);
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
      {showLoader ? <Loading /> : <button onClick={handleEmailLogin}>Email Login</button>}
    </>
  );
}