type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] backdrop-blur-[6px] transition-transform duration-200 hover:-translate-y-0.5 break-words min-w-0 md:p-6 ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  );
}
