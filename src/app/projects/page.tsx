import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Medha Ojha",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-ink mb-4">Work</h1>
        <p className="font-sans text-muted text-lg leading-relaxed max-w-xl">
          Products I&apos;ve built and shipped — from zero-to-one AI agents to
          personal tools. Each one comes with a case study.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
