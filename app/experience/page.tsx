"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export default function ExperiencePage() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="container-page section-pad">
        <nav className="text-sm font-semibold text-[var(--muted)]">
          <Link href="/" className="transition hover:text-[var(--text)]">
            {l(content.navigation.items.home)}
          </Link>
          <span className="px-2 text-[var(--muted)]">/</span>
          <span className="text-[var(--text)]">
            {l(content.pageTitles.experience)}
          </span>
        </nav>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
              {l(content.pageTitles.experience)}
            </h1>
            <Badge variant="accent">{l(content.experience.apprenticeshipLabel)}</Badge>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
            {l(content.experience.apprenticeshipNote)}
          </p>
        </header>

        <Card className="mt-8">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            {l(content.experience.company)}
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {l(content.experience.orgUnit)} / {l(content.experience.product)} /{" "}
            {l(content.experience.period)}
          </p>
        </Card>

        <Card className="mt-6">
          <p className="text-sm font-semibold text-[var(--text)]">
            {l(content.experience.productLabel)}
          </p>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
            {l(content.experience.productOneLiner)}
          </p>
          <h2 className="mt-4 text-sm font-semibold text-[var(--text)]">
            {l(content.experience.productCapabilitiesTitle)}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {list(content.experience.productCapabilities).map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>

        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            {l(content.experience.environmentTitle)}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {list(content.experience.environmentBullets).map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {content.experience.roles.map((role) => (
            <Card key={role.id}>
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-lg font-semibold text-[var(--text)]">
                  {l(role.title)}
                </h2>
                <span className="text-xs text-[var(--muted)]">
                  {l(role.period)}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[var(--text)]">
                {l(role.focusTitle)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {list(role.focusAreas).map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {list(role.bullets).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            {l(content.experience.contributionsTitle)}
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {l(content.experience.contributionsIntro)}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {content.experience.contributions.map((contribution) => (
              <Card key={contribution.title.en}>
                <h3 className="text-base font-semibold text-[var(--text)]">
                  {l(contribution.title)}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {l(contribution.context)}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                  {l(contribution.myRole)}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  {list(contribution.approachBullets).map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  {l(contribution.outcome)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {contribution.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/skills" variant="primary" fullWidth>
            {l(content.labels.seeSkills)}
          </ButtonLink>
          <ButtonLink href="/" variant="secondary" fullWidth>
            {l(content.labels.back)}
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
