import ProjectClient from "./project-client";

const ProjectPage = ({ params }: { params: { projectId: string } }) => {
  return (
    <div>
      <ProjectClient />
    </div>
  );
};

export default ProjectPage;
