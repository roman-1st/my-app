import translations from "../data/translations.json";

export const getTranslatedText = (lang: string, key: string): string => {
    return translations[lang][key] || '';
};