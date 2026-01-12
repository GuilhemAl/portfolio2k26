"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const { t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const navItems = [
    { label: l(content.navigation.items.home), href: "/#home" },
    { label: l(content.navigation.items.experience), href: "/#experience" },
    { label: l(content.navigation.items.skills), href: "/#skills" },
    { label: l(content.navigation.items.about), href: "/#about" },
    { label: l(content.navigation.items.contact), href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
          {l(content.navigation.brand)}
        </span>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
