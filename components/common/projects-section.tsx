import { getProjects } from "@/actions/get-projects";
import { motion } from "framer-motion";
import Card from "@/components/common/card";

interface ProjectsSectionProps {
  isAll?: boolean;
}

const mainVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isAll = false }) => {
  const projects = isAll ? getProjects() : getProjects().slice(0, 3);

  return (
    <motion.div
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={mainVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description[0]}
          code={project.gitHubLink}
          live={project.demoLink}
          info={`/projects/${project.id}`}
        />
      ))}
    </motion.div>
  );
};

export default ProjectsSection;
