import { BrandTitle } from "@/components/BrandTitle";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_circle_at_top,_#fff7ed_0,_#fef3c7_28%,_#f1f5f9_60%,_#e2e8f0_100%)]">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          Portfolio
        </p>
        <BrandTitle name={site.name} />
        <p className="mt-4 max-w-xl text-lg text-slate-600">
          Ingenieur front-end, je cree des interfaces sobres, rapides et
          accessibles.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-700">
          <span className="rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Next.js App Router
          </span>
          <span className="rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            TypeScript
          </span>
          <span className="rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            Tailwind CSS
          </span>
        </div>
      </div>
    </main>
  );
}
