"use client";

import { content } from "@/lib/content";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

export function CVFloat() {
  const { l } = useLocalizedContent();
  const label = "CV";
  return (
    <a
      href="/Guilhem%20Albus%20%E2%80%94%20CV.pdf"
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
