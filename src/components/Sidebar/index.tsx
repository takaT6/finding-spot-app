"use client";

import { NavigationLink } from "@/components/Sidebar/NavigationLink";
import { Overlay } from "@/components/Sidebar/Overlay";
import { useAppContext } from '@/context/app-context';

function SidebarHeader() {
  return (
    <div className="flex border-b border-gray justify-center">
      <span className="p-2 text-right">menu</span>
    </div>
  );
};

export function Sidebar() {
  const { isSidebarOpen } = useAppContext();

  return (
    <>
      <div className={
        `${isSidebarOpen ? "left-0 translate-x-0 shadow-lg"
          : "-translate-x-full"}
        absolute z-40 w-2/5 inset-y-0 max-h-screen min-h-screen overflow-y-auto 
        bg-white transition duration-300 ease-in-out`
      }>
        <SidebarHeader />
        <NavigationLink />
      </div>
      <Overlay />
    </>
  );
};