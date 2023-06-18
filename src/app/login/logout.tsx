'use client';

import { createBrowserClient } from '@/utils/supabase-browser';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Loading from '@/app/loading';

export function SupabaseLogout() {
  const supabase = createBrowserClient();

  const router = useRouter();

  const [showLoader, setShowLoader] = useState(false);

  const handleSignOut = async () => {
    setShowLoader(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log({ error });
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <>
      {showLoader ? <Loading /> : <button onClick={handleSignOut}>Logout</button>}
    </>
  );
};