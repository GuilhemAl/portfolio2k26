"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export default function SkillsPage() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="container-page section-pad">
        <ButtonLink href="/#skills" variant="secondary">
          {l(content.labels.back)}
        </ButtonLink>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold tracking-[-0.02em] text-[var(--text)]">
            {l(content.skills.title)}
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            {l(content.skills.intro)}
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.skills.buckets.map((bucket) => (
            <Card key={bucket.key}>
              <h2 className="text-lg font-semibold text-[var(--text)]">
                {l(bucket.title)}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {list(bucket.bullets).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {bucket.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
