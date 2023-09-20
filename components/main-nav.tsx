"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiExternalLink, FiHome, FiList, FiUser } from "react-icons/fi";
import NavLink from "@/components/common/nav-link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname(); // To check the pathname of the current url
  const router = useRouter(); // To change the route

  // Available routes in the website
  // ***Subject to CHANGE in the future***
  const routes = [
    {
      name: "About",
      href: "/about",
      active: pathname === "/about",
    },
    {
      name: "Contact",
      href: "/contact",
      active: pathname === "/contact",
    },
  ];

  return <nav></nav>;
}
