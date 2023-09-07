import Card from "@/components/common/card";
import { motion } from "framer-motion";

const links = [
  {
    title: "GitHub",
    description: "Checkout and star my projects",
    info: "https://github.com/evanch98",
  },
  {
    title: "LinkedIn",
    description: "Checkout my LinkedIn profile",
    info: "https://www.linkedin.com/in/kyaw-thu-0b3956212/",
  },
  {
    title: "Discord",
    description: "Let's chat on Discord",
    info: "https://www.discordapp.com/users/442602474067722241",
  },
  {
    title: "My Game Website",
    description: "Checkout my game website to see the game screenshots",
    info: "https://game-web-nextjs.vercel.app/",
  },
];

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const LinksSection = () => {
  return (
    <motion.div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      {links.map((link) => (
        <Card
          key={link.title}
          title={link.title}
          description={link.description}
          info={link.info}
        />
      ))}
    </motion.div>
  );
};

export default LinksSection;
