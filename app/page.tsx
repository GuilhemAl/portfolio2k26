"use client";

import Link from "next/link";
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
  const contactLinks = [
    {
      id: "linkedIn",
      label: l(content.contact.linkLabels.linkedIn),
      href: content.contact.links.linkedIn,
    },
    {
      id: "github",
      label: l(content.contact.linkLabels.github),
      href: content.contact.links.github,
    },
    {
      id: "email",
      label: l(content.contact.linkLabels.email),
      href: content.contact.links.email,
    },
  ];

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
            <h2 className="text-2xl font-semibold text-slate-900">
              {l(content.navigation.items.experience)}
            </h2>
            <p className="text-sm text-slate-500">
              {l(content.experience.company)} / {l(content.experience.orgUnit)} /{" "}
              {l(content.experience.period)}
            </p>
            <p className="max-w-2xl text-slate-600">
              {l(content.experience.scopeSummary)}
            </p>
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
                  {list(role.bullets)[0]}
                </p>
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
          <Link
            href="/experience"
            className="mt-6 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {deepDiveLabel}
          </Link>
        </section>

        <section id="projects" className={sectionClass}>
          <h2 className="text-2xl font-semibold text-slate-900">
            {l(content.navigation.items.projects)}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.initiatives.map((initiative) => (
              <article
                key={initiative.slug}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {l(initiative.title)}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {l(initiative.summary)}
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
              </article>
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {deepDiveLabel}
          </Link>
        </section>

        <section id="skills" className={sectionClass}>
          <h2 className="text-2xl font-semibold text-slate-900">
            {l(content.navigation.items.skills)}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {content.skills.map((skill) => (
              <article
                key={skill.title.en}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {l(skill.title)}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {list(skill.bullets)[0]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  {skill.tags.map((tag) => (
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

        <section id="about" className={sectionClass}>
          <h2 className="text-2xl font-semibold text-slate-900">
            {l(content.navigation.items.about)}
          </h2>
          <div className="mt-4 space-y-4 text-slate-600">
            <p>{l(content.about.paragraph1)}</p>
            <p>{l(content.about.paragraph2)}</p>
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
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
            {contactLinks.map((link) =>
              link.href ? (
                <a
                  key={link.id}
                  href={link.href}
                  className="rounded-full border border-slate-300/80 bg-white px-4 py-2 transition hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ) : (
                <span
                  key={link.id}
                  className="rounded-full border border-dashed border-slate-300/80 bg-white/70 px-4 py-2 text-slate-500"
                >
                  {link.label}
                </span>
              ),
            )}
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {deepDiveLabel}
          </Link>
        </section>
      </div>
    </main>
  );
}
