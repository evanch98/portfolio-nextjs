"use client";

import { TransitionWrapper } from "@/components/common/transition-wrapper";
import { ContactForm } from "./components/contact-form";
import Faq from "./components/faq";
import IntroSection from "./components/intro-section";

export const ContactClient = () => {
  return (
    <TransitionWrapper>
      <IntroSection />
      <ContactForm />
      <Faq />
    </TransitionWrapper>
  );
};
