import { getProjects } from "@/actions/get-projects";
import Card from "@/components/common/card";

const ProjectsSection = () => {
  const projects = getProjects();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.slice(0, 3).map((project) => (
        <Card
          key={project.title}
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
