"use client";

import { CallToAction } from "@/components/common/call-to-action";
import IntroSection from "./components/intro-section";
import { MyValues } from "./components/my-values";
import { TechnicalStack } from "./components/technical-stack";

const AboutClient = () => {
  return (
    <>
      <IntroSection />
      <MyValues />
      <TechnicalStack />
      <CallToAction />
    </>
  );
};

export default AboutClient;
