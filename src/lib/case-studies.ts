import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CaseStudyMeta } from "@/types";

const dir = path.join(process.cwd(), "content/case-studies");

function readAllCaseStudies(): CaseStudyMeta[] {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf8");
    const { data } = matter(raw);
    return { slug, ...data } as CaseStudyMeta;
  });
}

/** Returns only case studies that should appear on the /case-studies listing page */
export function getAllCaseStudies(): CaseStudyMeta[] {
  return readAllCaseStudies()
    .filter((s) => s.showInListing !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Returns ALL case study slugs (including project-linked pages) for static generation */
export function getAllCaseStudySlugs(): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

export function getCaseStudyBySlug(slug: string) {
  const filepath = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as CaseStudyMeta, content };
}
