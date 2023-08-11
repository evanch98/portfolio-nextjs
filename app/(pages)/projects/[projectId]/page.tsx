import { getProject } from "@/actions/get-project";
import ProjectClient from "./project-client";

const ProjectPage = ({ params }: { params: { projectId: string } }) => {
  const project = getProject(params.projectId);

  return (
    <div>
      <ProjectClient data={project} />
    </div>
  );
};

export default ProjectPage;
