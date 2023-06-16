"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Sidebar } from "@/components/Sidebar";
import { useAppContext } from '@/context/app-context';
import { useCallback } from "react";
import { Session } from "@supabase/auth-helpers-nextjs";

export function Header({ session }: { session: Session | null; }) {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  const handleSidebarIconClick = useCallback(() => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen);
  }, []);

  return (
    <header className="sticky top-0 left-0 h-10 w-full bg-red-100 z-50">
      <div className="flex items-center justify-between">
        <span className="z-50 m-2" onClick={handleSidebarIconClick}>
          {isSidebarOpen ? <Icon name="Cancel" /> : <Icon name="Menu" />}
        </span>

        <span className="m-2"><Link href="/">This is header.</Link></span>

        <span className="flex">
          <Link href={"/login"} className="m-2">
            {session ? <Icon name="Login" /> : <Icon name="User" />}
          </Link>
          <Icon name="Settings" className="m-2" />
        </span>
      </div>
      <Sidebar />
    </header>
  );
};