"use client";

import Link from "next/link";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const cardClass =
  "rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm";

export default function AboutPage() {
  const { t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);

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
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200/80 bg-white/80 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                {l(content.about.bachelorLabel)}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {l(content.about.bachelorPeriod)}
              </p>
              <p className="mt-3 text-sm text-slate-600">
                {l(content.about.bachelorApprenticeship)}
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200/80 bg-white/80 p-5">
              <h3 className="text-base font-semibold text-slate-900">
                {l(content.experience.company)} / {l(content.experience.product)}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {l(content.experience.period)}
              </p>
              <p className="mt-3 text-sm text-slate-600">
                {l(content.experience.orgUnit)}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {l(content.experience.apprenticeshipNote)}
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
