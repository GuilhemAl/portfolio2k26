"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const copyButtonClass =
  "inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--text)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#111a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

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
      external: true,
    },
    {
      key: "github",
      label: l(content.contact.labels.githubLabel),
      value: github,
      copyField: null,
      helper: null,
      linkLabel: l(content.contact.labels.ctaGitHub),
      linkHref: github,
      external: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="container-page section-pad">
        <ButtonLink href="/" variant="secondary">
          {l(content.contact.labels.back)}
        </ButtonLink>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold tracking-[-0.02em] text-[var(--text)]">
            {l(content.contact.title)}
          </h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            {l(content.contact.subtitle)}
          </p>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
            {l(content.contact.availabilityNote)}
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={linkedin} variant="primary" external>
            {l(content.contact.labels.primaryCta)}
          </ButtonLink>
        </div>

        <Card className="mt-6">
          <h2 className="text-lg font-semibold text-[var(--text)]">
            {l(content.contact.labels.detailsTitle)}
          </h2>
          <div className="mt-4 divide-y divide-[var(--border)]">
            {rows.map((row) => (
              <div key={row.key} className="py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  {row.label}
                </p>
                <p className="mt-1 text-sm text-[var(--text)] break-all select-text">
                  {row.value}
                </p>
                {row.helper ? (
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {row.helper}
                  </p>
                ) : null}
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                  {row.copyField ? (
                    <button
                      type="button"
                      onClick={() => handleCopy(row.copyField, row.value)}
                      aria-label={`${l(content.contact.labels.ctaCopy)} ${row.label}`}
                      className={copyButtonClass}
                    >
                      {copiedField === row.copyField
                        ? l(content.contact.labels.copied)
                        : l(content.contact.labels.ctaCopy)}
                    </button>
                  ) : null}
                  <a
                    href={row.linkHref}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noreferrer" : undefined}
                    className="text-xs font-semibold text-[var(--muted)] transition hover:text-[var(--text)]"
                  >
                    {row.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
