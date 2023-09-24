import { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "Kyaw | About Me",
  description: "Kyaw Thu's portfolio website about me page",
};

export default function AboutPage() {
  return (
    <main>
      <AboutClient />
    </main>
  );
}
