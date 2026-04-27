"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HeroBackground } from "@/components/fx/HeroBackground";
import { content } from "@/lib/content";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

export function Hero() {
  const { lang, l, list } = useLocalizedContent();

  const displayName = l(content.identity.displayName);
  const [firstName, ...restName] = displayName.trim().split(/\s+/);
  const lastName = restName.join(" ");
  const roleHeadline = l(content.identity.roleHeadline);
  const roleSubheadline = l(content.identity.roleSubheadline);
  const goal = l(content.identity.goal);
  const roles = [roleHeadline];

  const [roleText, setRoleText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const nameRef = useRef<HTMLSpanElement>(null);

  // Typewriter
  useEffect(() => {
    const full = roles[roleIdx % roles.length];
    let i = 0;
    let hold = 0;
    let dir: 1 | -1 = 1;
    let on = true;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (!on) return;
      if (dir === 1) {
        i++;
        setRoleText(full.slice(0, i));
        if (i >= full.length) {
          dir = -1;
          hold = 40;
        }
      } else {
        if (hold > 0) {
          hold--;
        } else {
          i--;
          setRoleText(full.slice(0, i));
          if (i <= 0) {
            setRoleIdx((x) => x + 1);
            return;
          }
        }
      }
      timer = setTimeout(tick, dir === 1 ? 55 : 28);
    };
    timer = setTimeout(tick, 260);
    return () => {
      on = false;
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleIdx, lang]);

  // Glitch flicker
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    let alive = true;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const fire = () => {
      if (!alive) return;
      el.classList.add("go");
      setTimeout(() => el.classList.remove("go"), 240);
      timer = setTimeout(fire, 8000 + Math.random() * 10000);
    };
    timer = setTimeout(fire, 2400);
    return () => {
      alive = false;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const badges = list(content.quickFacts);
  const eyebrow = `${l(content.experience.apprenticeshipLabel)} · ${l(
    content.experience.period,
  )}`;

  const metaRows = [
    { key: "01", value: l(content.experience.company) },
    { key: "02", value: l(content.experience.product) },
    { key: "03", value: l(content.experience.orgUnit), accent: true },
  ];

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <HeroBackground intensity={10} />
      </div>
      <div className="hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="dot" />
            {eyebrow}
          </div>
          <h1 className="hero-name">
            <span className="line">
              <span
                ref={nameRef}
                className="glitch"
                data-text={firstName.toUpperCase()}
              >
                {firstName.toUpperCase()}
              </span>
            </span>
            {lastName ? (
              <span className="line accent">{lastName.toUpperCase()}</span>
            ) : null}
          </h1>
          <div className="hero-role">
            {roleText}
            <span className="cursor" />
          </div>
          <div className="hero-summary">
            <p>{roleSubheadline}</p>
            <p>{goal}</p>
          </div>
          <div className="hero-badges">
            {badges.map((b, i) => (
              <span
                key={b}
                className={`badge ${
                  i === 0 || i === badges.length - 1 ? "accent" : ""
                }`}
                style={{ animationDelay: `${0.4 + i * 0.15}s` }}
              >
                {b}
              </span>
            ))}
          </div>
          <div className="hero-cta">
            <Link
              href="/#contact"
              onClick={scrollTo("contact")}
              className="btn btn-primary"
            >
              {l(content.ctas.secondary)} <span>→</span>
            </Link>
            <Link
              href="/#experience"
              onClick={scrollTo("experience")}
              className="btn btn-ghost"
            >
              {l(content.ctas.primary)}
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="portrait">
            <div className="portrait-ring" />
            <div className="portrait-inner">
              <Image
                src="/photo.jpeg"
                alt="Portrait Guilhem Albus"
                fill
                priority
                sizes="(min-width: 900px) 340px, 260px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
          <div className="meta-card">
            {metaRows.map((row) => (
              <div className="row" key={row.key}>
                <span className="key">{row.key}</span>
                <span className={`val ${row.accent ? "accent" : ""}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
