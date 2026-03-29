import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/ui/Tag";
import { CaseStudyMeta } from "@/types";

interface CaseStudyCardProps {
  study: CaseStudyMeta;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="flex flex-col sm:flex-row bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200 group"
    >
      {/* Thumbnail */}
      {study.previewImage && (
        <div className="sm:w-64 sm:flex-shrink-0 h-48 sm:h-auto relative overflow-hidden bg-ink/5">
          <Image
            src={study.previewImage}
            alt={study.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          {study.context && (
            <p className="font-sans text-[10px] text-muted uppercase tracking-widest mb-3">
              {study.context}
            </p>
          )}
          <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-burgundy transition-colors leading-snug">
            {study.title}
          </h3>
          <p className="font-sans text-sm text-muted leading-relaxed mb-4">
            {study.summary}
          </p>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-ink/8">
          <div className="flex flex-wrap gap-1.5">
            {study.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <span className="text-xs font-sans text-ink/50 group-hover:text-burgundy transition-colors ml-4 whitespace-nowrap">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}
