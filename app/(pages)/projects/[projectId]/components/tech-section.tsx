import { motion } from "framer-motion";

interface TechSectionProps {
  techs: string[];
}

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: { duration: 1, type: "spring" },
  },
};

const TechSection: React.FC<TechSectionProps> = ({ techs }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-5">
      <motion.div
        className="w-full bg-[#EEEFF1] dark:bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg"
        variants={mainVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.ul className="list-inside list-disc" variants={mainVariants}>
          {techs.map((tech, index) => (
            <motion.li key={index} variants={childVariants}>
              {tech}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default TechSection;
