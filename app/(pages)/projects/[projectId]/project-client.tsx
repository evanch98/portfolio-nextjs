"use client";

import Banner from "@/components/common/banner";
import Subheading from "@/components/common/subheading";
import { projectType } from "@/types/types";
import OverviewSection from "./components/overview-section";
import DescSection from "./components/desc-section";
import TechSection from "./components/tech-section";
import Alert from "@/components/common/alert";

interface ProjectClientProps {
  data: projectType;
}

const ProjectClient: React.FC<ProjectClientProps> = ({ data }) => {
  return (
    <div className="w-full h-full mt-[70px] mb-5 flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner
          heading={data.title}
          description={data.description[0]}
          home={false}
        />
        {data.alert && <Alert>{data.alert}</Alert>}
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Overview" />
          <OverviewSection
            title={data.title}
            category={data.category}
            date={data.date}
            framework={data.framework}
            gitHub={data.gitHubLink}
            live={data.demoLink}
          />
        </section>
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Descriptions" />
          <DescSection descriptions={data.description} />
        </section>
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Tech Stack" />
          <TechSection techs={data.techStack} />
        </section>
      </div>
    </div>
  );
};

export default ProjectClient;
