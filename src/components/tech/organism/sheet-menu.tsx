"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { SidebarItems } from "../ui/sidebar-items";
import colors from "tailwindcss/colors";
import { useRef } from "react";

export const SheetMenu = () => {
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full h-10 flex items-center justify-end px-4 border-b border-b-slate-800 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <RxHamburgerMenu size={20} color={colors.slate[200]} className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-slate-900 text-white border-l-0">
          <SheetTitle className="text-white text-lg mb-6">Documentation</SheetTitle>
          <SidebarItems onMenuClick={() => dialogCloseRef.current?.click()} />
          <SheetClose ref={dialogCloseRef}></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};
