"use client";

import airbnb from "@/public/assets/projects/airbnb.svg";
import CardStack from "../card-stack/CardStack";
import FirstCardTemplate from "./FirstCardTemplate";

interface ProjectSectionProps {
  cardSide: "left" | "right";
  title: string;
  description: string;
  framework: string;
  gitHubLink?: string;
  demoLink?: string;
  pageUrl?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  cardSide,
  title,
  description,
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
              imageSrc={airbnb}
              imageAlt="Airbnb Sample"
              pageUrl="/airbnb"
            />
          }
          secondCardChildren={<div>GitHub</div>}
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
