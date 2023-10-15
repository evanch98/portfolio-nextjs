import Button from "@/components/common/button";
import { cn, hVariant, pVariant } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const imgVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeIn" } },
};

interface ProjectCardProps {
  imageSide?: "left" | "right";
  title: string;
  description: string;
  buttonText: string;
  href: string;
  image: any;
}

export const ProjectCard = ({
  imageSide = "left",
  title,
  description,
  buttonText,
  href,
  image,
}: ProjectCardProps) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col md:flex-row items-center gap-y-[16px] md:justify-between w-full",
        imageSide === "right" ? "md:flex-row-reverse" : ""
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={imgVariant}
        className="md:w-[690px] w-full h-[300px] md:h-[500px] relative border border-[--black] rounded-2xl overflow-hidden"
      >
        <Image src={image} layout="fill" objectFit="cover" alt="Image" />
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-y-[16px] md:gap-y-[24px] w-[380px]">
        <motion.h1 variants={hVariant} className="heading-3">
          {title}
        </motion.h1>
        <motion.div
          variants={pVariant}
          className="w-full flex flex-col items-center justify-center gap-y-[32px] md:gap-y-[48px]"
        >
          <p className="paragraph opacity-75">{description}</p>
          <a href={href} rel="noreferrer noopener" target="_blank">
            <Button variant="normal">{buttonText}</Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
