"use client";

import { usePathname } from "next/navigation";
import { content } from "@/lib/content";
import { HOME_SECTION_IDS } from "@/lib/sections";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function ScrollRail() {
  const pathname = usePathname();
  const { l } = useLocalizedContent();
  const active = useScrollSpy(pathname === "/");

  if (pathname !== "/") return null;

  const labels = {
    hero: l(content.navigation.items.home),
    experience: l(content.navigation.items.experience),
    skills: l(content.navigation.items.skills),
    academics: l(content.navigation.items.academics),
    about: l(content.navigation.items.about),
    contact: l(content.navigation.items.contact),
  };
  const items = HOME_SECTION_IDS.map((id) => ({ id, label: labels[id] }));

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
