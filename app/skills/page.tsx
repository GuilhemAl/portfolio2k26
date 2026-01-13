"use client";

import Link from "next/link";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm";

export default function SkillsPage() {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/#skills"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          {l(content.labels.back)}
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            {l(content.skills.title)}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            {l(content.skills.intro)}
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.skills.buckets.map((bucket) => (
            <section key={bucket.key} className={cardClass}>
              <h2 className="text-lg font-semibold text-slate-900">
                {l(bucket.title)}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {list(bucket.bullets).map((bullet) => (
                  <li key={bullet}>- {bullet}</li>
                ))}
              </ul>
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
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
