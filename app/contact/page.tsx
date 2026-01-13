"use client";

import Link from "next/link";
import { useState } from "react";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();
  const l = (value: LocalizedString) => t(value.fr, value.en);
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(
    null,
  );

  const { email, phone, linkedin, github } = content.contact.fields;
  const phoneHref = phone.startsWith("0") ? `+33${phone.slice(1)}` : phone;

  const handleCopy = async (field: "email" | "phone", value: string) => {
    if (!navigator?.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const rows = [
    {
      key: "email",
      label: l(content.contact.labels.emailLabel),
      value: email,
      copyField: "email" as const,
      helper: l(content.contact.emailHint),
      linkLabel: l(content.contact.labels.mailtoLabel),
      linkHref: `mailto:${email}`,
    },
    {
      key: "phone",
      label: l(content.contact.labels.phoneLabel),
      value: phone,
      copyField: "phone" as const,
      helper: null,
      linkLabel: l(content.contact.labels.phoneLinkLabel),
      linkHref: `tel:${phoneHref}`,
    },
    {
      key: "linkedin",
      label: l(content.contact.labels.linkedinLabel),
      value: linkedin,
      copyField: null,
      helper: null,
      linkLabel: l(content.contact.labels.primaryCta),
      linkHref: linkedin,
    },
    {
      key: "github",
      label: l(content.contact.labels.githubLabel),
      value: github,
      copyField: null,
      helper: null,
      linkLabel: l(content.contact.labels.ctaGitHub),
      linkHref: github,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          {l(content.contact.labels.back)}
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold text-slate-900">
            {l(content.contact.title)}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            {l(content.contact.subtitle)}
          </p>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            {l(content.contact.availabilityNote)}
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {l(content.contact.labels.primaryCta)}
          </a>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.contact.labels.detailsTitle)}
          </h2>
          <div className="mt-4 divide-y divide-slate-200/80">
            {rows.map((row) => (
              <div key={row.key} className="py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {row.label}
                </p>
                <p className="mt-1 text-sm text-slate-700 break-all select-text">
                  {row.value}
                </p>
                {row.helper ? (
                  <p className="mt-1 text-xs text-slate-500">{row.helper}</p>
                ) : null}
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                  {row.copyField ? (
                    <button
                      type="button"
                      onClick={() => handleCopy(row.copyField, row.value)}
                      aria-label={`${l(content.contact.labels.ctaCopy)} ${row.label}`}
                      className="rounded-full border border-slate-300/80 bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                    >
                      {copiedField === row.copyField
                        ? l(content.contact.labels.copied)
                        : l(content.contact.labels.ctaCopy)}
                    </button>
                  ) : null}
                  <a
                    href={row.linkHref}
                    target={
                      row.key === "linkedin" || row.key === "github"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      row.key === "linkedin" || row.key === "github"
                        ? "noreferrer"
                        : undefined
                    }
                    className="text-xs font-semibold text-slate-600 transition hover:text-slate-900"
                  >
                    {row.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
