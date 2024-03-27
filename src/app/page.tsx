"use client";

import { Button } from "@/components/tech/atoms/button";
import { Label } from "@/components/tech/atoms/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/tech/atoms/select";
import { LanguageType, useI18n } from "@/hooks/useI18n";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

type MenuType = "general" | "tech";

export default function Home() {
  const { t, i18n } = useTranslation(["general"]);
  const { changeLanguage } = useI18n();
  const router = useRouter();

  const [selected, setSelected] = useState<MenuType | undefined>(undefined);

  const handleContinue = useCallback(() => {
    if (!selected) return;
    router.push(`/${selected}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <main className="flex items-center justify-center flex-col h-screen bg-neutral-100 dark:bg-red-900">
      <div className="px-5 text-center mb-10">
        <h4 className="text-lg font-medium text-gray-700 mb-3">{t("general:whichSide")}</h4>
        <p className="text-sm text-gray-600">{t("general:whichSideDescription")}</p>
      </div>
      <div className="flex items-center flex-row space-x-4 mb-4 w-72">
        <button
          onClick={() => setSelected("general")}
          className={cn(
            "flex-1 flex items-center justify-center flex-col hover:bg-neutral-300 h-36 border-2 border-neutral-300 rounded-md",
            selected === "general" ? "border-2 border-neutral-600" : ""
          )}
        >
          <Image src="/images/people.png" width={42} height={42} className="object-contain mb-2" alt="Normal person" />
          <span className={cn("text-sm text-neutral-700", selected === "general" ? "font-medium" : "")}>
            {t("general:normalPerson")}
          </span>
        </button>
        <button
          onClick={() => setSelected("tech")}
          className={cn(
            "flex-1 flex items-center justify-center flex-col hover:bg-neutral-300 h-36 border-2 border-neutral-300 rounded-md",
            selected === "tech" ? "border-2 border-neutral-600" : ""
          )}
        >
          <Image src="/images/nerd.png" width={42} height={42} className="object-contain mb-2" alt="Nerd" />
          <span className={cn("text-sm text-neutral-700", selected === "tech" ? "font-medium" : "")}>
            {t("general:itGeek")}
          </span>
        </button>
      </div>
      <div className="w-72">
        <Button onClick={handleContinue} className="w-full">
          {t("general:continue")}
        </Button>
      </div>
      <div className="mt-24 w-72">
        <Label>{t("general:chooseLanguage")}</Label>
        <Select onValueChange={(data) => changeLanguage(data as LanguageType)} value={i18n.language}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t("general:chooseLanguage")} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="id">Indonesia</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </main>
  );
}
