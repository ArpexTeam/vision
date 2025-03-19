import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locale/en.json';
import itTranslation from '../locale/it.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'it', // Definir linguagem inicial
        fallbackLng: 'en', // Definir um idioma de fallback
        resources: {
            en: {
                translation: enTranslation,
            },
            it: {
                translation: itTranslation,
            },
            
        },
        interpolation:{
            escapeValue: false // Evitar a necessidade de escapar essa sequência em traduções
        },
    });
export default i18n;



