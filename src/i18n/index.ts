import i18n from 'i18next';
import i18next, { ModuleType } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { getStorage } from '../utils/local-storage';

const LanguageDetector = {
  type: 'languageDetector' as ModuleType,
  detect: () => {
    return getStorage('language') ?? navigator.language;
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
