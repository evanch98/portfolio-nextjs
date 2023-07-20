import useSidebar from "@/hooks/useSidebar";
import Logo from "./Logo";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const sidebarVariants = {
  hidden: { x: "150vw" },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Sidebar = () => {
  const sidebar = useSidebar();
  return (
    <motion.aside
      className="absolute top-0 right-0 w-full h-screen lg:hidden bg-[#fcd968] z-50"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col p-5">
        <section className="flex items-center justify-between">
          <Logo />
          <AiOutlineClose className="w-9 h-auto" onClick={sidebar.onClose} />
        </section>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
