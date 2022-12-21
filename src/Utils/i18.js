import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Full Name": "Full Name",
          "Email Address": "Email Address",
          "Password": "Password",
          "Address": "Address",
          "Upload Photo": "Upload Photo",
          "Roles": "Roles",
        }
      },
      np: {
        translation: {
          "Full Name": "पुरा नाम",
          "Email Address": "इ - मेल ठेगाना",
          "Password": "पासवर्ड",
          "Address": "ठेगाना",
          "Upload Photo":"फोटो अपलोड गर्नुहोस्",
          "Roles":"भूमिकाहरू",
        }
      },
    },

    lng: localStorage.getItem("lng")||"en", // if you're using a language detector, do not define the lng option
    // fallbackLng: "en",
   

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


