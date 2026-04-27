"use client";

import { useEffect, useState } from "react";
import { HOME_SECTION_IDS, type HomeSectionId } from "@/lib/sections";

export function useScrollSpy(enabled: boolean) {
  const [active, setActive] = useState<HomeSectionId | "">("hero");

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current: HomeSectionId = "hero";

      for (const id of HOME_SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [enabled]);

  return enabled ? active : "";
}
