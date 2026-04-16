import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/a-propos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/solutions-telecom", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions-telecom/telephonie-entreprise", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions-telecom/reseaux-connectivite", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions-telecom/communications-unifiees", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services-it", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services-it/infogerance-support", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services-it/hebergement-cloud", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services-it/sauvegarde-continuite", priority: 0.9, changeFrequency: "monthly" },
    { path: "/operateurs-partenaires", priority: 0.7, changeFrequency: "monthly" },
    { path: "/ressources", priority: 0.6, changeFrequency: "weekly" },
    { path: "/ressources/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/ressources/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/devis", priority: 0.9, changeFrequency: "yearly" },
    { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
    { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" },
    { path: "/politique-cookies", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cgv", priority: 0.3, changeFrequency: "yearly" },
  ];

  const posts = getAllPosts().map((p) => ({
    url: `${base}/ressources/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...posts,
  ];
}
