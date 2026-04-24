"use client";

import Link from "next/link";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function AboutPage() {
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
          <div className="eyebrow">04 / {t("PARCOURS", "JOURNEY")}</div>
          <h1>{l(content.about.aboutPageTitle)}</h1>
          <p className="lede">{l(content.about.aboutIntro)}</p>
        </div>
      </section>

      <section className="section" data-glyph="ABT">
        <div className="container">
          <div className="timeline" style={{ marginBottom: 40 }}>
            {content.about.aboutTimeline.map((item, i) => (
              <div
                key={item.yearTitle.en}
                className="timeline-item reveal"
                style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="timeline-node" />
                <div className="card" onMouseMove={onCardMove}>
                  <div className="exp-period">{l(item.yearTitle)}</div>
                  {list(item.paragraphs).map((p, idx) => (
                    <p
                      key={`${item.yearTitle.en}-${idx}`}
                      className="exp-desc"
                      style={{ marginBottom: idx === 0 ? 12 : 0 }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rich-block reveal" style={{ marginBottom: 40 }}>
            <h3>
              <span className="icon">NEXT</span>
              {l(content.about.aboutFutureTitle)}
            </h3>
            {list(content.about.aboutFutureParagraphs).map((p, i) => (
              <p key={`fut-${i}`}>{p}</p>
            ))}
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2
              className="reveal"
              style={{
                fontSize: "clamp(22px, 2.6vw, 28px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#fff",
                marginBottom: 20,
              }}
            >
              {l(content.about.aboutValuesTitle)}
            </h2>
            <div className="values-grid">
              {list(content.about.aboutValuesBullets).map((b, i) => (
                <div
                  key={b}
                  className="value reveal"
                  style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
                >
                  <div className="num">{String(i + 1).padStart(2, "0")}</div>
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/#contact" className="btn btn-primary">
              {l(content.ctas.secondary)} <span>→</span>
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
