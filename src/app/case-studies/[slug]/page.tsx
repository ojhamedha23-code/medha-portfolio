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
  const isConsulting = !isRecruitmentTracker && !isAttritionML;

  /* ── Recruitment Tracker — snapshot + case study text ───────── */
  if (isRecruitmentTracker) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header row: title left, single CTA right */}
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            {meta.context && (
              <p className="font-sans text-xs text-muted uppercase tracking-widest mb-3">
                {meta.context}
              </p>
            )}
            <h1 className="font-serif text-4xl text-ink mb-3">{meta.title}</h1>
            <p className="font-sans text-lg text-muted leading-relaxed max-w-2xl">
              {meta.summary}
            </p>
          </div>
          <a
            href="https://medha-job-dashboard.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-burgundy text-paper text-sm font-sans font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap mt-1"
          >
            Visit Live Dashboard ↗
          </a>
        </div>

        {/* Dashboard snapshot */}
        <div className="mb-12 border border-ink/10 rounded-2xl overflow-hidden shadow-card">
          <img
            src="/images/recruitment-tracker-snapshot.png"
            alt="Recruitment Tracker Dashboard"
            className="w-full h-auto"
          />
        </div>

        {/* Case study text */}
        <div className="border-t border-ink/10 pt-10 prose prose-neutral max-w-none font-sans prose-headings:font-serif prose-a:text-burgundy prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </div>
    );
  }

  /* ── All other case studies ───────────────────────────────────── */
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
        <div className="flex items-start justify-between gap-6 mb-4">
          <div className="flex-1">
            {meta.context && (
              <p className="font-sans text-xs text-muted uppercase tracking-widest mb-3">
                {meta.context}
              </p>
            )}
            <h1 className="font-serif text-4xl text-ink mb-4">{meta.title}</h1>
            <p className="font-sans text-lg text-muted leading-relaxed max-w-2xl">
              {meta.summary}
            </p>
          </div>
          {meta.liveUrl && (
            <a
              href={meta.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-burgundy text-paper text-sm font-sans font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap mt-1"
            >
              {meta.liveUrlLabel ?? "View Live Demo ↗"}
            </a>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-6">
          {meta.tags.map((tag: string) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>

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

      {/* PDF download button */}
      {meta.pdfUrl && (
        <div className="flex flex-wrap gap-3 mb-12">
          <Button href={meta.pdfUrl} download external>
            Download Full Report (PDF)
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
