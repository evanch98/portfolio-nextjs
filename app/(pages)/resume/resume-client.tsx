"use client";

import Banner from "@/components/common/banner";
import Subheading from "@/components/common/subheading";
import EduSection from "./components/edu-section";

const ResumeClient = () => {
  return (
    <div className="w-full h-full mt-[70px] mb-5 flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner
          heading="Resume"
          description="Studying Computer Science at the University of the People"
        />
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Education" />
          <EduSection />
        </section>
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Experience" />
        </section>
      </div>
    </div>
  );
};

export default ResumeClient;
