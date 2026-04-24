"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

export function RevealObserver() {
  const pathname = usePathname();
  const { lang } = useI18n();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal, .section").forEach((el) => {
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname, lang]);

  return null;
}
