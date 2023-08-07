"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiExternalLink, FiHome, FiList, FiUser } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      icon: <FiHome className="h-6 w-6" />,
      active: pathname === "/",
    },
    {
      href: "/about",
      icon: <FiUser className="h-6 w-6" />,
      active: pathname === "/about",
    },
    {
      href: "/resume",
      icon: <FiList className="h-6 w-6" />,
      active: pathname === "/resume",
    },
    {
      href: "/links",
      icon: <FiExternalLink className="h-6 w-6" />,
      active: pathname === "/links",
    },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 p-5 h-8 flex items-center space-x-4 lg:space-x-6 bg-[#282B30] rounded-b-lg">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={twMerge(
            "transition-colors hover:opacity-100",
            route.active ? "opacity-100" : "opacity-70"
          )}
        >
          {route.icon}
        </Link>
      ))}
    </nav>
  );
}
