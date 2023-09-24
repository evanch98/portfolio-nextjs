import { MainNav } from "@/components/main-nav";
import "./globals.css";
import type { Metadata } from "next";
import { ToastProvider } from "@/providers/toast-provider";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/common/footer";
import { AnimatePresenceProvider } from "@/providers/animate-presence-provider";

export const metadata: Metadata = {
  title: "Kyaw | Designer & Web Developer",
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
        <MainNav />
        <ToastProvider />
        <AnimatePresenceProvider>{children}</AnimatePresenceProvider>
        <Footer />
      </body>
    </html>
  );
}
