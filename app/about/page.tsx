"use client";

import Link from "next/link";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm";

export default function AboutPage() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/#about"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          {l(content.labels.back)}
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            {l(content.about.aboutPageTitle)}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            {l(content.about.aboutIntro)}
          </p>
        </header>

        <section className="mt-8 space-y-6">
          {content.about.aboutTimeline.map((item) => (
            <article key={item.yearTitle.en} className={cardClass}>
              <h2 className="text-lg font-semibold text-slate-900">
                {l(item.yearTitle)}
              </h2>
              <div className="mt-3 space-y-3 text-sm text-slate-600">
                {list(item.paragraphs).map((paragraph, index) => (
                  <p key={`${item.yearTitle.en}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.about.aboutFutureTitle)}
          </h2>
          <div className="mt-3 space-y-3 text-sm text-slate-600">
            {list(content.about.aboutFutureParagraphs).map((paragraph, index) => (
              <p key={`future-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={`${cardClass} mt-6`}>
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.about.aboutValuesTitle)}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {list(content.about.aboutValuesBullets).map((bullet) => (
              <li key={bullet}>- {bullet}</li>
            ))}
          </ul>
        </section>

        <div className="mt-10">
          <Link
            href="/#about"
            className="inline-flex items-center rounded-full border border-slate-300/80 bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          >
            {l(content.labels.back)}
          </Link>
        </div>
      </div>
    </main>
  );
}
