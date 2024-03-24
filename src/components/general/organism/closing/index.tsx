import { bonheurRoyale, ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";

export const Closing = () => {
  return (
    <div className="w-full h-full p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col items-center justify-between">
      <div className="space-y-3 flex items-center justify-center flex-col flex-1">
        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>
          Merupakan suatu kebahagiaan & kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan
          doa restu kepada kami
        </p>
        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>Hormat kami yang berbahagia</p>
        <h4 className={cn(bonheurRoyale.className, "text-5xl text-gold-200 text-center pb-12")}>Andrio & Rut</h4>

        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>
          Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan. 3:15
          Hendaklah damai sejahtera Kristus memerintah dalam hatimu, karena untuk itulah kamu telah dipanggil menjadi
          satu tubuh. Dan bersyukurlah.
        </p>
        <p className={cn("text-sm text-white text-center italic")}>Kolose 3:14-15</p>
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
