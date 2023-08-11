import GitHubIcon from "@/components/common/icons/GitHubIcon";
import LinkedinIcon from "@/components/common/icons/LinkedinIcon";
import MailIcon from "@/components/common/icons/MailIcon";
import ResumeIcon from "@/components/common/icons/ResumeIcon";
import { motion } from "framer-motion";

interface BannerProps {
  heading: string;
  description: string;
  home?: boolean;
}

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const childVariants = {
  hidden: { y: "-50vh" },
  visible: { y: 0, transition: { duration: 1, type: "spring" } },
};

const Banner: React.FC<BannerProps> = ({
  heading,
  description,
  home = true,
}) => {
  return (
    <motion.div
      className="w-full p-5 flex flex-col items-center justify-center bg-[#282B30] rounded-2xl gap-y-2 shadow-lg"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl font-bold"
        variants={childVariants}
      >
        {heading}
      </motion.h1>
      <motion.p
        className="opacity-70 md:text-lg lg:text-xl text-center"
        variants={childVariants}
      >
        {description}
      </motion.p>
      {home && (
        <div className="flex items-center justify-center gap-x-4">
          <GitHubIcon className="hover:opacity-70 transition-opacity" />
          <LinkedinIcon className="hover:opacity-70 transition-opacity" />
          <MailIcon className="hover:opacity-70 transition-opacity" />
          <ResumeIcon className="hover:opacity-70 transition-opacity" />
        </div>
      )}
    </motion.div>
  );
};

export default Banner;
