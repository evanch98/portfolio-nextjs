"use client";

import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import GitHubIcon from "../common/icons/GitHubIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";
import MailIcon from "../common/icons/MailIcon";
import ResumeIcon from "../common/icons/ResumeIcon";
import { Link } from "react-scroll";

const text: string =
  "HEY!+ I'm+ Kyaw+ Thu,+ An+ Aspiring+ Front-end+ developer+ based+ in+ Taiwan+";

const mainVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

const Main = () => {
  return (
    <motion.div
      className="relative w-full h-screen flex flex-col items-center justify-center pt-20"
      aria-label="Home Screen"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="w-full px-2 lg:px-0 lg:max-w-[1240px] flex flex-col items-center justify-center gap-5"
        aria-label="Main Section"
      >
        <section className="w-full" aria-label="Introduction section">
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
            I'm an aspiring front-end web developer with a willingness to
            explore and learn. Currently, I'm focused on building responsive
            front-end web applications. I am currently pursuing a Bachelor of
            Science in Computer Science at the University of the People.
          </p>
        </section>
        <section className="w-full h-full flex flex-col items-center justify-center">
          <p className="text-lg text-center lg:text-xl tracking-widest mt-5">
            Let's Build Something Legendary Together
          </p>
          <div className="flex w-2/3 lg:w-1/3 items-center justify-between mt-5">
            <GitHubIcon className="hover:scale-110 duration-200 ease-in" />
            <LinkedinIcon className="hover:scale-110 duration-200 ease-in" />
            <MailIcon className="hover:scale-110 duration-200 ease-in" />
            <ResumeIcon className="hover:scale-110 duration-200 ease-in" />
          </div>
        </section>
      </div>
      <Link
        to="recent-projects"
        smooth={true}
        duration={500}
        className="group absolute bottom-5 left-1/2 -translate-x-1/2 uppercase text-sm lg:text-base flex flex-col items-center justify-center cursor-pointer"
      >
        <p>See my recent projects</p>
        <FiArrowDown className="group-hover:animate-bounce" />
      </Link>
    </motion.div>
  );
};

export default Main;
