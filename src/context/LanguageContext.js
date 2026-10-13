"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
  availableLanguages: [],
});

export const AVAILABLE_LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "id", label: "Indonesia", short: "ID" },
  { code: "ja", label: "日本語", short: "JA" },
];

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Check user preference stored in localStorage
    const saved = localStorage.getItem("jarigasme_lang");
    if (saved && translations[saved]) {
      setLocaleState(saved);
      setMounted(true);
      return;
    }

    // 2. Default: detect browser/system language
    if (typeof navigator !== "undefined" && navigator.language) {
      const systemLang = navigator.language.toLowerCase();
      if (systemLang.startsWith("id")) {
        setLocaleState("id");
      } else if (systemLang.startsWith("ja")) {
        setLocaleState("ja");
      } else {
        setLocaleState("en");
      }
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale) => {
    if (translations[newLocale]) {
      setLocaleState(newLocale);
      try {
        localStorage.setItem("jarigasme_lang", newLocale);
      } catch (e) {
        console.error("Failed to save language preference", e);
      }
    }
  };

  const t = translations[locale] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        availableLanguages: AVAILABLE_LANGUAGES,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
