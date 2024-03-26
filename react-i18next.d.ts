import "react-i18next";

import { EnglishGeneral } from "@/locales/en";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: undefined;

    resources: {
      general: typeof EnglishGeneral;
    };
  }
}
