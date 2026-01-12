type BrandTitleProps = {
  name: string;
};

export function BrandTitle({ name }: BrandTitleProps) {
  return (
    <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
      <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-amber-600 bg-clip-text text-transparent">
        {name}
      </span>
    </h1>
  );
}
