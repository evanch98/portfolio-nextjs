"use client";

import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
  hover: {
    scale: 1.2,
    type: "spring",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
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

const Logo = () => {
  return (
    <a href="/" className="logo">
      <motion.svg
        className="logo-svg"
        viewBox="0 0 100 64"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <g transform="translate(229.77872,93.397985)">
          <g
            transform="translate(0,-96.572981)"
            strokeWidth={3}
            strokeDasharray="none"
          >
            <motion.path
              opacity={1}
              fill="none"
              stroke="#3F3A27"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="none"
              d="m -228.4558,4.4979172 h 21.16667 V 25.664583 h -21.16667 z"
              variants={pathVariants}
            />
            <motion.path
              opacity={1}
              fill="none"
              stroke="#3F3A27"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="none"
              d="m -228.4558,46.831249 h 21.16667 v 21.166666 h -21.16667 z"
              variants={pathVariants}
            />
            <motion.path
              opacity={1}
              fill="none"
              stroke="#3F3A27"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="none"
              strokeOpacity={1}
              d="m -207.28822,25.664062 v 21.167969 c 11.81535,0 21.16602,9.350664 21.16602,21.166016 h 21.16601 c 0,-23.254675 -19.07735,-42.333985 -42.33203,-42.333985 z"
              variants={pathVariants}
            />
            <motion.path
              opacity={1}
              fill="none"
              stroke="#3F3A27"
              strokeWidth={3}
              strokeLinecap="round"
              strokeDasharray="none"
              strokeOpacity={1}
              d="m -186.1222,4.4980469 c 0,11.8153521 -9.35067,21.1660161 -21.16602,21.1660151 v 21.167969 c 23.25468,0 42.33203,-19.079309 42.33203,-42.3339841 z"
              variants={pathVariants}
            />
          </g>
        </g>
      </motion.svg>
    </a>
  );
};

export default Logo;
