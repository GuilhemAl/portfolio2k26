type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

const variants = {
  default: "border-[var(--border)] bg-white/70 text-[var(--muted)]",
  accent: "border-[var(--accent)] bg-[rgba(176,122,58,0.12)] text-[var(--accent)]",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${variants[variant]} ${className ?? ""}`.trim()}
    >
      {children}
    </span>
  );
}
