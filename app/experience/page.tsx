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
        <Link
          href="/#experience"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          {l(content.labels.back)}
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            {l(content.pageTitles.experience)}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            {l(content.experience.company)} / {l(content.experience.orgUnit)} /{" "}
            {l(content.experience.product)} / {l(content.experience.period)}
          </p>
          <p className="mt-4 max-w-2xl text-slate-600">
            {l(content.experience.scopeSummary)}
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
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

        <Link
          href="/projects"
          className="mt-10 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          {l(content.labels.seeInitiatives)}
        </Link>
      </div>
    </main>
  );
}
