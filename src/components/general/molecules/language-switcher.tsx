"use client";

import { GrLanguage } from "react-icons/gr";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../atoms/dropdown-menu";
import { LanguageType, useI18n } from "@/hooks/useI18n";

export const LanguageSwitcher = () => {
  const { changeLanguage: changeLanguageI18n } = useI18n();

  const changeLanguage = (lng: string) => {
    changeLanguageI18n(lng as LanguageType);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="absolute right-3 bottom-16 z-50 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <GrLanguage className="text-white" size={24} />
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left">
          <DropdownMenuLabel>Pilih Bahasa</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => changeLanguage("id")} className="cursor-pointer">
            Indonesia
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage("en")} className="cursor-pointer">
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
