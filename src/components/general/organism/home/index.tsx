import { bonheurRoyale, ebGaramond } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Home = () => {
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
      <div className="flex items-center justify-center flex-col p-5 lg:py-10 flex-1">
        <div className="bg-gold-200 p-8 rounded-lg h-full flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-12">
            <div className="relative w-64 h-96 lg:w-80 lg:h-[30rem] p-5 rounded-t-full border border-maroon-600 shadow-sm">
              <Image
                fill
                objectFit="cover"
                src="/images/gallery/DSC04814.jpg"
                alt="Foto Andrio & Rut"
                className="rounded-t-full p-3 shadow-sm"
              />
            </div>
          </div>
          <p className={cn(ebGaramond.className, "text-maroon-700 text-base font-medium text-center")}>
            Hendaklah kamu sehati sepikir, dalam satu kasih, satu jiwa, satu tujuan. Demikianlah mereka bukan lagi dua
            melainkan satu. Karena itu apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.
            <br />
            <br />
            <span className="font-normal italic">Filipi 2: 26; Matius 19:6</span>
          </p>
        </div>
      </div>
    </div>
  );
};
