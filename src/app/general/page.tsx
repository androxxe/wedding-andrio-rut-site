"use client";

import { Music, MusicHandle } from "@/components/general/molecules";
import {
  BottomTab,
  Groom,
  Cover,
  Home,
  Bride,
  Event,
  Gallery,
  Story,
  Wishes,
  Gift,
  Closing
} from "@/components/general/organism";
import { useRef, useState } from "react";

export default function Batak() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const musicRef = useRef<MusicHandle>(null);

  return (
    <div className="flex flex-col flex-1 bg-red-500 h-full overflow-y-auto">
      <div className="flex-1 overflow-y-auto relative">
        <Cover onOpen={() => musicRef.current?.startPlaying()} />
        {activeIndex === 0 && <Home />}
        {activeIndex === 1 && <Groom />}
        {activeIndex === 2 && <Bride />}
        {activeIndex === 3 && <Event />}
        {activeIndex === 4 && <Gallery />}
        {activeIndex === 5 && <Story />}
        {activeIndex === 6 && <Wishes />}
        {activeIndex === 7 && <Gift />}
        {activeIndex === 8 && <Closing />}
        <Music ref={musicRef} />
      </div>
      <BottomTab activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}
