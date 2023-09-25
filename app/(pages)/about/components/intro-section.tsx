"use client";

import { Container } from "@/components/common/container";
import { motion } from "framer-motion";
import Link from "next/link";

const titleVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeIn" } },
};

const descriptionVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeIn" } },
};

const IntroSection = () => {
  return (
    <Container className="pt-[216px] pb-[128px] text-[--black]">
      <div className="px-[104px] w-full">
        <motion.div
          className="flex flex-col gap-y-[24px] w-[590px]"
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={titleVariant} className="heading-3">
            Hey, nice to meet you!
          </motion.h1>
          <motion.p
            variants={descriptionVariant}
            className="paragraph opacity-75"
          >
            I'm Kyaw Thu. I'm a UI/UX designer and front-end developer who likes
            to build beautiful and modern-looking websites using the latest
            technologies. Scroll down to learn about me,{" "}
            <span className="underline hover:no-underline ease-in duration-300 hover:opacity-50">
              <Link href="/#my-work">check out my work</Link>
            </span>{" "}
            or{" "}
            <span className="underline hover:no-underline ease-in duration-300 hover:opacity-50">
              <Link href="/contact">drop me a line</Link>
            </span>
            .
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
};

export default IntroSection;
