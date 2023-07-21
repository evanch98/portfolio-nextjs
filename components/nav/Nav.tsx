"use client";

import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import NavLink from "./NavLink";
import useSidebar from "@/hooks/useSidebar";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
  const pathname = usePathname();
  const sidebar = useSidebar();
  return (
    <>
      <nav className="w-full bg-[#fcd968] px-5 lg:px-10 py-2 shadow-xl flex justify-between items-center fixed top-0 left-0">
        <Logo />
        <ul className="hidden lg:flex justify-between items-end space-x-10">
          <li>
            <NavLink href="/" name="Home" isActive={pathname === "/"} />
          </li>
          <li>
            <NavLink
              href="/projects"
              name="Projects"
              isActive={pathname.includes("/projects")}
            />
          </li>
          <li>
            <NavLink
              href="/about"
              name="About"
              isActive={pathname.includes("/about")}
            />
          </li>
          <li>
            <NavLink
              href="/blog"
              name="Blog"
              isActive={pathname.includes("/blog")}
            />
          </li>
        </ul>
        <button className="hidden lg:flex btn btn-primary">Contact Me</button>
        <FiMenu className="lg:hidden w-9 h-auto" onClick={sidebar.onOpen} />
      </nav>
      <AnimatePresence>{sidebar.isOpen && <Sidebar />}</AnimatePresence>
    </>
  );
};

export default Nav;
