"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { content } from "@/lib/content";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";
import { useScrollSpy } from "@/hooks/useScrollSpy";

type NavItem = { id: string; label: string; href: string };

export function Navbar() {
  const { lang, l } = useLocalizedContent();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(pathname === "/");
  const linksRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const items: NavItem[] = [
    {
      id: "hero",
      label: l(content.navigation.items.home),
      href: "/#hero",
    },
    {
      id: "experience",
      label: l(content.navigation.items.experience),
      href: "/#experience",
    },
    {
      id: "skills",
      label: l(content.navigation.items.skills),
      href: "/#skills",
    },
    {
      id: "academics",
      label: l(content.navigation.items.academics),
      href: "/#academics",
    },
    {
      id: "about",
      label: l(content.navigation.items.about),
      href: "/#about",
    },
    {
      id: "contact",
      label: l(content.navigation.items.contact),
      href: "/#contact",
    },
  ];

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Move the pill indicator
  useEffect(() => {
    if (!linksRef.current) return;
    const target = pathname === "/" ? active : "";
    const el = linksRef.current.querySelector<HTMLElement>(
      `[data-link="${target}"]`,
    );
    if (el) {
      const pr = linksRef.current.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setIndicator({
        left: r.left - pr.left,
        width: r.width,
        visible: true,
      });
    } else {
      setIndicator((x) => ({ ...x, visible: false }));
    }
  }, [active, lang, pathname]);

  const handleClick = (item: NavItem) => (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 72,
          behavior: "smooth",
        });
      }
    } else if (item.id === "hero") {
      e.preventDefault();
      router.push("/");
    }
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link
        href="/"
        className="nav-logo"
        aria-label={l(content.labels.goHome)}
      >
        <span className="nav-mono">GA</span>
        <span style={{ color: "var(--muted-2)" }}>GUILHEM.ALBUS</span>
      </Link>
      <div ref={linksRef} className="nav-links">
        <div
          className="nav-indicator"
          style={{
            left: indicator.left,
            width: indicator.width,
            opacity: indicator.visible ? 1 : 0,
          }}
        />
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            data-link={item.id}
            className={`nav-link ${
              pathname === "/" && active === item.id ? "active" : ""
            }`}
            onClick={handleClick(item)}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="nav-right">
        <LanguageToggle />
      </div>
    </nav>
  );
}
