"use client";

import Banner from "@/components/common/banner";
import { projectType } from "@/types/types";

interface ProjectClientProps {
  data: projectType;
}

const ProjectClient: React.FC<ProjectClientProps> = ({ data }) => {
  return (
    <div className="w-full h-full mt-[70px] mb-5 flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner heading={data.title} description={data.description[0]} />
      </div>
    </div>
  );
};

export default ProjectClient;
