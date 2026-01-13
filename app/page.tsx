"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandTitle } from "@/components/BrandTitle";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const sectionClass =
  "scroll-mt-28 rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-sm backdrop-blur";

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
    <main className="bg-slate-50">
      <section
        id="home"
        className="scroll-mt-28 bg-[radial-gradient(1200px_circle_at_top,_#fff7ed_0,_#fef3c7_28%,_#f1f5f9_60%,_#e2e8f0_100%)]"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16">
          <BrandTitle name={l(content.identity.displayName)} />
          <div className="space-y-3 text-slate-700">
            <p className="text-lg font-semibold text-slate-900">
              {l(content.identity.roleHeadline)}
            </p>
            <p className="max-w-2xl text-base text-slate-600">
              {l(content.identity.roleSubheadline)}
            </p>
            <p className="max-w-2xl text-base text-slate-600">
              {l(content.identity.goal)}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            {list(content.quickFacts).map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur"
              >
                {fact}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <Link
              href="/#experience"
              className="inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-white transition hover:bg-slate-800"
            >
              {l(content.ctas.primary)}
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full border border-slate-300/80 bg-white px-5 py-2 text-slate-900 transition hover:bg-slate-100"
            >
              {l(content.ctas.secondary)}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
        <section id="experience" className={sectionClass}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                {l(content.navigation.items.experience)}
              </h2>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {l(content.experience.apprenticeshipLabel)}
              </span>
            </div>
            <p className="text-sm text-slate-500">
              {l(content.experience.company)} / {l(content.experience.orgUnit)} /{" "}
              {l(content.experience.period)}
            </p>
            <p className="text-sm text-slate-600">
              {l(content.experience.apprenticeshipNote)}
            </p>
            <div className="space-y-2 text-slate-600">
              <p className="text-sm font-semibold text-slate-900">
                {l(content.experience.productLabel)}
              </p>
              <p className="max-w-2xl text-sm">
                {l(content.experience.productOneLiner)}
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.experience.roles.map((role) => (
              <article
                key={role.id}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {l(role.title)}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {l(role.period)}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {l(role.summary)}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {list(role.bullets).map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  {role.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              {l(content.experience.contributionsTitle)}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {l(content.experience.contributionsIntro)}
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {content.experience.contributions.map((contribution) => (
                <article
                  key={contribution.title.en}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-5"
                >
                  <h4 className="text-base font-semibold text-slate-900">
                    {l(contribution.title)}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {l(contribution.context)}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    {l(contribution.myRole)}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {l(contribution.outcome)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                    {contribution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <Link
            href="/experience"
            className="mt-6 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {deepDiveLabel}
          </Link>
        </section>

        <section id="skills" className={sectionClass}>
          <h2 className="text-2xl font-semibold text-slate-900">
            {l(content.skills.title)}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.skills.buckets.map((bucket) => (
              <article
                key={bucket.key}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {l(bucket.title)}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {l(bucket.summary)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  {bucket.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <Link
            href="/skills"
            className="mt-6 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {deepDiveLabel}
          </Link>
        </section>

        <section id="academics" className={sectionClass}>
          <h2 className="text-2xl font-semibold text-slate-900">
            {l(content.academics.homeTitle)}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            {l(content.academics.homeIntro)}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.academics.items.map((item) => (
              <article
                key={item.key}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {l(item.yearTitle)}
                  </p>
                  <span className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    {l(item.status)}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {l(item.title)}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {l(item.context)}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/academics"
            className="mt-6 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {l(content.academics.homeCta)}
          </Link>
        </section>

        <section id="about" className={sectionClass}>
          <h2 className="text-2xl font-semibold text-slate-900">
            {l(content.navigation.items.about)}
          </h2>
          <div className="mt-4 space-y-4 text-slate-600">
            <p>{l(content.about.aboutIntro)}</p>
            {futureTeaser ? <p>{futureTeaser}</p> : null}
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {deepDiveLabel}
          </Link>
        </section>

        <section id="contact" className={sectionClass}>
          <h2 className="text-2xl font-semibold text-slate-900">
            {l(content.contact.title)}
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            {l(content.contact.subtitle)}
          </p>
          <p className="mt-2 max-w-2xl text-slate-600">
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
              <div
                key={item.key}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm text-slate-700 select-text break-all">
                  {item.value}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      item.key === "email" ? "email" : "phone",
                      item.value,
                    )
                  }
                  aria-label={`${l(content.contact.labels.ctaCopy)} ${item.label}`}
                  className="mt-3 rounded-full border border-slate-300/80 bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                >
                  {copiedField === item.key
                    ? l(content.contact.labels.copied)
                    : l(content.contact.labels.ctaCopy)}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={contactLinkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              {l(content.contact.labels.primaryCta)}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
