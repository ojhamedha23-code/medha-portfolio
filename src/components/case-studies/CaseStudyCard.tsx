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
      className="block border border-muted/20 rounded-xl bg-white hover:shadow-md hover:border-burgundy/30 transition-all duration-200 group overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Thumbnail */}
        {study.previewImage && (
          <div className="sm:w-56 sm:flex-shrink-0 h-40 sm:h-auto relative overflow-hidden bg-stone-100">
            <Image
              src={study.previewImage}
              alt={study.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            {study.context && (
              <p className="font-sans text-xs text-muted uppercase tracking-wide mb-2">
                {study.context}
              </p>
            )}
            <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-burgundy transition-colors">
              {study.title}
            </h3>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              {study.summary}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
            <span className="text-sm font-sans text-burgundy">Read →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
