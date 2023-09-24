import { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Kyaw | Contact Me",
  description: "Kyaw Thu's portfolio website contact me page",
};

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  );
}
