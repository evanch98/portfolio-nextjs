import { MainNav } from "@/components/main-nav";
import "./globals.css";
import type { Metadata } from "next";
import { ToastProvider } from "@/providers/toast-provider";

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
      <body className="relative">
        <ToastProvider />
        <MainNav />
        {children}
      </body>
    </html>
  );
}
