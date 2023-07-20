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

interface LinkedinIconProps {
  className?: string;
}

const LinkedinIcon: React.FC<LinkedinIconProps> = ({ className }) => {
  return (
    <a
      href="https://www.linkedin.com/in/kyaw-thu-0b3956212/"
      target="_blank"
      rel="noreferrer"
      className={twMerge("w-16 h-auto", className)}
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
            d="m16,8a6,6 0 0 1 6,6l0,7l-4,0l0,-7a2,2 0 0 0 -2,-2a2,2 0 0 0 -2,2l0,7l-4,0l0,-7a6,6 0 0 1 6,-6z"
            variants={pathVariants}
          />
          <motion.path
            id="svg_2"
            d="m2,9l4,0l0,12l-4,0l0,-12z"
            opacity="undefined"
            variants={pathVariants}
          />
          <motion.path
            id="svg_3"
            d="m4,6c-1.10497,0 -2,-0.89503 -2,-2c0,-1.10497 0.89503,-2 2,-2c1.10497,0 2,0.89503 2,2c0,1.10497 -0.89503,2 -2,2z"
            opacity="undefined"
            variants={pathVariants}
          />
        </g>
      </motion.svg>
    </a>
  );
};

export default LinkedinIcon;
