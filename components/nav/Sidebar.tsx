import useSidebar from "@/hooks/useSidebar";
import Logo from "./Logo";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { FiGithub, FiLinkedin, FiMail, FiUser } from "react-icons/fi";
import GitHubIcon from "../common/icons/GitHubIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";
import MailIcon from "../common/icons/MailIcon";
import ResumeIcon from "../common/icons/ResumeIcon";

const sidebarVariants = {
  hidden: { x: "150vw", transition: { duration: 0.5 } },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Sidebar = () => {
  const sidebar = useSidebar();
  const pathname = usePathname();
  return (
    <motion.aside
      className="absolute top-0 right-0 w-full h-screen lg:hidden bg-[#fcd968] z-50"
      aria-label="Sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div
        className="flex flex-col p-5 h-screen justify-between"
        aria-label="Sidebar Contents"
      >
        <section
          className="flex items-center justify-between"
          aria-label="Logo and Close Button Section"
        >
          <Logo />
          <AiOutlineClose
            className="w-9 h-auto"
            onClick={sidebar.onClose}
            aria-label="Close the Sidebar"
          />
        </section>
        <section
          className="flex flex-col mt-5 gap-5"
          aria-label="Navigation Link Section"
        >
          <NavLink
            href="/"
            name="Home"
            isActive={pathname === "/"}
            onClick={sidebar.onClose}
            className="text-2xl"
          />
          <NavLink
            href="/projects"
            name="Project"
            isActive={pathname.includes("/projects")}
            onClick={sidebar.onClose}
            className="text-2xl"
          />
          <NavLink
            href="/about"
            name="About"
            isActive={pathname.includes("/about")}
            onClick={sidebar.onClose}
            className="text-2xl"
          />
          <NavLink
            href="/blog"
            name="Blog"
            isActive={pathname.includes("/blog")}
            onClick={sidebar.onClose}
            className="text-2xl"
          />
          <NavLink
            href="/contact"
            name="Contact Me"
            isActive={pathname.includes("/contact")}
            onClick={sidebar.onClose}
            className="text-2xl"
          />
        </section>
        <section
          className="flex flex-col items-center mt-5 w-full"
          aria-label="Connect with Me Section"
        >
          <h1
            className="text-2xl tracking-widest text-center font-semibold"
            aria-label="Title"
          >
            Connect with Me
          </h1>
          <div className="flex items-center justify-between gap-x-2 mt-2 w-2/3">
            <GitHubIcon />
            <LinkedinIcon />
            <MailIcon />
            <ResumeIcon />
          </div>
        </section>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
