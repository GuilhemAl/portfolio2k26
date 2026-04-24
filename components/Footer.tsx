"use client";

import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const l = (v: LocalizedString) => t(v.fr, v.en);

  return (
    <footer className="footer">
      <span>{l(content.identity.displayName)}</span>
      <span className="right">{l(content.navigation.brand)}</span>
    </footer>
  );
}
