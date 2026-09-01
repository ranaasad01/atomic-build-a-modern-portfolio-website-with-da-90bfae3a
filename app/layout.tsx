import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: {
    default: "Alex Morris — Full-Stack Developer",
    template: "%s | Alex Morris",
  },
  description:
    "Full-Stack Developer crafting high-performance web products at the intersection of clean code and thoughtful design. Based in San Francisco.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Alex Morris" }],
  openGraph: {
    title: "Alex Morris — Full-Stack Developer",
    description:
      "Crafting digital experiences that leave a mark. Full-Stack Developer based in San Francisco.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morris — Full-Stack Developer",
    description:
      "Crafting digital experiences that leave a mark. Full-Stack Developer based in San Francisco.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased font-sans">
        <LocaleProvider>
          <LanguageToggle />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}