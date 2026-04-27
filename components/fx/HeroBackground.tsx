"use client";

import { useEffect, useRef } from "react";

type Props = {
  intensity?: number;
};

type MatrixCol = { y: number; speed: number; chars: string[] };

export function HeroBackground({ intensity = 10 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let matrixCols: MatrixCol[] | null = null;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    const columnWidth = Math.max(10, Math.round(14 * (10 / intensity)));

    const accent = () => {
      const cs = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-rgb")
        .trim();
      return cs || "34, 211, 238";
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      matrixCols = null;
    };

    const getColumns = () => {
      if (!matrixCols) {
        const cols = Math.ceil(w / columnWidth);
        matrixCols = Array.from({ length: cols }, () => ({
          y: -Math.random() * h,
          speed: 0.5 + Math.random() * 1.6,
          chars: Array.from({ length: 18 }, () =>
            Math.random() > 0.5 ? "1" : "0",
          ),
        }));
      }
      return matrixCols;
    };

    const draw = () => {
      const a = accent();
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${mobile ? 12 : 11}px JetBrains Mono, monospace`;
      ctx.fillStyle = `rgba(5,10,20,${reduced ? 1 : mobile ? 0.36 : 0.12})`;
      ctx.fillRect(0, 0, w, h);

      getColumns().forEach((col, i) => {
        for (let k = 0; k < col.chars.length; k++) {
          const y = col.y - k * 14;
          if (y < 0 || y > h) continue;
          const alpha = k === 0 ? 0.9 : Math.max(0, 0.6 - k * 0.04);
          ctx.fillStyle = `rgba(${a}, ${alpha})`;
          if (!reduced && Math.random() < 0.02) {
            col.chars[k] = Math.random() > 0.5 ? "1" : "0";
          }
          ctx.fillText(col.chars[k], i * columnWidth, y);
        }

        if (!reduced) {
          col.y += col.speed;
          if (col.y > h + 200) col.y = -Math.random() * 200;
        }
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [intensity]);

  return <canvas ref={ref} />;
}
