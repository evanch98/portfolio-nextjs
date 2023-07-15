"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Nav = () => {
  const [active, setActive] = useState("home");
  const pathname: string = window.location.pathname;
  return (
    <nav className="w-full px-5 lg:px-10 shadow-xl flex justify-between items-center">
      <Logo />
      <ul className="hidden lg:flex justify-between items-end space-x-10">
        <li onClick={() => setActive("home")}>
          <NavLink href="/" name="Home" isActive={pathname === "/"} />
        </li>
        <li onClick={() => setActive("projects")}>
          <NavLink
            href="/projects"
            name="Projects"
            isActive={pathname.includes("/projects")}
          />
        </li>
        <li onClick={() => setActive("about")}>
          <NavLink
            href="/about"
            name="About"
            isActive={pathname === "/about"}
          />
        </li>
        <li onClick={() => setActive("blog")}>
          <NavLink
            href="/blog"
            name="Blog"
            isActive={pathname.includes("/blog")}
          />
        </li>
      </ul>
      <button className="hidden lg:flex btn btn-primary">Contact Me</button>
    </nav>
  );
};

export default Nav;
