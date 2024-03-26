"use client";

import { bonheurRoyale, ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface CoverProps {
  isOpen?: boolean;
  onOpen: () => void;
}

export const Cover = (props: CoverProps) => {
  const { isOpen: isOpenProps, onOpen } = props;
  const { t } = useTranslation(["general"]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenProps) {
      setIsOpen(true);
    }
  }, [isOpenProps]);

  useEffect(() => {
    if (isOpen) {
      onOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] absolute top-0 left-0 w-full z-50",
        isOpen ? "hidden-animation" : ""
      )}
    >
      <div className="bg-[url(/images/theme/general/cover-top-frame.png)] w-full top-0 left-0 h-24 bg-contain bg-no-repeat"></div>
      <div className="space-y-5 lg:pt-24 flex-1">
        <h2 className={cn(viaodaLibre.className, "text-xl lg:text-2xl text-center text-white")}>
          {t("general:cover.theWeddingOf")}
        </h2>
        <h1 className={cn(bonheurRoyale.className, "text-6xl lg:text-7xl text-gold-200 text-center")}>
          <span className="block">Rio</span>
          <span className="block">&</span>
          <span className="block">Rut</span>
        </h1>
        <h2 className={cn(viaodaLibre.className, "text-xl lg:text-2xl text-center text-white")}>20 April 2024</h2>
      </div>
      <div className="flex flex-col items-center justify-center z-10 pb-48 space-y-5">
        <div className="bg-white rounded-lg px-3 py-3 w-64 text-center shadow-lg">
          <span className={cn(viaodaLibre.className, "block")}>{t("general:cover.dear")}</span>
          <span className={cn(ebGaramond.className, "block text-lg font-medium")}>Pratama Sihite</span>
        </div>
        <button
          className="bg-gold-200 duration-200 hover:bg-gray-200 rounded-md px-3 py-2 text-sm"
          onClick={() => setIsOpen(true)}
        >
          {t("general:cover.openInvitation")}
        </button>
      </div>
      <div className="w-full h-96 absolute bottom-0 flex items-end justify-center">
        <Image
          src="/images/theme/general/cover-rumah-adat.png"
          fill
          sizes="(max-width: 768px) 50vh, 50vh"
          className="object-contain"
          alt="Rumah Adat"
        />
      </div>
    </div>
  );
};
