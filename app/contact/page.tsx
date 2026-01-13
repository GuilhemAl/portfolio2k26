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
  const phoneHref = phone.startsWith("0")
    ? `+33${phone.slice(1)}`
    : phone;

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
      actionLabel: l(content.contact.labels.ctaEmail),
      actionHref: `mailto:${email}`,
      canCopy: true,
      external: false,
    },
    {
      key: "phone",
      label: l(content.contact.labels.phoneLabel),
      value: phone,
      actionLabel: l(content.contact.labels.ctaPhone),
      actionHref: `tel:${phoneHref}`,
      canCopy: true,
      external: false,
    },
    {
      key: "linkedin",
      label: l(content.contact.labels.linkedinLabel),
      value: linkedin,
      actionLabel: l(content.contact.labels.ctaLinkedIn),
      actionHref: linkedin,
      canCopy: false,
      external: true,
    },
    {
      key: "github",
      label: l(content.contact.labels.githubLabel),
      value: github,
      actionLabel: l(content.contact.labels.ctaGitHub),
      actionHref: github,
      canCopy: false,
      external: true,
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

        <section className="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            {l(content.contact.labels.detailsTitle)}
          </h2>
          <div className="mt-4 divide-y divide-slate-200/80">
            {rows.map((row) => (
              <div
                key={row.key}
                className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {row.label}
                  </p>
                  <p className="text-sm text-slate-700 break-all">
                    {row.value}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                  <a
                    href={row.actionHref}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noreferrer" : undefined}
                    className="rounded-full border border-slate-300/80 bg-white px-4 py-2 text-slate-700 transition hover:bg-slate-100"
                  >
                    {row.actionLabel}
                  </a>
                  {row.canCopy ? (
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          row.key === "email" ? "email" : "phone",
                          row.value,
                        )
                      }
                      aria-label={`${l(content.contact.labels.ctaCopy)} ${row.label}`}
                      className="rounded-full border border-slate-300/80 bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                    >
                      {copiedField === row.key
                        ? l(content.contact.labels.copied)
                        : l(content.contact.labels.ctaCopy)}
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {l(content.contact.labels.ctaTalk)}
          </a>
        </div>
      </div>
    </main>
  );
}
