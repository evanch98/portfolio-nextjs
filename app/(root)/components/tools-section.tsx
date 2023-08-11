import Card from "@/components/common/card";
import { motion } from "framer-motion";

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const ToolsSection = () => {
  const tools = [
    {
      title: "Next JS",
      description:
        "I have built several web applications, such as Airbnb Clone, using Next JS framework.",
      info: "https://nextjs.org/",
    },
    {
      title: "React",
      description: "I use React library for building UI for websites.",
      info: "https://react.dev/",
    },
    {
      title: "Tailwind CSS",
      description:
        "I style almost all of my React components using Tailwind CSS.",
      info: "https://tailwindcss.com/",
    },
    {
      title: "Zustand",
      description:
        "I use Zustand as my primary state management library due to its simplicity.",
      info: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    },
    {
      title: "Prisma",
      description:
        "I use Prisma ORM in most of my projects due to its intuitive data model and type safety.",
      info: "https://www.prisma.io/",
    },
    {
      title: "Framer Motion",
      description: "I use Framer Motion to animate most of my components.",
      info: "https://www.framer.com/motion/",
    },
  ];

  return (
    <motion.div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      {tools.map((tool) => (
        <Card
          key={tool.title}
          title={tool.title}
          description={tool.description}
          info={tool.info}
        />
      ))}
    </motion.div>
  );
};

export default ToolsSection;
