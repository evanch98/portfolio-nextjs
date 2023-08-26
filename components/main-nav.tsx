"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiExternalLink, FiHome, FiList, FiUser } from "react-icons/fi";
import NavLink from "@/components/common/nav-link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* Variants for the "Framer Motion" animation */
const mainVariants = {
  // Initial position
  // x is -50% in both hidden and visible to maintain the translated position made with Tailwind CSS
  hidden: { y: "-100vh", x: "-50%" },
  // Final position
  visible: { y: 0, x: "-50%", transition: { duration: 1, type: "spring" } },
};

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
    <motion.nav
      className="fixed top-0 left-1/2 -translate-x-1/2 px-5 py-2 flex items-center space-x-4 lg:space-x-6 bg-[#EEEFF1] dark:bg-[#282B30] rounded-b-2xl shadow-lg z-50"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      {routes.map((route) => (
        // Whenever the user clicks on the link, refresh so that it behaves as intended on 404 page.
        <Link
          onClick={() => {
            router.refresh();
          }}
          key={route.href}
          href={route.href}
          className={cn(
            "transition-colors hover:opacity-100",
            route.active ? "opacity-100" : "opacity-50"
          )}
        >
          {route.icon}
        </Link>
      ))}
    </motion.nav>
  );
}
