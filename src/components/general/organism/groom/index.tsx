import { ebGaramond } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Groom = () => {
  return (
    <div className="h-full w-full bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col">
      <div className="w-full h-14 relative">
        <Image
          src="/images/theme/general/home-top-ulos.jpg"
          alt="Pola Ulos"
          fill
          objectFit="cover"
          className="mt-[-20px]"
        />
      </div>
    </div>
  );
};
