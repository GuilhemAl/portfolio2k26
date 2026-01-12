import Link from "next/link";
import { BrandTitle } from "@/components/BrandTitle";
import { site } from "@/lib/site";

const sections = [
  {
    id: "experience",
    title: "Experience",
    description:
      "Parcours, roles, missions et ce que je construis en production.",
    href: "/experience",
  },
  {
    id: "projects",
    title: "Projects",
    description:
      "Selection de projets, demos, produits et systemes de design.",
    href: "/projects",
  },
  {
    id: "skills",
    title: "Skills",
    description: "Stack front-end, outils, pratiques et methodes de delivery.",
    href: "/skills",
  },
  {
    id: "about",
    title: "About",
    description: "Vision, valeurs, facon de travailler et inspirations.",
    href: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Discutons d'une mission ou d'un projet a construire.",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section
        id="top"
        className="scroll-mt-28 bg-[radial-gradient(1200px_circle_at_top,_#fff7ed_0,_#fef3c7_28%,_#f1f5f9_60%,_#e2e8f0_100%)]"
      >
        <div className="mx-auto flex max-w-5xl flex-col justify-center px-6 py-16">
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
      </section>

      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-sm backdrop-blur"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {section.title}
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              {section.description}
            </p>
            <Link
              href={section.href}
              className="mt-6 inline-flex items-center rounded-full border border-slate-300/80 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Creuser
            </Link>
          </section>
        ))}
      </div>
    </main>
  );
}
