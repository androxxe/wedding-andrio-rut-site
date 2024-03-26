"use client";

import { ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const Gift = () => {
  const { t } = useTranslation(["general"]);

  return (
    <div className="w-full h-full p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col items-center justify-center">
      <h2 className={cn(viaodaLibre.className, "text-4xl text-center mb-4 text-gold-200 shadow-sm")}>
        {t("general:gift.weddingGift")}
      </h2>
      <div className="mb-6">
        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>{t("general:gift.description")}</p>
      </div>
      <div className={cn(ebGaramond.className, "text-lg text-white space-y-5")}>
        <div className="bg-gold-200 duration-100 hover:scale-105 px-10 py-4 text-maroon-700 rounded-md shadow flex flex-row items-center space-x-4">
          <Image
            src="/images/theme/general/bank_mandiri.webp"
            width={50}
            height={50}
            alt="Bank Mandiri"
            className="object-contain h-auto"
          />
          <div>
            <span className="block text-xl font-medium">1080014605969</span>
            <span className="block font-normal">Andrio Pratama Sirait</span>
            <span className="block font-normal">Bank Mandiri</span>
          </div>
        </div>
        <div className="bg-gold-200 duration-100 hover:scale-105 px-10 py-4 text-maroon-700 rounded-md shadow flex flex-row items-center space-x-4">
          <Image
            src="/images/theme/general/bca.png"
            width={50}
            height={50}
            alt="BCA"
            className="object-contain h-auto"
          />
          <div>
            <span className="block text-xl font-medium">7285253306</span>
            <span className="block font-normal">Rut Maya Sari Sihite</span>
            <span className="block font-normal">Bank Central Asia</span>
          </div>
        </div>
      </div>
    </div>
  );
};
