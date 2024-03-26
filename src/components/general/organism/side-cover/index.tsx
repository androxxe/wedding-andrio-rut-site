"use client";

import { bonheurRoyale, ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const SideCover = () => {
  return (
    <div className="w-full h-full bg-maroon-600 flex flex-col items-center justify-center relative">
      <div className="absolute top-0 left-0 h-full w-full opacity-20 bg-[url(/images/theme/general/batik-batak.jpg)] bg-[length:16rem_16rem]"></div>
      <div className="z-10 w-full h-full flex flex-col items-center justify-center">
        <div className={cn(bonheurRoyale.className, "relative w-full bg-gold-200")}>
          <Image
            src="/images/theme/general/side-cover-ornament-1.png"
            height={128}
            width={30}
            alt="Rio & Rut"
            className="absolute top-0 bottom-0 mx-3 left-0 my-auto"
            objectFit="contain"
          />
          <div className="py-8">
            <h1 className={cn(bonheurRoyale.className, "text-6xl lg:text-7xl text-maroon-700 text-center")}>
              Rio & Rut
            </h1>
          </div>
          <Image
            src="/images/theme/general/side-cover-ornament-1.png"
            height={128}
            width={30}
            alt="Rio & Rut"
            className="absolute top-0 bottom-0 mx-3 right-0 my-auto"
            objectFit="contain"
          />
        </div>
        <div className={cn(viaodaLibre.className, "text-2xl text-white mt-16")}>Hi, Andrio Sirait</div>
      </div>
    </div>
  );
};
