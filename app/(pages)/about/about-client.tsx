"use client";

import { CallToAction } from "@/components/common/call-to-action";
import IntroSection from "./components/intro-section";
import { MyValues } from "./components/my-values";

const AboutClient = () => {
  return (
    <>
      <IntroSection />
      <MyValues />
      <CallToAction />
    </>
  );
};

export default AboutClient;
