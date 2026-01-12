"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Lang = "fr" | "en";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (fr: string, en: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const storageKey = "lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "fr" || stored === "en") {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, lang);
  }, [lang]);

  const t = useCallback(
    (fr: string, en: string) => (lang === "fr" ? fr : en),
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within a LanguageProvider.");
  }

  return context;
}
