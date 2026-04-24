"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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
  const [lang, setLangState] = useState<Lang>("fr");
  const initialized = useRef(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const stored = window.localStorage.getItem(storageKey);
      initialized.current = true;
      if (stored === "fr" || stored === "en") {
        setLangState(stored);
      }
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!initialized.current) return;
    window.localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((nextLang: Lang) => {
    initialized.current = true;
    setLangState(nextLang);
  }, []);

  const t = useCallback(
    (fr: string, en: string) => (lang === "fr" ? fr : en),
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within a LanguageProvider.");
  }

  return context;
}
