"use client";

import { bonheurRoyale, ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export const Closing = () => {
  const { t } = useTranslation(["general"]);

  return (
    <div className="w-full h-full p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col items-center justify-between">
      <div className="space-y-3 flex items-center justify-center flex-col flex-1">
        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>{t("general:closing.label")}</p>
        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>{t("general:closing.sincerely")}</p>
        <h4 className={cn(bonheurRoyale.className, "text-5xl text-gold-200 text-center pb-12")}>Andrio & Rut</h4>

        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>
          {t("general:closing.bibleVerse.content")}
        </p>
        <p className={cn("text-sm text-white text-center italic")}>{t("general:closing.bibleVerse.source")}</p>
      </div>
      <div>
        <p className={cn("text-center text-sm text-white")}>Music: Goodness of God</p>
        <p className={cn("text-center text-sm text-white")}>
          Made with <span className="text-red-500">❤️</span>
        </p>
      </div>
    </div>
  );
};
