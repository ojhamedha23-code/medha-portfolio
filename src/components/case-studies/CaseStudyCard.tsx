import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { CaseStudyMeta } from "@/types";

interface CaseStudyCardProps {
  study: CaseStudyMeta;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="block p-6 border border-muted/20 rounded-xl bg-white hover:shadow-md hover:border-burgundy/30 transition-all duration-200 group"
    >
      <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-burgundy transition-colors">
        {study.title}
      </h3>
      <p className="font-sans text-sm text-muted leading-relaxed mb-4">
        {study.summary}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <span className="text-sm font-sans text-burgundy">Read →</span>
      </div>
    </Link>
  );
}
