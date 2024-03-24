import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ResponsiveIndicator } from "@/components/responsive-indicator";
import { Provider } from "./provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrio & Rut",
  description: "Andrio & Rut wedding invitation"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const UMAMI_URL = process.env.UMAMI_URL;
  const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <Script defer src={UMAMI_URL} data-website-id={UMAMI_WEBSITE_ID}></Script>
      <body className={cn(inter.className, "antialiased")}>
        <Provider>{children}</Provider>
        <ResponsiveIndicator />
      </body>
    </html>
  );
}
