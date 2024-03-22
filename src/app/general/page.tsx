import { BottomTab, Cover, Home } from "@/components/general/organism";

export default function Batak() {
  return (
    <div className="flex flex-col flex-1 bg-red-500 h-full overflow-y-auto">
      <div className="flex-1">
        <Cover isOpen />
        <Home />
      </div>
      <BottomTab />
    </div>
  );
}
