"use client";

import { useEffect } from "react";
import { HOME_SECTION_IDS } from "@/lib/sections";

export function useScrollFX(intensity = 10) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (reduced) return;

    const k = Math.max(0.3, intensity / 10);

    let raf = 0;
    const sections = () =>
      HOME_SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (x): x is HTMLElement => !!x,
      );

    const tick = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;

      const hero = document.getElementById("hero");
      if (hero) {
        const p = Math.min(1, Math.max(0, y / vh));
        hero.style.setProperty("--par-bg", `${y * 0.55 * k}px`);
        hero.style.setProperty("--par-fg", `${y * 0.28 * k}px`);
        hero.style.setProperty("--par-opa", String(1 - p * 1.1));
        hero.style.setProperty("--name-y", `${-y * 0.15 * k}px`);
        hero.style.setProperty("--name-s", String(1 - p * 0.12));
      }

      sections().forEach((sec) => {
        const r = sec.getBoundingClientRect();
        const mid = r.top + r.height / 2 - vh / 2;
        const prog = Math.max(-1, Math.min(1, -mid / (vh * 0.8)));

        sec.style.setProperty(
          "--num-y",
          `${Math.max(-40, Math.min(40, prog * 60)) * k}px`,
        );
        sec.style.setProperty("--glyph-y", `${-prog * 260 * k}px`);
        sec.style.setProperty("--glyph-x", `${prog * 120 * k}px`);
        sec.style.setProperty(
          "--glyph-o",
          String(0.4 + (1 - Math.abs(prog)) * 0.55),
        );

        if (sec.id !== "hero") {
          const absP = Math.abs(prog);
          sec.style.setProperty("--sec-s", String(0.96 + (1 - absP) * 0.04));
          sec.style.setProperty("--sec-o", String(0.6 + (1 - absP) * 0.4));
        }
      });

      const dl = document.querySelector<HTMLElement>(".depth-layer");
      if (dl) {
        dl.style.setProperty("--o1-x", `${Math.sin(y * 0.001) * 80}px`);
        dl.style.setProperty("--o1-y", `${-y * 0.18 * k}px`);
        dl.style.setProperty("--o2-x", `${Math.cos(y * 0.0008) * 100}px`);
        dl.style.setProperty("--o2-y", `${-y * 0.32 * k}px`);
        dl.style.setProperty("--o3-x", `${Math.sin(y * 0.0012 + 2) * 60}px`);
        dl.style.setProperty("--o3-y", `${-y * 0.12 * k}px`);
      }
      const gf = document.querySelector<HTMLElement>(".grid-floor");
      if (gf) gf.style.setProperty("--grid-y", `${y * 0.5}px`);

    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [intensity]);
}
