"use client";

import { useCallback } from "react";
import type { LocalizedList, LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function useLocalizedContent() {
  const { lang, setLang, t } = useI18n();

  const l = useCallback((value: LocalizedString) => t(value.fr, value.en), [t]);
  const list = useCallback(
    (value: LocalizedList) => (lang === "fr" ? value.fr : value.en),
    [lang],
  );

  return { lang, setLang, t, l, list };
}
