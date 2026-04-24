"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      aria-label="Toggle language"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
