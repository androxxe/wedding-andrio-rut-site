"use client";

import { Suspense } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { SiTypescript } from "react-icons/si";
import Link from "next/link";

type SidebarType = { title: string }[];

export const Sidebar = () => {
  const sidebars: SidebarType = [
    { title: "introduction.ts" },
    { title: "groom-information.ts" },
    { title: "bride-information.ts" },
    { title: "wedding-information.ts" },
    { title: "gallery.ts" },
    { title: "wishes.ts" },
    { title: "wedding-gift.ts" },
    { title: "closing-statement.ts" }
  ];

  return (
    <aside className="w-64 border-r border-neutral-700 md:block hidden overflow-y-auto text-white">
      <Accordion type="single" collapsible defaultValue="about">
        <AccordionItem value={"about"} defaultChecked className="border-0">
          <AccordionTrigger className="border-b border-neutral-700 px-5 py-2.5 text-left">
            Documentation
          </AccordionTrigger>
          <AccordionContent className="mt-5 space-y-1">
            {sidebars.map(({ title }) => (
              <div className="border-0" key={title}>
                <button
                  key={title}
                  className="w-full flex items-center gap-x-2.5 px-5 py-1 text-left hover:bg-neutral-800 transition-colors"
                  onClick={(event) => {
                    event.preventDefault();

                    const element = document.getElementById(title.replace(".ts", ""));
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <SiTypescript className="w-4 h-4 shrink-0" />
                  {title}
                </button>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};
