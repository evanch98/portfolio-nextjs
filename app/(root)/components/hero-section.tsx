import Button from "@/components/common/button";
import { Container } from "@/components/common/container";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { hVariant, pVariant } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <div className="hero-background w-full h-full">
      <Container className="py-[24px] md:py-[128px]">
        <motion.div
          className="flex flex-col items-center justify-center gap-y-[32px] text-[--primary-100]"
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={hVariant} className="heading-3 text-center">
            Hey there, I'm Kyaw Thu
          </motion.h2>
          <motion.h1 variants={hVariant} className="heading-2 text-center">
            Freelance UX/UI designer & web developer based in Taiwan
          </motion.h1>
          <div className="flex flex-col items-center justify-center gap-y-[48px] text-[--primary-200]">
            <motion.p variants={pVariant} className="paragraph text-center">
              A designer/front-end developer with a passion for helping startups
              through unique and user-centered design.
            </motion.p>
            <Link href="/#my-work">
              <motion.div variants={pVariant}>
                <Button variant="hero" className="group">
                  View my work{" "}
                  <FaArrowRight className="w-[20px] h-[20px] group-hover:rotate-90 ease-in duration-300" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
