"use client";

import { motion } from "framer-motion";
import { timeProvider } from "@/utils/dateProvider";
import Nav from "./Nav";

const variants = {
  hidden: { scale: 0, transition: { duration: 1 } },
  visible: { scale: 1, transition: { duration: 1 } },
};

const Body = () => {
  return (
    <motion.div
      className="w-full lg:w-[550px] h-[320px] bg-black rounded-lg overflow-hidden terminal-shadow"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Nav />
      <div className="w-full p-2 terminal text-sm text-white">
        <p>Last login: {timeProvider()}</p>
        <p>kyawthu ~ %</p>
      </div>
    </motion.div>
  );
};

export default Body;
