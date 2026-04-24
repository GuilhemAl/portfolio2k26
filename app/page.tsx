"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { Hero } from "@/components/sections/Hero";
import { SectionHead } from "@/components/sections/SectionHead";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function Home() {
  const { t, lang } = useI18n();
  const l = (v: LocalizedString) => t(v.fr, v.en);
  const list = (v: LocalizedList) => (lang === "fr" ? v.fr : v.en);
  const deepDive = l(content.labels.deepDive);

  return (
    <main>
      <Hero />

      <ExperienceTeaser onCardMove={onCardMove} t={t} l={l} list={list} deepDive={deepDive} />

      <SkillsTeaser onCardMove={onCardMove} l={l} deepDive={deepDive} />

      <AcademicsTeaser t={t} l={l} deepDive={deepDive} />

      <AboutTeaser l={l} deepDive={deepDive} />

      <ContactBlock />
    </main>
  );
}

function ExperienceTeaser({
  onCardMove,
  t,
  l,
  list,
  deepDive,
}: {
  onCardMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  t: (fr: string, en: string) => string;
  l: (v: LocalizedString) => string;
  list: (v: LocalizedList) => string[];
  deepDive: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh * 0.6;
      const progress = Math.max(0, Math.min(1, (vh * 0.7 - r.top) / total));
      setFill(progress * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="section" data-glyph="EXP">
      <div className="container">
        <SectionHead num="01" title={l(content.navigation.items.experience)} />
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            maxWidth: 720,
            marginBottom: 8,
            fontSize: 15,
          }}
        >
          {l(content.experience.company)} · {l(content.experience.orgUnit)} ·{" "}
          {l(content.experience.period)}
        </p>
        <p
          className="reveal"
          style={{
            color: "var(--muted-2)",
            maxWidth: 720,
            marginBottom: 36,
            fontSize: 14,
            fontFamily: "var(--font-mono)",
          }}
        >
          {l(content.experience.productOneLiner)}
        </p>
        <div
          ref={ref}
          className="timeline"
          style={{ "--fill": `${fill}%` } as React.CSSProperties}
        >
          {content.experience.roles.map((role, i) => (
            <div
              key={role.id}
              className="timeline-item reveal"
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              <div className="timeline-node" />
              <div className="card" onMouseMove={onCardMove}>
                <div className="exp-period">{l(role.period)}</div>
                <h3 className="exp-title">{l(role.title)}</h3>
                <div className="exp-company">
                  {l(content.experience.company)} —{" "}
                  {l(content.experience.product)}
                </div>
                <p className="exp-desc">{l(role.summary)}</p>
                <ul className="exp-bullets">
                  {list(role.bullets).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="exp-chips">
                  {role.stack.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta" style={{ marginTop: 32 }}>
          <Link href="/experience" className="btn btn-primary">
            {deepDive} <span>→</span>
          </Link>
        </div>
        <span className="sr-only">{t("Expérience", "Experience")}</span>
      </div>
    </section>
  );
}

function SkillsTeaser({
  onCardMove,
  l,
  deepDive,
}: {
  onCardMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  l: (v: LocalizedString) => string;
  deepDive: string;
}) {
  return (
    <section id="skills" className="section" data-glyph="SKL">
      <div className="container">
        <SectionHead num="02" title={l(content.skills.title)} />
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            maxWidth: 720,
            marginBottom: 36,
            fontSize: 15,
          }}
        >
          {l(content.skills.intro)}
        </p>
        <div className="skills-grid">
          {content.skills.buckets.map((b, i) => (
            <div
              key={b.key}
              className="card skill-bucket reveal"
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
              onMouseMove={onCardMove}
            >
              <h3>
                <span className="icon">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l(b.title)}
              </h3>
              <div className="sub">{b.tags.slice(0, 3).join(" · ")}</div>
              <p className="summary">{l(b.summary)}</p>
              <div className="skill-chips">
                {b.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta" style={{ marginTop: 32 }}>
          <Link href="/skills" className="btn btn-primary">
            {deepDive} <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AcademicsTeaser({
  t,
  l,
  deepDive,
}: {
  t: (fr: string, en: string) => string;
  l: (v: LocalizedString) => string;
  deepDive: string;
}) {
  return (
    <section id="academics" className="section" data-glyph="EDU">
      <div className="container">
        <SectionHead num="03" title={l(content.academics.homeTitle)} />
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            maxWidth: 720,
            marginBottom: 36,
            fontSize: 15,
          }}
        >
          {l(content.academics.homeIntro)}
        </p>
        <div className="academic-list">
          {[...content.academics.items].reverse().map((item, i) => (
            <div
              key={item.key}
              className="academic-item reveal"
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              <div className="academic-year">{l(item.yearTitle)}</div>
              <div className="academic-main">
                <h4>{l(item.title)}</h4>
                <p>{l(item.context)}</p>
              </div>
              <span className="academic-badge">{l(item.status)}</span>
            </div>
          ))}
        </div>
        <div className="section-cta" style={{ marginTop: 32 }}>
          <Link href="/academics" className="btn btn-primary">
            {t(l(content.academics.homeCta), l(content.academics.homeCta))}{" "}
            <span>→</span>
          </Link>
        </div>
        <span className="sr-only">{deepDive}</span>
      </div>
    </section>
  );
}

function AboutTeaser({
  l,
  deepDive,
}: {
  l: (v: LocalizedString) => string;
  deepDive: string;
}) {
  const lede = l(content.about.aboutIntro);
  const future = l({
    fr: content.about.aboutFutureParagraphs.fr[0] ?? "",
    en: content.about.aboutFutureParagraphs.en[0] ?? "",
  });

  return (
    <section id="about" className="section" data-glyph="ABT">
      <div className="container">
        <SectionHead num="04" title={l(content.about.aboutPageTitle)} />
        <div className="about-text about-text-wide">
          <p className="lede reveal">{lede}</p>
          <p
            className="reveal"
            style={{ "--delay": "0.1s" } as React.CSSProperties}
          >
            {future}
          </p>
        </div>
        <div className="section-cta" style={{ marginTop: 32 }}>
          <Link href="/about" className="btn btn-primary">
            {deepDive} <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
