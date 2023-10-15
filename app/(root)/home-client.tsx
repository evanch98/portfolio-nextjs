"use client";

import { CallToAction } from "@/components/common/call-to-action";
import { HeroSection } from "./components/hero-section";
import { WorkSection } from "./components/work-section";
import { Capabilities } from "./components/capabilities";
import { TransitionWrapper } from "@/components/common/transition-wrapper";

const HomeClient = () => {
  return (
    <TransitionWrapper className="bg-[--primary-100] w-full">
      <HeroSection />
      <WorkSection />
      <CallToAction />
      <Capabilities />
    </TransitionWrapper>
  );
};

export default HomeClient;
