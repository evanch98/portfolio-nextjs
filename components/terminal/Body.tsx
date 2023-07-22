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
            <div className="grid grid-cols-4">
              <p>home</p>
              <p>projects</p>
              <p>about</p>
              <p>blog</p>
              <p>contact</p>
            </div>
          );
          break;
        case "info":
          setOutputContent(
            <div className="flex flex-col">
              <p>{"{"}</p>
              <p className="ml-5">{'name: "Kyaw Thu",'}</p>
              <p className="ml-5">{'email: "evanch98@gmail.com",'}</p>
              <p className="ml-5">{'phone: "+886 958437425",'}</p>
              <p>{"}"}</p>
            </div>
          );
          break;
        case "clear":
          setOutputContent(<div></div>);
          break;
        default:
          setOutputContent(
            <p className="text-red-600">{`${text}: command not found`}</p>
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
      <div className="px-2 text-sm text-white terminal">{outputContent}</div>
      <AnimatePresence>
        {terminalHelp.isOpen && <TerminalHelp />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Body;
