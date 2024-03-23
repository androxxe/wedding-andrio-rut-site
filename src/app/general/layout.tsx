import { Viaoda_Libre, EB_Garamond, Bonheur_Royale } from "next/font/google";

export const viaodaLibre = Viaoda_Libre({ subsets: ["latin"], weight: "400" });
export const ebGaramond = EB_Garamond({ subsets: ["latin"] });
export const bonheurRoyale = Bonheur_Royale({ subsets: ["latin"], weight: "400" });

export default async function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <div className="flex-1 h-full hidden lg:flex"></div>
      <div className="max-w-xl flex-1 border relative h-screen overflow-y-hidden">{children}</div>
    </div>
  );
}
