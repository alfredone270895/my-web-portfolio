import i18n from 'i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      tecnologyUsed: 'Technologies',
      contact: 'Contact',
      graduation: 'Graduation',
      jobExperience: 'Job experience',
    },
  },
  it: {
    translation: {
      contact: 'Contatti',
      graduation: 'Istruzione',
      jobExperience: 'Esperienze lavorative',
      tecnologyUsed: 'Tecnologie',
      Language: 'Lingua',
    },
  },
};

// TODO Use application backend api
i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') ?? 'it',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
