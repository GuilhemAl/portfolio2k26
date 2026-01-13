type BrandTitleProps = {
  name: string;
};

export function BrandTitle({ name }: BrandTitleProps) {
  const parts = name.trim().split(" ");
  const lastName = parts.pop();
  const firstName = parts.join(" ");

  return (
    <h1 className="mt-4 text-5xl font-semibold tracking-[-0.02em] text-[var(--text)] sm:text-6xl lg:text-7xl">
      {firstName ? <span>{firstName} </span> : null}
      {lastName ? (
        <span className="text-[var(--accent)]">{lastName}</span>
      ) : null}
    </h1>
  );
}
