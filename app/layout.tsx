import { MainNav } from "@/components/main-nav";
import "./globals.css";
import type { Metadata } from "next";
import { ToastProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

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
        <div className="absolute top-0 right-5">
          <ModeToggle />
        </div>
        <MainNav />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="portfolio"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
