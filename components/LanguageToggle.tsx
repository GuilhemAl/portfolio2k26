"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`rounded-full px-3 py-1 transition ${
          lang === "fr" ? "bg-slate-900 text-white" : "hover:bg-slate-100"
        }`}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 transition ${
          lang === "en" ? "bg-slate-900 text-white" : "hover:bg-slate-100"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
