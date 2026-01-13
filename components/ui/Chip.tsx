type ChipProps = {
  className?: string;
  children: React.ReactNode;
};

export function Chip({ className, children }: ChipProps) {
  return (
    <span
      className={`rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1 text-sm leading-tight text-[var(--muted)] transition hover:border-[rgba(15,23,42,0.24)] break-words whitespace-normal ${className ?? ""}`.trim()}
    >
      {children}
    </span>
  );
}
