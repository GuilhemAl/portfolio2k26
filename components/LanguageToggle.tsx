"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)] shadow-[var(--shadow)]">
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`rounded-full px-3 py-1 transition ${
          lang === "fr"
            ? "bg-[var(--text)] text-white"
            : "hover:bg-[rgba(11,18,32,0.05)]"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]`}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 transition ${
          lang === "en"
            ? "bg-[var(--text)] text-white"
            : "hover:bg-[rgba(11,18,32,0.05)]"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
