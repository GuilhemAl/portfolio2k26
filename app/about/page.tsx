"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="container-page section-pad">
        <ButtonLink href="/#about" variant="secondary">
          {l(content.labels.back)}
        </ButtonLink>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold tracking-[-0.02em] text-[var(--text)]">
            {l(content.about.aboutPageTitle)}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            {l(content.about.aboutIntro)}
          </p>
        </header>

        <section className="mt-8 space-y-6">
          {content.about.aboutTimeline.map((item) => (
            <Card key={item.yearTitle.en}>
              <h2 className="text-lg font-semibold text-[var(--text)]">
                {l(item.yearTitle)}
              </h2>
              <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                {list(item.paragraphs).map((paragraph, index) => (
                  <p key={`${item.yearTitle.en}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </Card>
          ))}
        </section>

        <Card className="mt-8">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            {l(content.about.aboutFutureTitle)}
          </h2>
          <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
            {list(content.about.aboutFutureParagraphs).map((paragraph, index) => (
              <p key={`future-${index}`}>{paragraph}</p>
            ))}
          </div>
        </Card>

        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            {l(content.about.aboutValuesTitle)}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {list(content.about.aboutValuesBullets).map((bullet) => (
              <li key={bullet}>- {bullet}</li>
            ))}
          </ul>
        </Card>

        <div className="mt-10">
          <ButtonLink href="/#about" variant="secondary">
            {l(content.labels.back)}
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
