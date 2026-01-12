"use client";

import Link from "next/link";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const comingSoon = l(content.labels.comingSoon);

  const links = [
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

  const email = content.contact.links.email;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/#contact"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          {l(content.labels.back)}
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            {l(content.contact.title)}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            {l(content.contact.subtitle)}
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
          {links.map((link) =>
            link.href ? (
              <a
                key={link.id}
                href={link.href}
                className="rounded-full border border-slate-300/80 bg-white px-4 py-2 transition hover:bg-slate-100"
              >
                {link.label}
              </a>
            ) : (
              <div
                key={link.id}
                className="flex items-center gap-2 rounded-full border border-dashed border-slate-300/80 bg-white/70 px-4 py-2 text-slate-500"
              >
                <span>{link.label}</span>
                <span className="text-xs">{comingSoon}</span>
              </div>
            ),
          )}
        </div>

        {email ? (
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {l(content.contact.linkLabels.email)}
          </a>
        ) : null}
      </div>
    </main>
  );
}
