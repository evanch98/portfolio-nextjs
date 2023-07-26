"use client";

import CardStack from "../card-stack/CardStack";

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
          firstCardChildren={<div>Airbnb Clone</div>}
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
