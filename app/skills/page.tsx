"use client";

import Link from "next/link";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function SkillsPage() {
  const { lang, t } = useI18n();
  const l = (v: LocalizedString) => t(v.fr, v.en);
  const list = (v: LocalizedList) => (lang === "fr" ? v.fr : v.en);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="back-link">
            <span>←</span> {l(content.labels.back)}
          </Link>
          <div className="eyebrow">02 / {t("STACK", "STACK")}</div>
          <h1>{l(content.skills.title)}</h1>
          <p className="lede">{l(content.skills.intro)}</p>
        </div>
      </section>

      <section className="section" data-glyph="SKL">
        <div className="container">
          <div className="skills-grid">
            {content.skills.buckets.map((bucket, i) => (
              <div
                key={bucket.key}
                className="card skill-bucket reveal"
                onMouseMove={onCardMove}
                style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <h3>
                  <span className="icon">{String(i + 1).padStart(2, "0")}</span>
                  {l(bucket.title)}
                </h3>
                <div className="sub">{bucket.tags.slice(0, 3).join(" · ")}</div>
                <p className="summary">{l(bucket.summary)}</p>
                <ul className="exp-bullets" style={{ marginTop: 12 }}>
                  {list(bucket.bullets).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="skill-chips">
                  {bucket.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/experience" className="btn btn-primary">
              {l(content.ctas.primary)} <span>→</span>
            </Link>
            <Link href="/" className="btn btn-ghost">
              {l(content.labels.back)}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
