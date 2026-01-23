import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import pl from './locales/pl.json';

const resources = {
  pl: {
    translation: pl
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl', // default language
    fallbackLng: 'pl',

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;
