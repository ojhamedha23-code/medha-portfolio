import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const { meta } = getCaseStudyBySlug(params.slug);
    return { title: `${meta.title} — Medha Ojha` };
  } catch {
    return { title: "Case Study — Medha Ojha" };
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  let data;
  try {
    data = getCaseStudyBySlug(params.slug);
  } catch {
    notFound();
  }

  const { meta, content } = data!;
  const isRecruitmentTracker = params.slug === "recruitment-tracker";
  const isAttritionML = params.slug === "hr-attrition-ml";
  const isConsulting = meta.showInListing === true || meta.showInListing === undefined && !isRecruitmentTracker && !isAttritionML;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Back link for consulting case studies */}
      {isConsulting && (
        <a href="/case-studies" className="inline-flex items-center gap-1 text-sm font-sans text-muted hover:text-burgundy transition-colors mb-8">
          ← Case Studies
        </a>
      )}

      {/* Header */}
      <div className="mb-10">
        {meta.context && (
          <p className="font-sans text-xs text-muted uppercase tracking-widest mb-3">
            {meta.context}
          </p>
        )}
        <h1 className="font-serif text-4xl text-ink mb-4">{meta.title}</h1>
        <p className="font-sans text-lg text-muted leading-relaxed max-w-2xl mb-6">
          {meta.summary}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {meta.tags.map((tag: string) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>

      {/* Download + Preview buttons */}
      {isRecruitmentTracker && (
        <div className="flex flex-wrap gap-3 mb-12">
          <Button
            href="/recruitment-tracker.html"
            download="RecruitmentTracker_MedhaOjha.html"
          >
            Download Tracker
          </Button>
          <Button
            href="/recruitment-tracker.html"
            variant="outline"
            external
          >
            Preview Dashboard ↗
          </Button>
        </div>
      )}

      {/* Iframe preview */}
      {isRecruitmentTracker && (
        <div className="mb-12">
          <h2 className="font-serif text-2xl text-ink mb-4">Live Preview</h2>
          <div className="border border-muted/20 rounded-xl overflow-hidden shadow-sm">
            <iframe
              src="/recruitment-tracker.html"
              className="w-full h-[700px]"
              title="Recruitment Tracker Preview"
            />
          </div>
          <p className="text-xs font-sans text-muted mt-2 text-center">
            Live preview — download to use it fully in your browser.
          </p>
        </div>
      )}

      {/* GitHub button for ML project */}
      {isAttritionML && (
        <div className="flex flex-wrap gap-3 mb-12">
          <Button
            href="https://github.com/ojhamedha23-code/hr-attrition-prediction"
            external
          >
            View on GitHub
          </Button>
        </div>
      )}

      {/* MDX content */}
      <div className="border-t border-ink/10 pt-10 prose prose-neutral max-w-none font-sans prose-headings:font-serif prose-a:text-burgundy prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </div>
  );
}
