/* Every project should include the following properties */
export interface projectType {
  id: string;
  title: string;
  description: string[];
  framework: string;
  techStack: string[];
  date: string;
  category: string;
  gitHubLink: string;
  demoLink: string;
  alert?: React.ReactNode;
}
