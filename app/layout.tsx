import { MainNav } from "@/components/main-nav";
import "./globals.css";
import type { Metadata } from "next";
import { ToastProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/modal-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative",
          "bg-white text-[#1E2124] dark:bg-[#1E2124] dark:text-white"
        )}
      >
        <ToastProvider />
        <ModalProvider />
        <MainNav />
        {children}
      </body>
    </html>
  );
}
