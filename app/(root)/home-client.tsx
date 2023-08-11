"use client";

import Subheading from "@/components/common/subheading";
import Banner from "@/components/common/banner";
import ProjectsSection from "@/components/common/projects-section";
import ToolsSection from "./components/tools-section";

const HomeClient = () => {
  return (
    <div className="w-full h-full mt-[70px] mb-5 flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner
          heading="Kyaw Thu"
          description="Let's Build Something Legendary Together"
        />
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Projects" moreHref="/projects" />
          <ProjectsSection />
        </section>
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Most Used Tools and Frameworks" />
          <ToolsSection />
        </section>
      </div>
    </div>
  );
};

export default HomeClient;
