"use client";

import { AnimatePresence, motion } from "framer-motion";
import { timeProvider } from "@/utils/dateProvider";
import Nav from "./Nav";
import useTerminalHelp from "@/hooks/useTerminalHelp";
import TerminalHelp from "./TerminalHelp";
import { ChangeEvent, FormEvent, useState } from "react";

const variants = {
  hidden: { scale: 0, transition: { duration: 1 } },
  visible: { scale: 1, transition: { duration: 1 } },
};

const Body = () => {
  const terminalHelp = useTerminalHelp();
  const [text, setText] = useState("");
  let [outputContent, setOutputContent] = useState(<div></div>);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.length !== 0) {
      console.log(text);
      switch (text.toLowerCase()) {
        case "ls":
          setOutputContent(
            <div className="grid grid-cols-4 text-sm text-white terminal">
              <p>home</p>
              <p>projects</p>
              <p>about</p>
              <p>blog</p>
              <p>contact</p>
            </div>
          );
          break;
        case "clear":
          setOutputContent(<div></div>);
          break;
        default:
          setOutputContent(
            <p className="text-sm text-red-600 terminal">Invalid command</p>
          );
      }
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <motion.div
      className="w-full lg:w-[550px] h-[320px] bg-black rounded-lg overflow-hidden terminal-shadow relative"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Nav />
      <div className="w-full p-2 terminal text-sm text-white">
        <p>Last login: {timeProvider()}</p>
        <div className="flex w-full items-start justify-start">
          <p className="w-2/5 md:w-[120px]">kyawthu ~ %</p>
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="text"
              id="text"
              autoFocus
              className="border-none bg-transparent w-full focus:outline-none"
              placeholder="ls"
              onChange={handleOnChange}
            />
          </form>
        </div>
      </div>
      <div className="px-2">{outputContent}</div>
      <AnimatePresence>
        {terminalHelp.isOpen && <TerminalHelp />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Body;
