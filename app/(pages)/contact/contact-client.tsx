"use client";

import { ContactForm } from "./components/contact-form";
import Faq from "./components/faq";
import IntroSection from "./components/intro-section";

export const ContactClient = () => {
  return (
    <>
      <IntroSection />
      <ContactForm />
      <Faq />
    </>
  );
};
