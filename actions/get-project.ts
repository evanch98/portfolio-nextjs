import { getProjects } from "@/actions/get-projects";

export const getProject = (id: string) => {
  const projects = getProjects();
  const project = projects.filter((project) => {
    return project.id === id;
  });
  return project;
};
