'use client';

import { createContext, useContext, Dispatch, useState } from 'react';

const AppContext = createContext(
  {} as {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
    isMapPage: boolean;
    setIsMapPage: Dispatch<React.SetStateAction<boolean>>;
  }
);

export default function AppContextProvider({ children }: { children: React.ReactNode; }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMapPage, setIsMapPage] = useState(false);

  return (
    <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, isMapPage, setIsMapPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
