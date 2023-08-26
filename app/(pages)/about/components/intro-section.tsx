"use client";

import { motion } from "framer-motion";

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: { duration: 1, type: "spring" },
  },
};

const IntroSection = () => {
  return (
    <motion.div
      className="w-full p-5 rounded-2xl bg-[#EEEFF1] dark:bg-[#282B30] flex flex-col gap-y-2 shadow-lg"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={childVariants}>
        My name is Kyaw Thu, and a lot of people know me as Evan. I have born
        and raised in Burma (Myanmar), and I am currently living in Taiwan. I am
        pursuing my Bachelor of Science in Computer Science at the University of
        the People.
      </motion.p>
      <motion.p variants={childVariants}>
        I have spent 7 years studying medicine at the University of Medicine 1,
        Yangon. Due to several reasons, including pandemic, I had to drop out of
        the university. For as long as I can remember, I have always been into
        technology and working with computers. In 2021, I started learning
        programming with Python, which made me love programming even more.
      </motion.p>
      <motion.p variants={childVariants}>
        After exploring several career options, I was quickly drawn to front-end
        web development. I started learning HTML and CSS to build simple
        websites. Fascinated with how intricate web development can be, I was
        quickly drawn to learn more. I started learning JavaScript and was even
        more enthused with making websites interactive. I am now spending my
        time building projects with React JS, Next JS, Tailwind CSS, and MongoDB
        and learning new technologies.
      </motion.p>
      <motion.p variants={childVariants}>
        Apart from coding, I enjoy swimming. My favorite movie and TV show
        genres are Sci-fi and Sitcom. My favorite sport is soccer. My favorite
        team is Liverpool FC based in Liverpool, England. I also watch NBA
        occasionally. My favorite NBA team is Golden State Warriors.
      </motion.p>
    </motion.div>
  );
};

export default IntroSection;
