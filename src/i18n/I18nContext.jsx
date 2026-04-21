import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  translations,
} from "./translations";

const I18nContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: (key) => key,
});

const normalizeLanguage = (value) =>
  SUPPORTED_LANGUAGES.includes(value) ? value : DEFAULT_LANGUAGE;

const detectInitialLanguage = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const fromStorage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (fromStorage) {
    return normalizeLanguage(fromStorage);
  }

  const fromNavigator = window.navigator.language?.slice(0, 2)?.toLowerCase();
  return normalizeLanguage(fromNavigator);
};

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(detectInitialLanguage);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (nextLanguage) => {
    const normalized = normalizeLanguage(nextLanguage);
    setLanguageState(normalized);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalized);
      document.documentElement.lang = normalized;
    }
  };

  const t = (key, values = {}) => {
    const value =
      translations[language]?.[key] ??
      translations[DEFAULT_LANGUAGE]?.[key] ??
      key;

    return Object.entries(values).reduce(
      (acc, [token, replacement]) =>
        acc.replaceAll(`{{${token}}}`, String(replacement)),
      value
    );
  };

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language]
  );

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
