import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ResponsiveIndicator } from "@/components/responsive-indicator";
import { Provider } from "./provider";

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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased")}>
        <Provider>{children}</Provider>
        <ResponsiveIndicator />
      </body>
    </html>
  );
}
