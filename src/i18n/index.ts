import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en.json';
import de from './locales/de.json';
import pl from './locales/pl.json';

const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  },
  pl: {
    translation: pl
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pl', // default language changed to Polish
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false
    },
    
    react: {
      useSuspense: false
    }
  });

export default i18n;
