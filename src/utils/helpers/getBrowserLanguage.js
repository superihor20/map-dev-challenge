import {
  availableBrowserLanguages,
  normalizedLanguage,
} from '../constants/languages';

export const getBrowserLanguage = () => {
  const browserLanguage = navigator.language;
  const language =
    availableBrowserLanguages.find((language) =>
      browserLanguage.includes(language)
    ) || 'en';

  return normalizedLanguage[language];
};
