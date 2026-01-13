"use client";

import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export default function AcademicsPage() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="container-page section-pad">
        <ButtonLink href="/#academics" variant="secondary">
          {l(content.labels.back)}
        </ButtonLink>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold tracking-[-0.02em] text-[var(--text)]">
            {l(content.academics.pageTitle)}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            {l(content.academics.pageIntro)}
          </p>
        </header>

        <section className="mt-8 grid gap-6">
          {content.academics.items.map((item) => (
            <Card key={item.key}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                {l(item.yearTitle)}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-[var(--text)]">
                  {l(item.title)}
                </h2>
                <Badge>{l(item.status)}</Badge>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">
                {l(item.context)}
              </p>

              <h3 className="mt-4 text-sm font-semibold text-[var(--text)]">
                {l(item.learnedTitle)}
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                {list(item.learnedBullets).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>

              <h3 className="mt-4 text-sm font-semibold text-[var(--text)]">
                {l(item.themesTitle)}
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                {list(item.themesBullets).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>

              {item.apprenticeshipNote ? (
                <p className="mt-4 rounded-xl border border-[var(--border)] bg-white/60 px-4 py-3 text-sm text-[var(--muted)]">
                  {l(item.apprenticeshipNote)}
                </p>
              ) : null}
            </Card>
          ))}
        </section>

        <Card className="mt-8">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            {l(content.academics.futureTitle)}
          </h2>
          <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
            {list(content.academics.futureParagraphs).map((paragraph, index) => (
              <p key={`future-${index}`}>{paragraph}</p>
            ))}
          </div>
        </Card>

        <div className="mt-10">
          <ButtonLink href="/" variant="secondary">
            {l(content.labels.back)}
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
