"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiExternalLink, FiHome, FiList, FiUser } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import NavLink from "./nav-link";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      icon: <NavLink label="Home" icon={FiHome} />,
      active: pathname === "/",
    },
    {
      href: "/about",
      icon: <NavLink label="About" icon={FiUser} />,
      active: pathname === "/about",
    },
    {
      href: "/resume",
      icon: <NavLink label="Resume" icon={FiList} />,
      active: pathname === "/resume",
    },
    {
      href: "/links",
      icon: <NavLink label="Links" icon={FiExternalLink} />,
      active: pathname === "/links",
    },
  ];

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 px-5 py-2 flex items-center space-x-4 lg:space-x-6 bg-[#282B30] rounded-b-2xl">
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
