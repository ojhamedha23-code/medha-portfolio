import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CaseStudyMeta } from "@/types";

const dir = path.join(process.cwd(), "content/case-studies");

export function getAllCaseStudies(): CaseStudyMeta[] {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf8");
      const { data } = matter(raw);
      return { slug, ...data } as CaseStudyMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudyBySlug(slug: string) {
  const filepath = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as CaseStudyMeta, content };
}
