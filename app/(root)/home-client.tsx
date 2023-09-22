"use client";

import { CallToAction } from "@/components/common/call-to-action";
import { HeroSection } from "./components/hero-section";
import { WorkSection } from "./components/work-section";
import { Capabilities } from "./components/capabilities";

const HomeClient = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <CallToAction />
      <Capabilities />
    </>
  );
};

export default HomeClient;
