"use client";

import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function CVFloat() {
  const { t } = useI18n();
  const l = (v: LocalizedString) => t(v.fr, v.en);
  const label = t("CV", "CV");
  return (
    <a
      href="/CV%20Guilhem%20ALBUS%20-%20Chef%20de%20Projet%20IT.pdf"
      download="Guilhem-Albus-CV.pdf"
      aria-label={label}
      className="cv-float"
    >
      <span className="arr">↓</span>
      <span>{label}</span>
      <span className="sr-only">{l(content.labels.goHome)}</span>
    </a>
  );
}
