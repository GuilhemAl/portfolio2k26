"use client";

import Link from "next/link";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm";

export default function AcademicsPage() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          {l(content.labels.back)}
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            {l(content.academics.pageTitle)}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            {l(content.academics.pageIntro)}
          </p>
        </header>

        <section className="mt-8 grid gap-6">
          {content.academics.items.map((item) => (
            <article key={item.key} className={cardClass}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {l(item.yearTitle)}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">
                  {l(item.title)}
                </h2>
                <span className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  {l(item.status)}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {l(item.context)}
              </p>

              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {l(item.learnedTitle)}
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {list(item.learnedBullets).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>

              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {l(item.themesTitle)}
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {list(item.themesBullets).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>

              {item.apprenticeshipNote ? (
                <p className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  {l(item.apprenticeshipNote)}
                </p>
              ) : null}
            </article>
          ))}
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.academics.futureTitle)}
          </h2>
          <div className="mt-3 space-y-3 text-sm text-slate-600">
            {list(content.academics.futureParagraphs).map((paragraph, index) => (
              <p key={`future-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="mt-10">
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
