"use client";

import { useAppContext } from '@/context/app-context';

export function Overlay() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  return (
    <div
      className={`fixed inset-0 z-10 bg-black bg-opacity-10 transition duration-200 ease-in-out 
      ${isSidebarOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
        }`}
      onClick={() => setIsSidebarOpen(false)} />
  );
};