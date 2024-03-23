import { bonheurRoyale, ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Groom = () => {
  return (
    <div className="h-full w-full bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col items-end lg:justify-center overflow-y-auto">
      <div className="text-right space-y-2 z-10 w-full lg:w-[24rem] px-5 mt-24 lg:mt-0">
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
      <div className="w-32 lg:w-40 h-32 absolute top-[38rem] lg:top-[42rem] left-0 flex items-start justify-start z-10">
        <Image
          src="/images/theme/general/groom-flower-1.png"
          fill
          objectFit="contain"
          objectPosition="left"
          alt="Ornament"
        />
      </div>
      <div className="w-32 lg:w-40 h-32 absolute top-[38rem] lg:top-[42rem] left-12 lg:left-16 flex items-start justify-start">
        <Image
          src="/images/theme/general/groom-flower-2.png"
          fill
          objectFit="contain"
          objectPosition="left"
          alt="Ornament"
        />
      </div>
      <div className="w-32 h-48 absolute top-[14rem] left-0 flex items-start justify-start z-10">
        <Image
          src="/images/theme/general/groom-flower-3.png"
          fill
          objectFit="contain"
          objectPosition="left"
          alt="Ornament"
        />
      </div>
    </div>
  );
};
