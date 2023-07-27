import { projectType } from "@/types/types";
import { airbnbProject, spotifyProject } from "./projects";

const projectsProvider: projectType[] = [
  spotifyProject,
  airbnbProject,
  spotifyProject,
  airbnbProject,
];

export default projectsProvider;
