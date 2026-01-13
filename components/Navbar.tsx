"use client";

import Image from "next/image";
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
    { label: l(content.navigation.items.academics), href: "/#academics" },
    { label: l(content.navigation.items.about), href: "/#about" },
    { label: l(content.navigation.items.contact), href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)] backdrop-blur-[10px]">
      <nav className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
        <Link
          href="/#home"
          aria-label={l(content.labels.goHome)}
          className="flex items-center"
        >
          <Image
            src="/monogram.png"
            alt="Monogram Guilhem Albus"
            width={260}
            height={40}
            priority
            className="h-8 w-auto scale-[1.9] origin-left drop-shadow-[0_6px_18px_rgba(11,18,32,0.12)]"
          />
          <span className="sr-only">{l(content.navigation.brand)}</span>
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3 py-1 transition hover:text-[var(--text)]"
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-[var(--accent)] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
