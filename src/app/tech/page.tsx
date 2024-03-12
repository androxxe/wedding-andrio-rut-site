"use client";

import { Section1, Section2 } from "@/components/tech/mdx";
import { Gallery } from "@/components/tech/molecules";

export default function Tech() {
  return (
    <div className="text-white">
      <Section1 />
      <Gallery />
      <Section2 />
      <div className="mt-12">
        <p className="text-sm text-slate-400">
          Built with <span className="text-red-500">♥︎</span> with Next.js, shadcn/ui, and next/mdx.
        </p>
      </div>
    </div>
  );
}
