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
      {/* Photo */}
      <div className="relative h-48 bg-ink/5 overflow-hidden">
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-blush" />
        )}
      </div>

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
        <div className="pt-2 border-t border-ink/8 flex flex-wrap items-center gap-4">
          {project.caseStudySlug && (
            <Link
              href={`/case-studies/${project.caseStudySlug}`}
              className="text-xs font-sans font-medium text-ink hover:text-burgundy transition-colors"
            >
              Case study →
            </Link>
          )}
          {project.status === "live" && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-medium text-ink hover:text-burgundy transition-colors"
            >
              View on GitHub →
            </a>
          )}
          {project.downloadFile && (
            <a
              href={project.downloadFile}
              download
              className="text-xs font-sans font-medium text-ink hover:text-burgundy transition-colors"
            >
              Download →
            </a>
          )}
          {project.livePreviewUrl && (
            <a
              href={project.livePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-medium text-burgundy hover:underline underline-offset-2"
            >
              Preview live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
