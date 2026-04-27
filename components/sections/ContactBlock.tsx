"use client";

import { useState } from "react";
import { FloatingParticles } from "@/components/fx/FloatingParticles";
import { SectionHead } from "@/components/sections/SectionHead";
import { content } from "@/lib/content";
import { useLocalizedContent } from "@/hooks/useLocalizedContent";

type Item = {
  key: string;
  label: string;
  value: string;
  href: string;
  copy?: boolean;
};

export function ContactBlock({ num = "05" }: { num?: string }) {
  const { l } = useLocalizedContent();
  const [copied, setCopied] = useState<string | null>(null);
  const { email, phone, linkedin, github } = content.contact.fields;
  const phoneHref = phone.startsWith("0") ? `+33${phone.slice(1)}` : phone;

  const items: Item[] = [
    {
      key: "email",
      label: l(content.contact.labels.emailLabel),
      value: email,
      href: `mailto:${email}`,
      copy: true,
    },
    {
      key: "phone",
      label: l(content.contact.labels.phoneLabel),
      value: phone,
      href: `tel:${phoneHref}`,
      copy: true,
    },
    {
      key: "linkedin",
      label: l(content.contact.labels.linkedinLabel),
      value: linkedin,
      href: linkedin,
    },
    {
      key: "github",
      label: l(content.contact.labels.githubLabel),
      value: github,
      href: github,
    },
  ];

  const onClick = (item: Item) => {
    if (item.copy) {
      navigator.clipboard?.writeText(item.value).catch(() => {});
      setCopied(item.key);
      setTimeout(() => setCopied(null), 1500);
    } else {
      window.open(item.href, "_blank", "noopener");
    }
  };

  return (
    <section
      id="contact"
      className="section"
      data-glyph="CTC"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.6,
        }}
      >
        <FloatingParticles density={8} />
      </div>
      <div className="container">
        <SectionHead num={num} title={l(content.contact.title)} />
        <p
          className="reveal"
          style={{
            fontSize: "clamp(20px, 2.4vw, 28px)",
            fontWeight: 500,
            maxWidth: 720,
            marginBottom: 18,
            color: "var(--muted)",
            lineHeight: 1.4,
          }}
        >
          {l(content.contact.subtitle)}
        </p>
        <p
          className="reveal"
          style={{
            fontSize: 14,
            color: "var(--muted-2)",
            maxWidth: 640,
            marginBottom: 40,
            fontFamily: "var(--font-mono)",
          }}
        >
          {l(content.contact.availabilityNote)}
        </p>
        <div className="contact-block">
          {items.map((it, i) => (
            <button
              key={it.key}
              type="button"
              className="contact-card reveal"
              style={{ "--delay": `${0.1 + i * 0.08}s` } as React.CSSProperties}
              onClick={() => onClick(it)}
            >
              <span className={`copied ${copied === it.key ? "show" : ""}`}>
                ✓ {l(content.contact.labels.copied)}
              </span>
              <div className="label">{it.label}</div>
              <div className="value">{it.value}</div>
              <span className="arrow">↗</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
