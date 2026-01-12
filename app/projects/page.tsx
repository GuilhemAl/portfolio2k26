"use client";

import Link from "next/link";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm";

export default function ProjectsPage() {
  const { t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);

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
            {l(content.pageTitles.projects)}
          </h1>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.initiatives.map((initiative) => (
            <article key={initiative.slug} className={cardClass}>
              <h2 className="text-lg font-semibold text-slate-900">
                {l(initiative.title)}
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                {l(initiative.summary)}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                {l(initiative.role)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                {initiative.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${initiative.slug}`}
                className="mt-5 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                {l(content.labels.deepDive)}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
