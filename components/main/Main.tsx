"use client";

import { motion } from "framer-motion";
import Terminal from "../terminal/Terminal";

const text: string =
  "HEY! I'm Kyaw Thu, An Aspiring Front-end developer based in Taiwan";

const Main = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      aria-label="Home Screen"
    >
      <div
        className="w-full px-2 lg:px-0 lg:max-w-[1240px] flex flex-col lg:flex-row items-center justify-center lg:justify-between"
        aria-label="Main Section"
      >
        <section
          className="w-full lg:max-w-[450px] h-full"
          aria-label="Introduction section"
        >
          <h1
            className="hidden lg:text-left lg:text-4xl font-bold lg:leading-[60px] lg:flex lg:flex-auto uppercase cursor-default"
            aria-label="Introduction Title"
          >
            {text.split(" ").map((text, index) => (
              <motion.span
                key={index}
                className="mr-2"
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
          <h1
            className="lg:hidden text-2xl text-center uppercase font-bold"
            aria-label="Introduction Title"
          >
            HEY! I'm Kyaw Thu, An Aspiring Front-end developer based in Taiwan
          </h1>
          <p
            className="opacity-70 text-center lg:text-left mt-5"
            aria-label="Introduction Paragraph"
          >
            I am currently pursuing a Bachelor of Science in Computer Science at
            the University of the People.
          </p>
        </section>
        <section className="w-full flex items-center justify-center">
          <Terminal />
        </section>
      </div>
    </div>
  );
};

export default Main;
