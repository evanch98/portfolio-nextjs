import useSidebar from "@/hooks/useSidebar";
import Logo from "./Logo";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const sidebarVariants = {
  hidden: { x: "150vw", transition: { duration: 0.5 } },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
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
      <div className="flex flex-col p-5" aria-label="Sidebar Contents">
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
      </div>
    </motion.aside>
  );
};

export default Sidebar;
