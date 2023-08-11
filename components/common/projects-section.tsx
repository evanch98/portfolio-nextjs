import { getProjects } from "@/actions/get-projects";
import Card from "@/components/common/card";

interface ProjectsSectionProps {
  isAll?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isAll = false }) => {
  const projects = isAll ? getProjects() : getProjects().slice(0, 3);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
    </div>
  );
};

export default ProjectsSection;
