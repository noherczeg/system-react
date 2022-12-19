import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'dashboard.welcome': 'Welcome to the Dashboard!',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { i18n };
