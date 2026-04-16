import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  cover?: string;
  readingMinutes: number;
  contentHtml: string;
  excerpt: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function readAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

function readFileBySlug(slug: string) {
  const md = path.join(POSTS_DIR, `${slug}.md`);
  const mdx = path.join(POSTS_DIR, `${slug}.mdx`);
  const file = fs.existsSync(md) ? md : fs.existsSync(mdx) ? mdx : null;
  if (!file) return null;
  return fs.readFileSync(file, "utf8");
}

function estimateReadingMinutes(text: string) {
  const words = text.split(/\s+/g).length;
  return Math.max(1, Math.round(words / 220));
}

async function toHtml(md: string) {
  const file = await remark().use(gfm).use(html).process(md);
  return String(file);
}

export function getAllPosts(): Post[] {
  const slugs = readAllSlugs();
  const posts: Post[] = [];
  for (const slug of slugs) {
    const raw = readFileBySlug(slug);
    if (!raw) continue;
    const { data, content } = matter(raw);
    posts.push({
      slug,
      title: (data.title as string) ?? slug,
      description: (data.description as string) ?? "",
      date: (data.date as string) ?? new Date().toISOString(),
      category: (data.category as string) ?? "Actualités",
      author: (data.author as string) ?? "Alvecom",
      cover: data.cover as string | undefined,
      readingMinutes: estimateReadingMinutes(content),
      contentHtml: "",
      excerpt: content.slice(0, 180).replace(/[#>*_\-`]+/g, "").trim() + "…",
    });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const raw = readFileBySlug(slug);
  if (!raw) return null;
  const { data, content } = matter(raw);
  const contentHtml = await toHtml(content);
  return {
    slug,
    title: (data.title as string) ?? slug,
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? new Date().toISOString(),
    category: (data.category as string) ?? "Actualités",
    author: (data.author as string) ?? "Alvecom",
    cover: data.cover as string | undefined,
    readingMinutes: estimateReadingMinutes(content),
    contentHtml,
    excerpt: content.slice(0, 180).replace(/[#>*_\-`]+/g, "").trim() + "…",
  };
}
