import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { SkillBox } from "@/components/skill-box";
import { hVariant } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  "Journey Maps",
  "User Flow",
  "Wireframes",
  "Prototypes",
  "UI Design",
  "Design Systems",
  "Web Development",
];

const tools = [
  "Figma",
  "InkScape",
  "VS Code",
  "React",
  "HTML + CSS",
  "Flutter",
  "Notion",
];

export const Capabilities = () => {
  return (
    <Container className="py-[128px] text-[--black]">
      <div className="flex flex-col gap-y-[128px] items-center justify-center">
        <Header
          title="Capabilities"
          description="Transforming complex ideas into intuitive and human-centered experiences."
        />
        <motion.div
          className="flex items-center justify-center gap-x-[24px] w-[590px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              staggerChildren: 0.7,
            }}
            className="flex flex-col items-center justify-center gap-y-[24px] w-full"
          >
            <motion.h2 variants={hVariant} className="heading-3">
              Skills
            </motion.h2>
            <motion.div className="w-full">
              {skills.map((skill, index) => (
                <SkillBox
                  key={index}
                  name={skill}
                  border={index === skills.length - 1 ? "topAndBottom" : "top"}
                />
              ))}
            </motion.div>
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              staggerChildren: 0.7,
            }}
            className="flex flex-col items-center justify-center gap-y-[24px] w-full"
          >
            <motion.h2 variants={hVariant} className="heading-3">
              Tools
            </motion.h2>
            <div className="w-full">
              {tools.map((tool, index) => (
                <SkillBox
                  key={tool}
                  name={tool}
                  border={index === tools.length - 1 ? "topAndBottom" : "top"}
                />
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </Container>
  );
};
