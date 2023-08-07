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

interface MailIconProps {
  className?: string;
}

const MailIcon: React.FC<MailIconProps> = ({ className }) => {
  return (
    <a
      href="mailto:evanch98@gmail.com"
      className={twMerge("w-10 h-auto", className)}
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
            d="m4,4l16,0c1.1,0 2,0.9 2,2l0,12c0,1.1 -0.9,2 -2,2l-16,0c-1.1,0 -2,-0.9 -2,-2l0,-12c0,-1.1 0.9,-2 2,-2z"
            variants={pathVariants}
          />
          <motion.path
            id="svg_2"
            d="m22,6l-10,7l-10,-7"
            opacity="undefined"
            variants={pathVariants}
          />
        </g>
      </motion.svg>
    </a>
  );
};

export default MailIcon;
