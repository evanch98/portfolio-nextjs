"use client";

import { motion } from "framer-motion";
import Terminal from "../terminal/Terminal";

const text: string =
  "HEY!+ I'm+ Kyaw+ Thu,+ An+ Aspiring+ Front-end+ developer+ based+ in+ Taiwan+";

const Main = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      aria-label="Home Screen"
    >
      <div
        className="w-full px-2 lg:px-0 lg:max-w-[1240px] flex flex-col lg:flex-row items-center justify-center gap-5"
        aria-label="Main Section"
      >
        <section
          className="w-full"
          aria-label="Introduction section"
        >
          <h1
            className="text-2xl text-center lg:text-4xl font-bold lg:leading-[60px] uppercase cursor-default"
            aria-label="Introduction Title"
          >
            {text.split("+").map((text, index) => (
              <motion.span
                key={index}
                whileHover={{
                  color: "#8C6196",
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                  },
                }}
              >
                {text}
              </motion.span>
            ))}
          </h1>
          <p
            className="opacity-70 text-center mt-5"
            aria-label="Introduction Paragraph"
          >
            I am currently pursuing a Bachelor of Science in Computer Science at
            the University of the People.
          </p>
        </section>
        <section className="w-full h-full flex flex-col items-center justify-center">
          <Terminal />
          <p className="text-lg text-center lg:text-xl tracking-widest">Let's Build Something Legendary Together</p>
        </section>
      </div>
    </div>
  );
};

export default Main;
