type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] backdrop-blur-[6px] transition-transform duration-200 hover:-translate-y-0.5 ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  );
}
