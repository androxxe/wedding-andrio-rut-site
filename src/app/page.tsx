"use client";

import { Label } from "@/components/tech/atoms/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/tech/atoms/select";
import { LanguageType, useI18n } from "@/hooks/useI18n";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation(["general"]);
  const { changeLanguage } = useI18n();

  return (
    <main className="flex items-center justify-center flex-col h-screen ">
      <h4 className="text-xl font-normal mb-5">{t("general:whichSide")}</h4>
      <div className="flex items-center flex-col lg:flex-row gap-4">
        <Link
          href="/general"
          className="flex items-center justify-center border rounded border-gray-500 bg-white w-52 h-52"
        >
          <span className="text-base font-bold">{t("general:normalPerson")}</span>
        </Link>
        <Link
          href="/tech"
          className="flex items-center justify-center border rounded border-gray-500 bg-white w-52 h-52"
        >
          <span className="text-base font-bold">{t("general:itGeek")}</span>
        </Link>
      </div>
      <div className="mt-12 w-52">
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
