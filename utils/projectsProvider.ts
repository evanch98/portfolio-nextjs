import { projectType } from "@/types/types";
import { airbnbProject } from "./projects";

const projectsProvider = new Map<string, projectType>();
projectsProvider.set("airbnb", airbnbProject);

export default projectsProvider;
