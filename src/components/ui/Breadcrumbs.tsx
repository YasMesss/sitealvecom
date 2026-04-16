import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = breadcrumbJsonLd([
    { name: "Accueil", url: siteConfig.url },
    ...items.map((c) => ({
      name: c.label,
      url: c.href ? new URL(c.href, siteConfig.url).toString() : siteConfig.url,
    })),
  ]);
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-ink-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-brand-700">
            <Home className="h-3.5 w-3.5" aria-hidden />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-ink-300" aria-hidden />
            {c.href && i < items.length - 1 ? (
              <Link href={c.href} className="hover:text-brand-700">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-brand-700 font-medium">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
