import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies — Medha Ojha",
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-ink mb-4">Case Studies</h1>
        <p className="font-sans text-muted text-lg leading-relaxed max-w-xl">
          Strategy and consulting work — industry analyses, market entry
          frameworks, and the thinking behind the recommendations.
        </p>
      </div>

      {studies.length === 0 ? (
        <p className="font-sans text-muted">Case studies coming soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      )}
    </div>
  );
}
