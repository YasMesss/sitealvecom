import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
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
      <Section>
        {posts.length === 0 ? (
          <p className="text-ink-500">Les premiers articles arrivent très bientôt.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => {
              const cover = p.cover ?? "/images/blog/blog-default.webp";
              return (
                <Link
                  key={p.slug}
                  href={`/ressources/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition-all hover:border-brand-300 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-muted)]">
                    <Image
                      src={cover}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700 shadow-[var(--shadow-soft)] backdrop-blur">
                      {p.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold text-brand-700 transition-colors group-hover:text-brand-500">
                      {p.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-ink-500">
                      <span>
                        {formatDate(p.date)} · {p.readingMinutes} min
                      </span>
                      <ArrowRight
                        className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Section>
      <CTASection />
    </>
  );
}
