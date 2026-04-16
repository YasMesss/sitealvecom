import Link from "next/link";
import { BookOpen, HelpCircle, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Ressources — Blog, guides et FAQ",
  description:
    "Articles, guides et réponses aux questions fréquentes sur la téléphonie, les réseaux, l'infogérance et les services IT pour entreprises.",
  path: "/ressources",
});

export default function Page() {
  const posts = getAllPosts().slice(0, 4);
  return (
    <>
      <PageHeader
        eyebrow="Ressources"
        title="Guides, articles et FAQ pour bien choisir"
        description="Nos ressources pour mieux comprendre les enjeux télécom et IT de votre entreprise, et prendre les bonnes décisions."
        breadcrumbs={[{ label: "Ressources" }]}
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/ressources/blog"
            className="group rounded-2xl border border-ink-200 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-[var(--shadow-lift)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
              <BookOpen className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-brand-700">Blog & Actualités</h2>
            <p className="mt-2 text-ink-600">
              Décryptages, guides pratiques et retours d&apos;expérience sur le télécom et l&apos;IT.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-600 group-hover:gap-2.5">
              Voir tous les articles <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
          <Link
            href="/ressources/faq"
            className="group rounded-2xl border border-ink-200 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-[var(--shadow-lift)]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
              <HelpCircle className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-brand-700">Foire aux questions</h2>
            <p className="mt-2 text-ink-600">
              Les réponses aux questions que nos clients nous posent le plus souvent.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-600 group-hover:gap-2.5">
              Consulter la FAQ <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
        </div>
      </Section>

      {posts.length > 0 && (
        <Section tone="muted">
          <SectionHeading eyebrow="Les plus récents" title="Derniers articles" />
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/ressources/blog/${p.slug}`}
                className="group rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-brand-300"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {p.category} · {formatDate(p.date)} · {p.readingMinutes} min
                </div>
                <h3 className="mt-2 text-lg font-semibold text-brand-700 group-hover:text-brand-500">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.description}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
