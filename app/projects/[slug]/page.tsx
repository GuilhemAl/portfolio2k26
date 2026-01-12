"use client";

import Link from "next/link";
import { content, type LocalizedList, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

type PageProps = {
  params: {
    slug: string;
  };
};

const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm";

export default function ProjectDetailPage({ params }: PageProps) {
  const { lang, t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const list = (value: LocalizedList) => (lang === "fr" ? value.fr : value.en);
  const initiative = content.initiatives.find(
    (item) => item.slug === params.slug,
  );

  if (!initiative) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            {l(content.labels.backToProjects)}
          </Link>
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white/80 p-6 text-slate-600">
            {l(content.labels.projectNotFound)}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/projects"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          {l(content.labels.backToProjects)}
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            {l(initiative.title)}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            {l(initiative.summary)}
          </p>
        </header>

        <section className={`${cardClass} mt-8`}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
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
          <ul className="mt-5 space-y-2 text-sm text-slate-600">
            {list(initiative.bullets).map((bullet) => (
              <li key={bullet}>- {bullet}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
