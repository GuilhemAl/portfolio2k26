"use client";

import Link from "next/link";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm";

export default function ExperiencePage() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <nav className="text-sm font-semibold text-slate-600">
          <Link href="/" className="transition hover:text-slate-900">
            {l(content.navigation.items.home)}
          </Link>
          <span className="px-2 text-slate-400">/</span>
          <span className="text-slate-900">
            {l(content.pageTitles.experience)}
          </span>
        </nav>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-semibold text-slate-900">
              {l(content.pageTitles.experience)}
            </h1>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              {l(content.experience.apprenticeshipLabel)}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            {l(content.experience.apprenticeshipNote)}
          </p>
        </header>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.experience.company)}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {l(content.experience.orgUnit)} / {l(content.experience.product)} /{" "}
            {l(content.experience.period)}
          </p>
        </section>

        <section className={`${cardClass} mt-6`}>
          <p className="text-sm font-semibold text-slate-900">
            {l(content.experience.productLabel)}
          </p>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            {l(content.experience.productOneLiner)}
          </p>
          <h2 className="mt-4 text-sm font-semibold text-slate-900">
            {l(content.experience.productCapabilitiesTitle)}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {list(content.experience.productCapabilities).map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

        <section className={`${cardClass} mt-6`}>
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.experience.environmentTitle)}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {list(content.experience.environmentBullets).map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {content.experience.roles.map((role) => (
            <section key={role.id} className={cardClass}>
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">
                  {l(role.title)}
                </h2>
                <span className="text-xs text-slate-500">
                  {l(role.period)}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {l(role.focusTitle)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                {list(role.focusAreas).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
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
            </section>
          ))}
        </div>

        <section className={`${cardClass} mt-6`}>
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.experience.contributionsTitle)}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {l(content.experience.contributionsIntro)}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {content.experience.contributions.map((contribution) => (
              <article
                key={contribution.title.en}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {l(contribution.title)}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {l(contribution.context)}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  {l(contribution.myRole)}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {list(contribution.approachBullets).map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-slate-600">
                  {l(contribution.outcome)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
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
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/skills"
            className="inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {l(content.labels.seeSkills)}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-slate-300/80 bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          >
            {l(content.labels.back)}
          </Link>
        </div>
      </div>
    </main>
  );
}
