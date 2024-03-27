import { EnglishGeneral } from "@/locales/en";
import { BahasaGeneral } from "@/locales/id";
import { BatakGeneral } from "@/locales/batak";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { localStorageService } from "@/lib/localStorage";

export type LanguageType = "en" | "id";

export const useI18n = () => {
  const lng: LanguageType = (localStorageService.getLanguage() as LanguageType) ?? "id";

  const changeLanguage = async (to: LanguageType) => {
    if (i18n.isInitialized) {
      i18n.changeLanguage(to);
      localStorageService.setLanguage({ key: "wedding_rio_rut_i18nextLng", value: to });
    }
  };

  const englishResources = {
    general: EnglishGeneral
  };

  const bahasaResources = {
    general: BahasaGeneral
  };

  const batakResources = {
    general: BatakGeneral
  };

  const resources = {
    en: englishResources,
    id: bahasaResources,
    batak: batakResources
  };

  const config = {
    resources,
    lng,
    ns: ["general"]
  };

  const init = () => {
    i18n.use(initReactI18next).init(config);
  };

  return { i18n, init, changeLanguage };
};
