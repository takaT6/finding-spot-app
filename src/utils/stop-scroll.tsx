"use client";

import { useAppContext } from "@/context/app-context";
import { useCallback, useEffect } from "react";

export function ScrollLock() {
  const stopScroll = useCallback((on: boolean) => {
    if (on) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, []);

  const { isSidebarOpen, isMapPage } = useAppContext();
  console.log("isSidebarOpen ? ", isSidebarOpen, "isMapPage ? ", isMapPage);
  useEffect(() => {
    if (isMapPage) stopScroll(true);
    else stopScroll(isSidebarOpen);
  }, [isSidebarOpen, isMapPage]);
  return <></>;
};