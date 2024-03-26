"use client";

import { LanguageSwitcher, Music, MusicHandle } from "@/components/general/molecules";
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
import { useI18n } from "@/hooks/useI18n";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Batak() {
  const { init } = useI18n();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AUTOPLAY_AUDIO: boolean = process.env.NEXT_PUBLIC_AUTOPLAY_AUDIO === "true";

  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const musicRef = useRef<MusicHandle>(null);

  return (
    <div className="flex flex-col flex-1 bg-red-500 h-full overflow-y-auto">
      <div className="flex-1 overflow-y-auto relative">
        <Cover
          isOpen
          onOpen={() => {
            if (AUTOPLAY_AUDIO) musicRef.current?.startPlaying();
            setActiveIndex(0);
          }}
        />
        {activeIndex === 0 && <Home />}
        {activeIndex === 1 && <Groom />}
        {activeIndex === 2 && <Bride />}
        {activeIndex === 3 && <Event />}
        {activeIndex === 4 && <Gallery />}
        {activeIndex === 5 && <Story />}
        {activeIndex === 6 && <Wishes />}
        {activeIndex === 7 && <Gift />}
        {activeIndex === 8 && <Closing />}
        {activeIndex !== undefined ? (
          <>
            <Music ref={musicRef} />
            <LanguageSwitcher />
          </>
        ) : null}
      </div>
      {activeIndex !== undefined ? <BottomTab activeIndex={activeIndex} setActiveIndex={setActiveIndex} /> : null}
    </div>
  );
}
