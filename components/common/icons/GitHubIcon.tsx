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

interface GitHubIconProps {
  className?: string;
}

const GitHubIcon: React.FC<GitHubIconProps> = ({ className }) => {
  return (
    <a
      href="https://github.com/evanch98"
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
            d="m9,19c-5,1.5 -5,-2.5 -7,-3m14,6l0,-3.87a3.37,3.37 0 0 0 -0.94,-2.61c3.14,-0.35 6.44,-1.54 6.44,-7a5.44,5.44 0 0 0 -1.5,-3.75a5.07,5.07 0 0 0 -0.09,-3.77s-1.18,-0.35 -3.91,1.48a13.38,13.38 0 0 0 -7,0c-2.73,-1.83 -3.91,-1.48 -3.91,-1.48a5.07,5.07 0 0 0 -0.09,3.77a5.44,5.44 0 0 0 -1.5,3.78c0,5.42 3.3,6.61 6.44,7a3.37,3.37 0 0 0 -0.94,2.58l0,3.87"
            opacity="undefined"
            variants={pathVariants}
          />
        </g>
      </motion.svg>
    </a>
  );
};

export default GitHubIcon;
