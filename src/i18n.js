import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";

const resources = {
    en: {
        translation: translationEn,
    },
    ru: {
        translation: translationRu,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

if (!!localStorage.getItem('lang')) {
    let lang = localStorage.getItem('lang')
    i18n.changeLanguage(lang)
    document.querySelector('html').setAttribute('lang', lang)
}

export default i18n;

