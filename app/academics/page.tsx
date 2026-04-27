"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { setCardPointer } from "@/hooks/useCardPointer";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

export default function AcademicsPage() {
  const { l, list, t } = useLocalizedContent();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="back-link">
            <span>←</span> {l(content.labels.back)}
          </Link>
          <div className="eyebrow">03 / {t("TIMELINE", "TIMELINE")}</div>
          <h1>{l(content.academics.pageTitle)}</h1>
          <p className="lede">{l(content.academics.pageIntro)}</p>
        </div>
      </section>

      <section className="section" data-glyph="EDU">
        <div className="container">
          <div style={{ display: "grid", gap: 18, marginBottom: 40 }}>
            {content.academics.items.map((item, i) => (
              <div
                key={item.key}
                className="card reveal"
                onMouseMove={setCardPointer}
                style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    flexWrap: "wrap",
                    marginBottom: 8,
                  }}
                >
                  <div className="exp-period">{l(item.yearTitle)}</div>
                  <span className="academic-badge">{l(item.status)}</span>
                </div>
                <h3 className="exp-title">{l(item.title)}</h3>
                <p className="exp-desc">{l(item.context)}</p>

                <div
                  style={{
                    marginTop: 20,
                    display: "grid",
                    gap: 18,
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize: 12,
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent)",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        marginBottom: 10,
                      }}
                    >
                      {l(item.learnedTitle)}
                    </h4>
                    <ul className="exp-bullets" style={{ marginTop: 0 }}>
                      {list(item.learnedBullets).map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: 12,
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-2)",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        marginBottom: 10,
                      }}
                    >
                      {l(item.themesTitle)}
                    </h4>
                    <ul className="exp-bullets" style={{ marginTop: 0 }}>
                      {list(item.themesBullets).map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {item.apprenticeshipNote ? (
                  <div
                    style={{
                      marginTop: 18,
                      padding: "12px 14px",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      background: "rgba(var(--accent-rgb), 0.05)",
                      fontSize: 13,
                      color: "var(--muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {l(item.apprenticeshipNote)}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="rich-block reveal" style={{ marginBottom: 40 }}>
            <h3>
              <span className="icon">NEXT</span>
              {l(content.academics.futureTitle)}
            </h3>
            {list(content.academics.futureParagraphs).map((p, i) => (
              <p key={`fut-${i}`}>{p}</p>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/about" className="btn btn-primary">
              {l(content.pageTitles.about)} <span>→</span>
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
