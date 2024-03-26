"use client";

import { ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const Bride = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col items-start lg:justify-center overflow-y-auto">
      <div className="text-left space-y-2 z-10 w-full lg:w-[24rem] px-5 mt-24 lg:mt-0">
        <h2 className={cn(viaodaLibre.className, "text-gold-200 text-3xl")}>Rut Maya Sari Sihite, S.T</h2>
        <h4 className={cn(ebGaramond.className, "text-white text-lg")}>{t("general:groom.content")}</h4>
        <div>
          <div className="bg-white px-2 py-1 rounded-lg inline">
            <Link
              href="https://www.instagram.com/rutmayasaris/"
              target="_blank"
              className={cn(ebGaramond.className, "text-maroon-700 text-lg")}
            >
              @rutmayasaris
            </Link>
          </div>
        </div>
      </div>
      <div className="w-64 lg:w-80 h-[42rem] absolute top-24 -right-12">
        <Image src="/images/theme/general/bride-rut.png" fill objectFit="contain" alt="Bride Andrio Pratama Sirait" />
      </div>
      <div className="w-32 lg:w-40 h-32 absolute top-[38rem] lg:top-[42rem] right-0 flex items-start justify-start z-10">
        <Image
          src="/images/theme/general/bride-flower-1.png"
          fill
          objectFit="contain"
          objectPosition="right"
          alt="Ornament"
        />
      </div>
      <div className="w-32 lg:w-40 h-32 absolute top-[38rem] lg:top-[42rem] right-12 lg:right-16 flex items-start justify-start">
        <Image
          src="/images/theme/general/bride-flower-2.png"
          fill
          objectFit="contain"
          objectPosition="right"
          alt="Ornament"
        />
      </div>
      <div className="w-32 h-48 absolute top-[14rem] right-0 flex items-start justify-start z-10">
        <Image
          src="/images/theme/general/bride-flower-3.png"
          fill
          objectFit="contain"
          objectPosition="right"
          alt="Ornament"
        />
      </div>
    </div>
  );
};
