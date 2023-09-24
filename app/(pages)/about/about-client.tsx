"use client";

import { CallToAction } from "@/components/common/call-to-action";
import IntroSection from "./components/intro-section";
import { MyValues } from "./components/my-values";
import { TechnicalStack } from "./components/technical-stack";
import { AboutMe } from "./components/about-me";
import { MoreAboutMe } from "./components/more-about-me";
import { TransitionWrapper } from "@/components/common/transition-wrapper";

const AboutClient = () => {
  return (
    <TransitionWrapper>
      <IntroSection />
      <MyValues />
      <TechnicalStack />
      <AboutMe />
      <MoreAboutMe />
      <CallToAction />
    </TransitionWrapper>
  );
};

export default AboutClient;
