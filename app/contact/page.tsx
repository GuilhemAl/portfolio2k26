"use client";

import Link from "next/link";
import { useState } from "react";
import { FloatingParticles } from "@/components/fx/FloatingParticles";
import { SectionHead } from "@/components/sections/SectionHead";
import { content, type LocalizedString } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

type ContactRow = {
  key: "email" | "phone" | "linkedin" | "github";
  label: string;
  value: string;
  linkLabel: string;
  linkHref: string;
  copyField?: "email" | "phone";
  helper?: string;
  external?: boolean;
};

const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

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

  const rows: ContactRow[] = [
    {
      key: "email",
      label: l(content.contact.labels.emailLabel),
      value: email,
      copyField: "email",
      helper: l(content.contact.emailHint),
      linkLabel: l(content.contact.labels.mailtoLabel),
      linkHref: `mailto:${email}`,
    },
    {
      key: "phone",
      label: l(content.contact.labels.phoneLabel),
      value: phone,
      copyField: "phone",
      linkLabel: l(content.contact.labels.phoneLinkLabel),
      linkHref: `tel:${phoneHref}`,
    },
    {
      key: "linkedin",
      label: l(content.contact.labels.linkedinLabel),
      value: linkedin,
      linkLabel: l(content.contact.labels.primaryCta),
      linkHref: linkedin,
      external: true,
    },
    {
      key: "github",
      label: l(content.contact.labels.githubLabel),
      value: github,
      linkLabel: l(content.contact.labels.ctaGitHub),
      linkHref: github,
      external: true,
    },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Link href="/" className="back-link">
            <span>←</span> {l(content.contact.labels.back)}
          </Link>
          <div className="eyebrow">05 / {l(content.contact.labels.detailsTitle)}</div>
          <h1>{l(content.contact.title)}</h1>
          <p className="lede">{l(content.contact.subtitle)}</p>
          <p className="lede contact-page-note">
            {l(content.contact.availabilityNote)}
          </p>
        </div>
      </section>

      <section
        className="section"
        data-glyph="CTC"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="contact-particles">
          <FloatingParticles density={8} />
        </div>
        <div className="container">
          <SectionHead num="05" title={l(content.contact.labels.detailsTitle)} />
          <div className="contact-detail-grid">
            {rows.map((row, i) => (
              <div
                key={row.key}
                className="card contact-detail-card reveal"
                onMouseMove={onCardMove}
                style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="label">{row.label}</div>
                <div className="value">{row.value}</div>
                {row.helper ? <p className="helper">{row.helper}</p> : null}
                <div className="contact-actions">
                  {row.copyField ? (
                    <button
                      type="button"
                      onClick={() => handleCopy(row.copyField!, row.value)}
                      className="btn btn-primary"
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
                    className="btn btn-ghost"
                  >
                    {row.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
