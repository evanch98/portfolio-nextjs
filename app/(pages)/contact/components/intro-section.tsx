"use client";

import { Container } from "@/components/common/container";

const IntroSection = () => {
  return (
    <Container className="pt-[216px] pb-[128px] text-[--black]">
      <div className="px-[104px] w-full">
        <div className="flex flex-col gap-y-[24px] w-[590px]">
          <h1 className="heading-3">
            Want to discuss a project or opportunity?
          </h1>
          <p className="paragraph opacity-75">
            Use the form below to give me some details, and I'll get back to you
            as soon as I can.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default IntroSection;
