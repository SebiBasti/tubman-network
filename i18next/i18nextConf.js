import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationDE from "../public/assets/locales/de/translation.json";
import translationEN from "../public/assets/locales/en/translation.json";
import translationUA from "../public/assets/locales/ua/translation.json";
import translationRU from "../public/assets/locales/ru/translation.json";
import translationSW from "../public/assets/locales/sw/translation.json";
import translationFR from "../public/assets/locales/fr/translation.json";
import translationPT from "../public/assets/locales/pt/translation.json";

const fallbackLng = ['en'];
const availableLanguages = ['de', 'en', 'ua', 'ru', 'sw', 'fr', 'pt'];

const resources = {
  de: {
    translation: translationDE
  },
  en: {
    translation: translationEN
  },
  ua: {
    translation: translationUA
  },
  ru: {
    translation: translationRU
  },
  sw: {
    translation: translationSW
  },
  fr: {
    translation: translationFR
  },
  pt: {
    translation: translationPT
  },
};

i18n
  .use(Backend) // load translations using http (default public/assets/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    resources,
    fallbackLng, // fallback language is english.

    detection: {
      checkWhitelist: true, // options for language detection
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;

// https://betterprogramming.pub/add-multi-language-support-in-react-js-a771c9ab31c3