"use client";

import { useEffect, useRef } from "react";

type BGStyle = "matrix" | "neural" | "dot" | "waves" | "mesh";

type Props = {
  style?: BGStyle;
  intensity?: number;
};

type MatrixCol = { y: number; speed: number; chars: string[] };

export function HeroBackground({ style = "matrix", intensity = 10 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)").matches;

    const accent = () => {
      const cs = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-rgb")
        .trim();
      return cs || "34, 211, 238";
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    window.addEventListener("mousemove", onMove);

    const nodeCount = Math.max(12, Math.round((intensity / 10) * 40));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1 + Math.random() * 1.8,
    }));

    let matrixCols: MatrixCol[] | null = null;
    const CW = 14;

    let t = 0;
    const draw = () => {
      t += reduced ? 0 : 0.01;
      ctx.clearRect(0, 0, w, h);
      const a = accent();

      if (style === "dot") {
        const gap = 36;
        for (let x = gap / 2; x < w; x += gap) {
          for (let y = gap / 2; y < h; y += gap) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const d = Math.hypot(dx, dy);
            const pulse = 0.3 + 0.3 * Math.sin(t * 2 + (x + y) * 0.01);
            const boost = Math.max(0, 1 - d / 160);
            const alpha = 0.12 + pulse * 0.25 + boost * 0.5;
            ctx.fillStyle = `rgba(${a}, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.1 + boost * 1.6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (style === "waves") {
        const lines = 8;
        for (let i = 0; i < lines; i++) {
          ctx.beginPath();
          const amp = 16 + i * 6;
          const yBase = h * 0.2 + i * h * 0.08;
          const speed = 0.4 + i * 0.08;
          for (let x = 0; x <= w; x += 8) {
            const y =
              yBase +
              Math.sin(x * 0.008 + t * speed + i) * amp +
              Math.cos(x * 0.004 + t * speed * 0.6) * amp * 0.4;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(${a}, ${0.08 + i * 0.02})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      } else if (style === "matrix") {
        if (!matrixCols) {
          const cols = Math.ceil(w / CW);
          matrixCols = Array.from({ length: cols }, () => ({
            y: -Math.random() * h,
            speed: 0.5 + Math.random() * 1.6,
            chars: Array.from({ length: 18 }, () =>
              Math.random() > 0.5 ? "1" : "0",
            ),
          }));
        }
        ctx.font = `${mobile ? 12 : 11}px JetBrains Mono, monospace`;
        ctx.fillStyle = `rgba(5,10,20,${reduced ? 1 : mobile ? 0.36 : 0.12})`;
        ctx.fillRect(0, 0, w, h);
        matrixCols.forEach((c, i) => {
          for (let k = 0; k < c.chars.length; k++) {
            const y = c.y - k * 14;
            if (y < 0 || y > h) continue;
            const alpha = k === 0 ? 0.9 : Math.max(0, 0.6 - k * 0.04);
            ctx.fillStyle = `rgba(${a}, ${alpha})`;
            if (Math.random() < 0.02)
              c.chars[k] = Math.random() > 0.5 ? "1" : "0";
            ctx.fillText(c.chars[k], i * CW, y);
          }
          c.y += c.speed * (reduced ? 0 : 1);
          if (c.y > h + 200) c.y = -Math.random() * 200;
        });
      } else if (style === "mesh") {
        const grd = ctx.createRadialGradient(
          w * 0.3,
          h * 0.4,
          0,
          w * 0.3,
          h * 0.4,
          Math.max(w, h) * 0.7,
        );
        grd.addColorStop(0, `rgba(${a}, ${0.18 + Math.sin(t) * 0.04})`);
        grd.addColorStop(1, "rgba(5,10,20,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
        const grd2 = ctx.createRadialGradient(
          w * 0.75,
          h * 0.7,
          0,
          w * 0.75,
          h * 0.7,
          Math.max(w, h) * 0.55,
        );
        grd2.addColorStop(0, `rgba(${a}, ${0.1 + Math.cos(t * 0.8) * 0.04})`);
        grd2.addColorStop(1, "rgba(5,10,20,0)");
        ctx.fillStyle = grd2;
        ctx.fillRect(0, 0, w, h);
      } else {
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          n.x = Math.max(0, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));
        });
        const maxDist = 180;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a1 = nodes[i];
            const b = nodes[j];
            const dx = a1.x - b.x;
            const dy = a1.y - b.y;
            const d = Math.hypot(dx, dy);
            if (d < maxDist) {
              const alpha = (1 - d / maxDist) * 0.35;
              ctx.strokeStyle = `rgba(${a}, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(a1.x, a1.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
          const mdx = nodes[i].x - mouse.x;
          const mdy = nodes[i].y - mouse.y;
          const md = Math.hypot(mdx, mdy);
          if (md < 220) {
            ctx.strokeStyle = `rgba(${a}, ${(1 - md / 220) * 0.5})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        nodes.forEach((n) => {
          ctx.fillStyle = `rgba(${a}, 0.85)`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(${a}, 0.8)`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, [style, intensity]);

  return <canvas ref={ref} />;
}
