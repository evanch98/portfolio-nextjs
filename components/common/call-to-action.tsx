import { FaArrowRight } from "react-icons/fa6";
import Button from "./button";
import { Container } from "./container";
import Link from "next/link";
import { motion } from "framer-motion";
import { hVariant, pVariant } from "@/lib/utils";

export const CallToAction = () => {
  return (
    <Container className="md:py-[128px] py-[32px] text-[--black]">
      <motion.div
        className="w-full md:px-[104px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-y-[24px] md:w-[690px] w-full">
          <motion.h1 variants={hVariant} className="heading-2">
            Got a project in mind?
          </motion.h1>
          <motion.div
            variants={pVariant}
            className="w-full flex flex-col gap-y-[48px]"
          >
            <p className="paragraph opacity-75">
              If you're looking for a designer and developer who is passionate
              about helping you business grow, let's talk.
            </p>
            <Link href="/contact">
              <Button variant="normalWithIcon">
                Let's Talk <FaArrowRight className="w-[20px] h-[20px]" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};
