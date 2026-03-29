"use client";

import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-white border border-muted/20 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Preview image placeholder */}
      <div className="h-40 bg-blush flex items-center justify-center">
        {project.previewImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.previewImage}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <span className="text-3xl">📁</span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-serif text-lg text-ink">{project.title}</h3>
        <p className="font-sans text-sm text-muted leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Action */}
        <div className="pt-1">
          {project.caseStudySlug ? (
            <Link
              href={`/case-studies/${project.caseStudySlug}`}
              className="text-sm font-sans font-medium text-burgundy hover:underline"
            >
              View Case Study →
            </Link>
          ) : project.status === "live" && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans font-medium text-burgundy hover:underline"
            >
              Open →
            </a>
          ) : project.downloadFile ? (
            <a
              href={project.downloadFile}
              download
              className="text-sm font-sans font-medium text-burgundy hover:underline"
            >
              Download →
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
