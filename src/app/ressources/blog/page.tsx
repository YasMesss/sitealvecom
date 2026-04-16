import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { HeroMedia } from "@/components/ui/HeroMedia";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Blog & Actualités — Télécom et IT pour entreprises",
  description:
    "Articles, guides et actualités sur la téléphonie d'entreprise, les réseaux, l'infogérance, le cloud et la sauvegarde. Par Alvecom.",
  path: "/ressources/blog",
});

export default function Page() {
  const posts = getAllPosts();
  return (
    <>
      <PageHeader
        eyebrow="Blog & Actualités"
        title="Conseils, analyses et retours d'expérience"
        description="Ressources pensées pour les dirigeants, DAF, DSI et responsables IT des PME et ETI."
        breadcrumbs={[
          { label: "Ressources", href: "/ressources" },
          { label: "Blog" },
        ]}
      />
      <Container>
        <div className="-mt-2 pb-4 md:pb-6">
          <HeroMedia
            src="/images/blog/blog-default.webp"
            alt="Articles et ressources Alvecom sur la téléphonie d'entreprise et l'IT"
            priority
            overlay="soft"
            heightClassName="h-[240px] md:h-[340px]"
          />
        </div>
      </Container>
      <Section>
        {posts.length === 0 ? (
          <p className="text-ink-500">Les premiers articles arrivent très bientôt.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/ressources/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {p.category}
                </div>
                <h2 className="mt-2 text-lg font-semibold text-brand-700 group-hover:text-brand-500">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{p.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
                  <span>
                    {formatDate(p.date)} · {p.readingMinutes} min
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
      <CTASection />
    </>
  );
}
