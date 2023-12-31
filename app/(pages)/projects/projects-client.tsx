"use client";

import Banner from "@/components/common/banner";
import ProjectsSection from "@/components/common/projects-section";
import Subheading from "@/components/common/subheading";

const ProjectsClient = () => {
  return (
    <div className="w-full h-full mt-[70px] mb-5 flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner heading="Projects" description="Checkout my projects" />
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Projects" />
          <ProjectsSection isAll />
        </section>
      </div>
    </div>
  );
};

export default ProjectsClient;
