type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`section-pad ${className ?? ""}`.trim()}>
      <div className="container-page">
        {title ? (
          <header className="mb-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-sm text-[var(--muted)]">{subtitle}</p>
            ) : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
