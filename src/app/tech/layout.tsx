import { Footer } from "@/components/tech/organism";

export default function TechLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="bg-neutral-900 h-screen px-10 py-7">
      <div className="bg-neutral-950 h-full rounded-md flex flex-col">
        <div className="p-5 flex flex-1 overflow-y-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
