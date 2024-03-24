"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { SidebarItems } from "../ui/sidebar-items";

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-neutral-700 md:block hidden overflow-y-auto text-white">
      <Accordion type="single" collapsible defaultValue="about">
        <AccordionItem value={"about"} defaultChecked className="border-0">
          <AccordionTrigger className="border-b border-neutral-700 px-5 py-2.5 text-left">
            Documentation
          </AccordionTrigger>
          <AccordionContent className="mt-5 space-y-1">
            <SidebarItems menuClassName="px-5" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};
