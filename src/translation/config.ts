import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'tr',
  ns: ['comman'],
  defaultNS: 'comman',
  fallbackLng: 'tr',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
