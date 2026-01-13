"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const { t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: l(content.navigation.items.home), href: "/#home" },
    { label: l(content.navigation.items.experience), href: "/#experience" },
    { label: l(content.navigation.items.skills), href: "/#skills" },
    { label: l(content.navigation.items.academics), href: "/#academics" },
    { label: l(content.navigation.items.about), href: "/#about" },
    { label: l(content.navigation.items.contact), href: "/#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)] backdrop-blur-[10px]">
      <nav className="container-page flex items-center justify-between gap-4 py-3 md:py-4">
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
        <div className="hidden flex-wrap items-center gap-3 text-sm text-[var(--muted)] md:flex">
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
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] shadow-[var(--shadow)] transition hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-[var(--text)]" />
              <span className="h-0.5 w-5 bg-[var(--text)]" />
              <span className="h-0.5 w-5 bg-[var(--text)]" />
            </span>
          </button>
        </div>
      </nav>
      <div
        id="mobile-nav"
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="container-page border-t border-[var(--border)] pb-4 pt-3">
          <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-xl px-3 py-2 transition hover:bg-white/70 hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
