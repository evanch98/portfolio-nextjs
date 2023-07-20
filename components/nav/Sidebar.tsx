import useSidebar from "@/hooks/useSidebar";
import Logo from "./Logo";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { FiGithub, FiLinkedin, FiMail, FiUser } from "react-icons/fi";

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
            <a
              href="https://github.com/evanch98"
              target="_blank"
              rel="noreferrer"
              className="w-16 h-auto"
            >
              <motion.svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                preserveAspectRatio="none"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                viewBox="0 0 32 32"
              >
                <g>
                  <title>Layer 1</title>
                  <motion.path
                    id="svg_1"
                    d="m9,19c-5,1.5 -5,-2.5 -7,-3m14,6l0,-3.87a3.37,3.37 0 0 0 -0.94,-2.61c3.14,-0.35 6.44,-1.54 6.44,-7a5.44,5.44 0 0 0 -1.5,-3.75a5.07,5.07 0 0 0 -0.09,-3.77s-1.18,-0.35 -3.91,1.48a13.38,13.38 0 0 0 -7,0c-2.73,-1.83 -3.91,-1.48 -3.91,-1.48a5.07,5.07 0 0 0 -0.09,3.77a5.44,5.44 0 0 0 -1.5,3.78c0,5.42 3.3,6.61 6.44,7a3.37,3.37 0 0 0 -0.94,2.58l0,3.87"
                    opacity="undefined"
                    variants={pathVariants}
                  />
                </g>
              </motion.svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kyaw-thu-0b3956212/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="w-8 h-auto" />
            </a>
            <a href="mailto:evanch98@gmail.com">
              <FiMail className="w-8 h-auto" />
            </a>
            <a
              href="https://drive.google.com/file/d/10mhxA0iDtQLDJPP7a3Ndiyl9RjExcT9o/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <FiUser className="w-8 h-auto" />
            </a>
          </div>
        </section>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
