import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  fullWidth?: boolean;
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] h-10 md:h-11 md:px-5";
const variants = {
  primary:
    "bg-[var(--text)] text-white hover:bg-[#111a2a] shadow-[var(--shadow)]",
  secondary:
    "border border-[var(--border)] bg-transparent text-[var(--text)] hover:bg-[rgba(11,18,32,0.04)]",
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  className,
  external = false,
  fullWidth = false,
}: ButtonLinkProps) {
  const widthClass = fullWidth ? "w-full sm:w-auto" : "";
  const classes = `${baseClass} ${variants[variant]} ${widthClass} ${className ?? ""}`.trim();

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
