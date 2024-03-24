import { ebGaramond, viaodaLibre } from "@/app/general/layout";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Gift = () => {
  return (
    <div className="w-full h-full p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col items-center justify-center">
      <h2 className={cn(viaodaLibre.className, "text-4xl text-center mb-4 text-gold-200 shadow-sm")}>Wedding Gift</h2>
      <div className="mb-6">
        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>
          Your presence at our wedding was truly an honor. Should you wish to share your blessings digitally, our
          account number is available for your convenience. Thank you sincerely!
        </p>
      </div>
      <div className={cn(ebGaramond.className, "text-lg text-white space-y-5")}>
        <div className="bg-gold-200 duration-100 hover:scale-105 px-10 py-4 text-maroon-700 rounded-md shadow flex flex-row items-center space-x-4">
          <Image
            src="/images/theme/general/bank_mandiri.webp"
            width={50}
            height={50}
            objectFit="contain"
            alt="Bank Mandiri"
          />
          <div>
            <span className="block text-xl font-medium">1080014605969</span>
            <span className="block font-normal">Andrio Pratama Sirait</span>
            <span className="block font-normal">Bank Mandiri</span>
          </div>
        </div>
        <div className="bg-gold-200 duration-100 hover:scale-105 px-10 py-4 text-maroon-700 rounded-md shadow flex flex-row items-center space-x-4">
          <Image src="/images/theme/general/bca.png" width={50} height={50} objectFit="contain" alt="BCA" />
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
