import { bonheurRoyale } from "@/app/general/layout";
import { cn } from "@/lib/utils";

export const Wishes = () => {
  return (
    <div className="w-full h-full flex flex-col p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem]">
      <h2 className={cn(bonheurRoyale.className, "text-5xl text-center text-white mb-8")}>Wishes</h2>
    </div>
  );
};
