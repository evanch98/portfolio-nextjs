"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/container";
import Logo from "@/public/logo.svg";
import LogoBlack from "@/public/logo-black.svg";
import Image from "next/image";
import { FaDribbble, FaInstagram, FaXTwitter } from "react-icons/fa6";

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

  return (
    <div
      className={cn(
        "w-full",
        pathname === "/"
          ? "hero-background text-[--primary-100]"
          : "text - [--black]"
      )}
    >
      <Container className="py-[40px]">
        <nav className="hidden md:flex items-center justify-between">
          <div className="flex items-center justify-center gap-x-[64px]">
            <Link href="/">
              <Image
                src={pathname === "/" ? Logo : LogoBlack}
                width={54}
                height={41}
                alt="Logo"
              />
            </Link>
            <div className="flex items-center justify-center gap-x-[48px]">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn("heading-6", route.active ? "active-page" : "")}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-[24px]">
            <Link href="">
              <FaDribbble className="w-[32px] h-[32px]" />
            </Link>
            <Link href="">
              <FaInstagram className="w-[34px] h-[34px]" />
            </Link>
            <Link href="">
              <FaXTwitter className="w-[32px] h-[32px]" />
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
}
