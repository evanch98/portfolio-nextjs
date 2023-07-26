import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface projectType {
  title: string;
  description: string;
  imageSrc: StaticImport;
  imageAlt: string;
  framework: string;
  techStack: string[];
  gitHubLink?: string;
  demoLink?: string;
  pageUrl: string;
}
