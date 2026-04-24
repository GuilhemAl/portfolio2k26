"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const SECTION_IDS = [
  "hero",
  "experience",
  "skills",
  "academics",
  "about",
  "contact",
] as const;

export function ScrollRail() {
  const pathname = usePathname();
  const { t } = useI18n();
  const l = (v: LocalizedString) => t(v.fr, v.en);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    if (pathname !== "/") return;
    const on = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur: string = "hero";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [pathname]);

  if (pathname !== "/") return null;

  const items: { id: string; label: string }[] = [
    { id: "hero", label: l(content.navigation.items.home) },
    { id: "experience", label: l(content.navigation.items.experience) },
    { id: "skills", label: l(content.navigation.items.skills) },
    { id: "academics", label: l(content.navigation.items.academics) },
    { id: "about", label: l(content.navigation.items.about) },
    { id: "contact", label: l(content.navigation.items.contact) },
  ];

  return (
    <div className="scroll-rail">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-label={item.label}
          data-label={item.label}
          className={`rail-dot ${active === item.id ? "active" : ""}`}
          onClick={() => {
            const el = document.getElementById(item.id);
            if (el)
              window.scrollTo({
                top: el.offsetTop - 72,
                behavior: "smooth",
              });
          }}
        />
      ))}
    </div>
  );
}
