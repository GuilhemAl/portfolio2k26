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
            {l(content.pageTitles.about)}
          </h1>
        </header>

        <section className="mt-6 space-y-4 text-slate-600">
          <p>{l(content.about.paragraph1)}</p>
          <p>{l(content.about.paragraph2)}</p>
        </section>

        <section className={`${cardClass} mt-8`}>
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.labels.timeline)}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {list(content.about.timeline).map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
