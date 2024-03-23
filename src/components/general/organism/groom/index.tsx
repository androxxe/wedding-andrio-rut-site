import { bonheurRoyale, ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Groom = () => {
  return (
    <div className="h-full w-full bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col overflow-y-auto">
      <div className="text-right px-5 lg:pr-5 lg:pl-36 pt-12 lg:pt-20 space-y-2 z-10">
        <h2 className={cn(viaodaLibre.className, "text-gold-200 text-3xl")}>Andrio Pratama Sirait</h2>
        <h4 className={cn(ebGaramond.className, "text-white text-lg")}>
          Anak ke 3 dari Alm. Drs. Hasiholan Sirait & Elfrida Br Sinurat
        </h4>
        <div>
          <div className="bg-white px-2 py-1 rounded-lg inline">
            <Link
              href="https://www.instagram.com/andrio.sirait/"
              target="_blank"
              className={cn(ebGaramond.className, "text-maroon-700 text-lg")}
            >
              @andrio.sirait
            </Link>
          </div>
        </div>
      </div>
      <div className="w-64 lg:w-80 h-[42rem] absolute top-24 -left-12">
        <Image
          src="/images/theme/general/groom-andrio.png"
          fill
          objectFit="contain"
          alt="Groom Andrio Pratama Sirait"
        />
      </div>
    </div>
  );
};
