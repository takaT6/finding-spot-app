"use client";

import { Icon } from "@/components/Icon";
import { useAppContext } from '@/context/app-context';
import { NavigationItem } from "@/types/navItem.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";

export function NavigationLink() {
  const { setIsSidebarOpen } = useAppContext();

  const pathname = usePathname();

  const navigations = useMemo<NavigationItem[]>(() => [
    {
      label: <span>トップ</span>,
      href: "/",
      icon: <Icon name="Home" />,
      isActive: pathname === "/",
    },
    {
      label: <span>検索</span>,
      href: "/search",
      icon: <Icon name="Search" />,
      isActive: pathname === "/search",
    },
    {
      label: <span>ページ3</span>,
      href: "/page3",
      icon: <Icon name="Home" />,
      isActive: pathname === "/page3",
    },
    {
      label: <span>ページ4</span>,
      href: "/page4",
      icon: <Icon name="Home" />,
      isActive: false,
    },
  ], [pathname]);

  const handleLinkClick = useCallback(() => {
    // setIsSidebarOpen(isSidebarOpen => !isSidebarOpen);
    setIsSidebarOpen(false);
  }, []); // eslint-disable-line

  return (
    <nav>
      <ul className="list-none">
        {navigations.map((navigation, i) => (
          <li key={i} onClick={handleLinkClick} className="m-2">
            <Link
              href={navigation.href}
              className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium
              ${navigation.isActive
                  ? 'bg-black text-white hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                  : 'text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200'
                }`}
            >
              {navigation.icon}{navigation.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};