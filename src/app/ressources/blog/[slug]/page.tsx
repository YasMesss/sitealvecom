import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { getAllPosts, getPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return buildMetadata({ title: "Article introuvable", description: "", path: "/ressources/blog", noIndex: true });
  return buildMetadata({
    title: post.title,
    description: post.description || post.excerpt,
    path: `/ressources/blog/${post.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo-alvecom.png` },
    },
    mainEntityOfPage: `${siteConfig.url}/ressources/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.description}
        breadcrumbs={[
          { label: "Ressources", href: "/ressources" },
          { label: "Blog", href: "/ressources/blog" },
          { label: post.title },
        ]}
      >
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500">
          <span>Par {post.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min de lecture</span>
        </div>
      </PageHeader>

      {post.cover && (
        <Container>
          <div className="-mt-2 pb-2 md:pb-4">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-[var(--color-muted)]">
              <Image
                src={post.cover}
                alt=""
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      )}

      <section className="py-12 md:py-16">
        <Container size="narrow">
          <article className="prose-brand" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <div className="mt-10 border-t border-ink-200 pt-6">
            <Link
              href="/ressources/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-500"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> Retour au blog
            </Link>
          </div>
        </Container>
      </section>

      <CTASection
        title="Envie d'en discuter concrètement ?"
        description="Notre équipe prend 15 minutes pour évaluer votre contexte et vous orienter, sans engagement."
      />
    </>
  );
}
