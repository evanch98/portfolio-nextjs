import Image from "next/image";
import { Container } from "./container";
import Logo from "@/public/logo-black.svg";
import Link from "next/link";
import {
  FaDribbble,
  FaInstagram,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="md:mt-[128px] mt-[32px] w-full border-t border-t-[#c7c8c9]">
      <Container className="py-[40px] flex flex-col md:gap-y-[48px] gap-y-[24px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-y-[24px] w-full md:w-[490px]">
            <Image
              src={Logo}
              width={54}
              height={41}
              alt="Logo"
              className="fill-[--black]"
            />
            <p className="paragraph opacity-75">
              Kyaw Thu is a UI/UX designer and front-end developer from Taiwan
              that helps empower startups with impactful and user-centered
              digital experiences.
            </p>
            <div className="flex items-center gap-x-[24px]">
              <Link href="" className="hover:animate-bounce">
                <FaDribbble className="w-[32px] h-[32px]" />
              </Link>
              <Link href="" className="hover:animate-bounce">
                <FaInstagram className="w-[34px] h-[34px]" />
              </Link>
              <Link href="" className="hover:animate-bounce">
                <FaXTwitter className="w-[32px] h-[32px]" />
              </Link>
              <Link
                href="mailto:evanch98@gmail.com"
                className="hover:animate-bounce"
              >
                <FaRegEnvelope className="w-[32px] h-[32px]" />
              </Link>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-x-[128px] gap-y-[32px] heading-6-regular">
            <Link
              href="/#my-work"
              className="hover:opacity-75 ease-in duration-300"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="hover:opacity-75 ease-in duration-300"
            >
              About
            </Link>
            <Link href="" className="hover:opacity-75 ease-in duration-300">
              Resume
            </Link>
            <Link
              href="/contact"
              className="hover:opacity-75 ease-in duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
        <p className="paragraph opacity-75">
          Proudly built by using{" "}
          <span className="paragraph-bold opacity-100">Next.js</span>.
        </p>
      </Container>
    </footer>
  );
};
