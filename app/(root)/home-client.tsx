"use client";

import { CallToAction } from "@/components/common/call-to-action";
import { HeroSection } from "./components/hero-section";
import { WorkSection } from "./components/work-section";

const HomeClient = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <CallToAction />
    </>
  );
};

export default HomeClient;
