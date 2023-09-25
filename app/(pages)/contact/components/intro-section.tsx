"use client";

import { Container } from "@/components/common/container";
import { hVariant, pVariant } from "@/lib/utils";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <Container className="pt-[216px] pb-[128px] text-[--black]">
      <div className="px-[104px] w-full">
        <motion.div
          className="flex flex-col gap-y-[24px] w-[590px]"
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={hVariant} className="heading-3">
            Want to discuss a project or opportunity?
          </motion.h1>
          <motion.p variants={pVariant} className="paragraph opacity-75">
            Use the form below to give me some details, and I'll get back to you
            as soon as I can.
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
};

export default IntroSection;
