import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Medha Ojha",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-ink mb-4">Projects</h1>
        <p className="font-sans text-muted text-lg leading-relaxed max-w-xl">
          Things I&apos;ve built — tools, games, and experiments. Some are
          polished products, some are just for fun.
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
