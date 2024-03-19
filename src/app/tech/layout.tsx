import { Footer, Sidebar } from "@/components/tech/organism";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrio & Rut",
  description: "Andrio & Rut wedding invitation"
};

export default function TechLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="bg-slate-900 h-screen px-2 lg:px-10 py-2 lg:py-7 scroll-smooth">
      <div className="bg-slate-950 h-full rounded-md flex flex-col">
        <div className="flex flex-1 overflow-y-auto">
          <Sidebar />
          <div className="p-5 w-full h-full overflow-y-auto">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
