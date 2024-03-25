import { Footer, Sidebar } from "@/components/tech/organism";
import { SheetMenu } from "@/components/tech/organism/sheet-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/tech/atoms/sheet";
import { SidebarItems } from "@/components/tech/atoms/sidebar-items";
import { Metadata } from "next";
import { RxHamburgerMenu } from "react-icons/rx";
import colors from "tailwindcss/colors";

export const metadata: Metadata = {
  title: "Andrio & Rut",
  description: "Andrio & Rut wedding invitation"
};

export default function TechLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="bg-slate-800 lg:bg-slate-900 transition-colors h-screen px-2 lg:px-10 py-2 lg:py-7 scroll-smooth">
      <div className="bg-slate-950 h-full rounded-md flex flex-col">
        <div className="flex flex-1 overflow-y-auto">
          <Sidebar />
          <div className="w-full h-full flex flex-col">
            <SheetMenu />
            <div className="p-5 flex-1 w-full overflow-y-auto">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
