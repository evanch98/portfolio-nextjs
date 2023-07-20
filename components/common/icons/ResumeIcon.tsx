import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

interface ResumeIconProps {
  className?: string;
}

const ResumeIcon: React.FC<ResumeIconProps> = ({ className }) => {
  return (
    <a
      href="https://drive.google.com/file/d/10mhxA0iDtQLDJPP7a3Ndiyl9RjExcT9o/view?usp=drive_link"
      target="_blank"
      rel="noreferrer"
      className={twMerge("w-14 h-auto", className)}
    >
      <motion.svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        viewBox="0 0 32 32"
      >
        <g>
          <title>Layer 1</title>
          <motion.path
            id="svg_1"
            d="m14,2l-8,0a2,2 0 0 0 -2,2l0,16a2,2 0 0 0 2,2l12,0a2,2 0 0 0 2,-2l0,-12l-6,-6z"
            opacity="undefined"
            variants={pathVariants}
          />
          <motion.path
            id="svg_2"
            d="m14,2l0,6l6,0"
            opacity="undefined"
            variants={pathVariants}
          />
          <motion.path
            id="svg_3"
            d="m16,13l-8,0"
            opacity="undefined"
            variants={pathVariants}
          />
          <motion.path
            id="svg_4"
            d="m16,17l-8,0"
            opacity="undefined"
            variants={pathVariants}
          />
          <motion.path
            id="svg_5"
            d="m10,9l-1,0l-1,0"
            opacity="undefined"
            variants={pathVariants}
          />
        </g>
      </motion.svg>
    </a>
  );
};

export default ResumeIcon;
