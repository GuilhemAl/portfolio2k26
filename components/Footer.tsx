"use client";

import { content } from "@/lib/content";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

export function Footer() {
  const { l } = useLocalizedContent();

  return (
    <footer className="footer">
      <span>{l(content.identity.displayName)}</span>
      <span className="right">{l(content.navigation.brand)}</span>
    </footer>
  );
}
