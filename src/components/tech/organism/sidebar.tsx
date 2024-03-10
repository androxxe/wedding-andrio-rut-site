"use client";

import { Suspense } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { SiTypescript } from "react-icons/si";
import Link from "next/link";

export const Sidebar = () => {
  const sidebars = [
    { title: "pembuka.ts" },
    { title: "pengantin.ts" },
    { title: "acara.ts" },
    { title: "cerita-kami.ts" },
    { title: "hadiah-pernikahan.ts" },
    { title: "ucapan.ts" },
    { title: "penutup.ts" }
  ];

  return (
    <aside className="w-64 border-r border-neutral-700 md:block hidden overflow-y-auto text-white">
      <Accordion type="single" collapsible defaultValue="about">
        <AccordionItem value={"about"} defaultChecked className="border-0">
          <AccordionTrigger className="border-b border-neutral-700 px-5 py-2.5 text-left">Section</AccordionTrigger>
          <AccordionContent className="mt-5 space-y-1">
            {sidebars.map(({ title }) => (
              <div className="border-0" key={title}>
                <Suspense fallback={<>Loading...</>}>
                  <Link
                    href={title}
                    key={title}
                    className="w-full transition-colors flex items-center gap-x-2.5 px-5 py-1"
                  >
                    <SiTypescript className="w-4 h-4 shrink-0" />
                    {title}
                  </Link>
                </Suspense>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};
