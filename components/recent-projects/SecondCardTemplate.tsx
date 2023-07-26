"use client";

import Link from "next/link";
import { FiGithub, FiGlobe } from "react-icons/fi";

interface SecondCardTemplateProps {
  title: string;
  gitHubLink?: string;
  demoLink?: string;
}

const SecondCardTemplate: React.FC<SecondCardTemplateProps> = ({
  title,
  gitHubLink,
  demoLink,
}) => {
  return (
    <div className="flex flex-col w-full h-full items-center p-2 gap-2">
      <h2 className="font-bold text-lg">{title}</h2>
      <section className="flex items-center justify-center w-full gap-2">
        <FiGithub className="w-6 h-6" />
        <Link
          href={gitHubLink ?? "/404"}
          target="_blank"
          className="hover:underline transition"
        >
          GitHub
        </Link>
      </section>
      <section className="flex items-center justify-center w-full gap-2">
        <FiGlobe className="w-6 h-6" />
        <Link
          href={demoLink ?? "/404"}
          target="_blank"
          className="hover:underline transition"
        >
          Demo
        </Link>
      </section>
    </div>
  );
};

export default SecondCardTemplate;
