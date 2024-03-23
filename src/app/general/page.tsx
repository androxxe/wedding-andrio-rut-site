"use client";

import { BottomTab, Groom, Cover, Home } from "@/components/general/organism";
import { useState } from "react";

export default function Batak() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <div className="flex flex-col flex-1 bg-red-500 h-full overflow-y-auto">
      <div className="flex-1 overflow-y-auto">
        <Cover isOpen />
        {activeIndex === 0 && <Home />}
        {activeIndex === 1 && <Groom />}
      </div>
      <BottomTab activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}
