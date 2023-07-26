"use client";

import CardStack from "../card-stack/CardStack";
import FirstCardTemplate from "./FirstCardTemplate";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SecondCardTemplate from "./SecondCardTemplate";

interface ProjectSectionProps {
  cardSide: "left" | "right";
  title: string;
  description: string;
  imageSrc: StaticImport;
  imageAlt: string;
  framework: string;
  gitHubLink: string;
  demoLink: string;
  pageUrl: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  cardSide,
  title,
  description,
  imageSrc,
  imageAlt,
  framework,
  gitHubLink,
  demoLink,
  pageUrl,
}) => {
  return (
    <div
      className={`${
        cardSide === "left" ? "flex-row" : "flex-row-reverse"
      } mt-5 flex gap-5 w-full items-center justify-center`}
    >
      <section className="w-full flex items-center justify-center">
        <CardStack
          firstCardChildren={
            <FirstCardTemplate
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              pageUrl={pageUrl}
            />
          }
          secondCardChildren={
            <SecondCardTemplate
              gitHubLink={gitHubLink}
              demoLink={demoLink}
              title={title}
            />
          }
        />
      </section>
      <section className="w-full flex flex-col items-center justify-center gap-2">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{framework}</p>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default ProjectSection;
