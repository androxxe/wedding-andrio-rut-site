"use client";

import { MdxSection1, MdxSection2, MdxSection3 } from "@/components/tech/mdx";
import { Gallery, Wishes } from "@/components/tech/molecules";

export default function Tech() {
  return (
    <div className="text-white">
      <MdxSection1 />
      <Gallery />
      <MdxSection2 />
      <Wishes />
      <MdxSection3 />
      <div className="mt-12">
        <p className="text-sm text-slate-400">
          Built with <span className="text-red-500">♥︎</span> with Next.js, shadcn/ui, and next/mdx.
        </p>
      </div>
    </div>
  );
}
