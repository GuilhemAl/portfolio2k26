"use client";

import Link from "next/link";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export default function ExperiencePage() {
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
          <div className="eyebrow">
            01 / {l(content.experience.apprenticeshipLabel)} · {l(content.experience.period)}
          </div>
          <h1>{l(content.pageTitles.experience)}</h1>
          <p className="lede">{l(content.experience.apprenticeshipNote)}</p>
        </div>
      </section>

      <section className="section" data-glyph="EXP">
        <div className="container">
          <div
            className="card reveal"
            onMouseMove={onCardMove}
            style={{ marginBottom: 24 }}
          >
            <div className="exp-period">
              {l(content.experience.company)} · {l(content.experience.orgUnit)}
            </div>
            <h3 className="exp-title" style={{ marginBottom: 8 }}>
              {l(content.experience.product)}
            </h3>
            <p className="exp-desc">{l(content.experience.productOneLiner)}</p>
            <h4
              style={{
                marginTop: 20,
                marginBottom: 10,
                fontSize: 13,
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {l(content.experience.productCapabilitiesTitle)}
            </h4>
            <ul className="exp-bullets">
              {list(content.experience.productCapabilities).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div
            className="rich-block reveal"
            style={{ marginBottom: 40, "--delay": "0.05s" } as React.CSSProperties}
          >
            <h3>
              <span className="icon">ENV</span>
              {l(content.experience.environmentTitle)}
            </h3>
            <ul>
              {list(content.experience.environmentBullets).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="skills-grid" style={{ marginBottom: 40 }}>
            {content.experience.roles.map((role, i) => (
              <div
                key={role.id}
                className="card reveal"
                onMouseMove={onCardMove}
                style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="exp-period">{l(role.period)}</div>
                <h3 className="exp-title">{l(role.title)}</h3>
                <p className="exp-desc">{l(role.summary)}</p>
                <h4
                  style={{
                    marginTop: 18,
                    marginBottom: 8,
                    fontSize: 13,
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {l(role.focusTitle)}
                </h4>
                <div className="exp-chips" style={{ marginTop: 0, marginBottom: 14 }}>
                  {list(role.focusAreas).map((f) => (
                    <span key={f} className="chip">
                      {f}
                    </span>
                  ))}
                </div>
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
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <h2
              className="reveal"
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#fff",
                marginBottom: 8,
              }}
            >
              {l(content.experience.contributionsTitle)}
            </h2>
            <p
              className="reveal"
              style={{
                color: "var(--muted)",
                maxWidth: 720,
                marginBottom: 24,
                fontSize: 15,
              }}
            >
              {l(content.experience.contributionsIntro)}
            </p>
          </div>

          <div className="skills-grid" style={{ marginBottom: 40 }}>
            {content.experience.contributions.map((c, i) => (
              <div
                key={c.title.en}
                className="card reveal"
                onMouseMove={onCardMove}
                style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <h3 className="exp-title" style={{ fontSize: 18 }}>
                  {l(c.title)}
                </h3>
                <p className="exp-desc">{l(c.context)}</p>
                <div
                  style={{
                    marginTop: 10,
                    marginBottom: 14,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  {l(c.myRole)}
                </div>
                <ul className="exp-bullets">
                  {list(c.approachBullets).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p
                  style={{
                    marginTop: 12,
                    color: "var(--muted)",
                    fontSize: 13,
                    fontStyle: "italic",
                  }}
                >
                  → {l(c.outcome)}
                </p>
                <div className="exp-chips">
                  {c.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="rich-block reveal"
            style={{ marginBottom: 40 }}
          >
            <h3>
              <span className="icon">ART</span>
              {l(content.experience.artifactsTitle)}
            </h3>
            <p>{l(content.experience.artifactsDisclaimer)}</p>
            <ul>
              {list(content.experience.artifacts).map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/skills" className="btn btn-primary">
              {l(content.labels.seeSkills)} <span>→</span>
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
