"use client";

import { useState } from "react";
import { BrandTitle } from "@/components/BrandTitle";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const copyButtonClass =
  "inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--text)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#111a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

export default function Home() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);
  const deepDiveLabel = l(content.labels.deepDive);
  const futureTeaser = list(content.about.aboutFutureParagraphs)[0];
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(
    null,
  );

  const contactEmail = content.contact.fields.email;
  const contactPhone = content.contact.fields.phone;
  const contactLinkedIn = content.contact.fields.linkedin;

  const handleCopy = async (field: "email" | "phone", value: string) => {
    if (!navigator?.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section id="home" className="scroll-mt-28 hero-gradient">
        <div className="container-page flex flex-col gap-6 py-16">
          <BrandTitle name={l(content.identity.displayName)} />
          <div className="space-y-3 text-[var(--muted)]">
            <p className="text-lg font-semibold text-[var(--text)]">
              {l(content.identity.roleHeadline)}
            </p>
            <p className="max-w-2xl text-base">{l(content.identity.roleSubheadline)}</p>
            <p className="max-w-2xl text-base">{l(content.identity.goal)}</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {list(content.quickFacts).map((fact) => (
              <Chip key={fact}>{fact}</Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/#experience" variant="primary">
              {l(content.ctas.primary)}
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              {l(content.ctas.secondary)}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section id="experience" className="scroll-mt-28">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              {l(content.navigation.items.experience)}
            </h2>
            <Badge variant="accent">{l(content.experience.apprenticeshipLabel)}</Badge>
          </div>
          <p className="text-sm text-[var(--muted)]">
            {l(content.experience.company)} / {l(content.experience.orgUnit)} /{" "}
            {l(content.experience.period)}
          </p>
          <p className="text-sm text-[var(--muted)]">
            {l(content.experience.apprenticeshipNote)}
          </p>
          <div className="space-y-2 text-[var(--muted)]">
            <p className="text-sm font-semibold text-[var(--text)]">
              {l(content.experience.productLabel)}
            </p>
            <p className="max-w-2xl text-sm">
              {l(content.experience.productOneLiner)}
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.experience.roles.map((role) => (
            <Card key={role.id} className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {l(role.title)}
                </h3>
                <span className="text-xs text-[var(--muted)]">
                  {l(role.period)}
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)]">
                {l(role.summary)}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
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
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[var(--text)]">
            {l(content.experience.contributionsTitle)}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            {l(content.experience.contributionsIntro)}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {content.experience.contributions.map((contribution) => (
              <Card key={contribution.title.en} className="p-5">
                <h4 className="text-base font-semibold text-[var(--text)]">
                  {l(contribution.title)}
                </h4>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {l(contribution.context)}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                  {l(contribution.myRole)}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {l(contribution.outcome)}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {contribution.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <ButtonLink href="/experience" variant="primary">
            {deepDiveLabel}
          </ButtonLink>
        </div>
      </Section>

      <Section id="skills" className="scroll-mt-28" title={l(content.skills.title)}>
        <div className="grid gap-4 md:grid-cols-2">
          {content.skills.buckets.map((bucket) => (
            <Card key={bucket.key} className="p-5">
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {l(bucket.title)}
              </h3>
              <p className="mt-3 text-sm text-[var(--muted)]">
                {l(bucket.summary)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bucket.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href="/skills" variant="primary">
            {deepDiveLabel}
          </ButtonLink>
        </div>
      </Section>

      <Section
        id="academics"
        className="scroll-mt-28"
        title={l(content.academics.homeTitle)}
        subtitle={l(content.academics.homeIntro)}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {content.academics.items.map((item) => (
            <Card key={item.key} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  {l(item.yearTitle)}
                </p>
                <Badge>{l(item.status)}</Badge>
              </div>
              <h3 className="mt-3 text-base font-semibold text-[var(--text)]">
                {l(item.title)}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {l(item.context)}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href="/academics" variant="primary">
            {l(content.academics.homeCta)}
          </ButtonLink>
        </div>
      </Section>

      <Section
        id="about"
        className="scroll-mt-28"
        title={l(content.navigation.items.about)}
      >
        <div className="space-y-4 text-[var(--muted)]">
          <p>{l(content.about.aboutIntro)}</p>
          {futureTeaser ? <p>{futureTeaser}</p> : null}
        </div>
        <div className="mt-6">
          <ButtonLink href="/about" variant="primary">
            {deepDiveLabel}
          </ButtonLink>
        </div>
      </Section>

      <Section
        id="contact"
        className="scroll-mt-28"
        title={l(content.contact.title)}
      >
        <p className="max-w-2xl text-[var(--muted)]">
          {l(content.contact.subtitle)}
        </p>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {l(content.contact.availabilityNote)}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              key: "email",
              label: l(content.contact.labels.emailLabel),
              value: contactEmail,
            },
            {
              key: "phone",
              label: l(content.contact.labels.phoneLabel),
              value: contactPhone,
            },
          ].map((item) => (
            <Card key={item.key} className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-[var(--text)] select-text break-all">
                {item.value}
              </p>
              <button
                type="button"
                onClick={() =>
                  handleCopy(item.key === "email" ? "email" : "phone", item.value)
                }
                aria-label={`${l(content.contact.labels.ctaCopy)} ${item.label}`}
                className={`${copyButtonClass} mt-3`}
              >
                {copiedField === item.key
                  ? l(content.contact.labels.copied)
                  : l(content.contact.labels.ctaCopy)}
              </button>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink
            href={contactLinkedIn}
            variant="primary"
            external
          >
            {l(content.contact.labels.primaryCta)}
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
