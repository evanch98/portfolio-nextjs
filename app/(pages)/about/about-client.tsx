"use client";

import Banner from "@/components/common/banner";
import Subheading from "@/components/common/subheading";
import IntroSection from "./components/intro-section";
import ContactSection from "./components/contact-section";

const AboutClient = () => {
  return (
    <div className="w-full h-full mt-[70px] mb-5 flex items-center justify-center">
      <div className="h-full w-full max-w-[1024px] flex flex-col items-center justify-center px-2 lg:px-0 gap-5">
        <Banner
          heading="About Me"
          description="An aspiring front-end developer"
        />
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Introduction" />
          <IntroSection />
        </section>
        <section className="w-full flex flex-col gap-5">
          <Subheading title="Contact Me" />
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default AboutClient;
