"use client";

import Link from "next/link";
import Image from "next/image";
import Tag from "@/components/ui/Tag";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-white border border-ink/10 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200 group">
      {/* Photo area */}
      <div className="relative h-52 bg-blush overflow-hidden flex-shrink-0">
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={project.title}
            fill
            unoptimized={project.previewImage.endsWith(".svg")}
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-blush" />
        )}

        {/* Website link — top-right pill overlay */}
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-paper/90 backdrop-blur-sm border border-ink/10 rounded-full text-xs font-sans font-medium text-ink hover:bg-paper hover:border-ink/20 transition-all shadow-sm"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-serif text-lg text-ink leading-snug">{project.title}</h3>

        <p className="font-sans text-sm text-muted leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-ink/8 flex flex-wrap items-center justify-between gap-3">
          {project.caseStudySlug ? (
            <Link
              href={`/case-studies/${project.caseStudySlug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper text-xs font-sans font-medium rounded-lg hover:bg-ink/85 transition-colors shadow-sm"
            >
              Learn More
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-4">
            {project.socialProofUrl && (
              <a
                href={project.socialProofUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-muted hover:text-ink transition-colors"
              >
                LinkedIn post →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-muted hover:text-ink transition-colors"
              >
                GitHub →
              </a>
            )}
            {project.downloadFile && (
              <a
                href={project.downloadFile}
                download
                className="text-xs font-sans text-muted hover:text-ink transition-colors"
              >
                Download →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
