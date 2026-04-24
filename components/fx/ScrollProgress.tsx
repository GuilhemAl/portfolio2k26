"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return <div className="scroll-progress" style={{ width: `${w}%` }} />;
}
