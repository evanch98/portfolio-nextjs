import { MainNav } from "@/components/main-nav";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyaw | Front-end developer",
  description: "Kyaw Thu's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
