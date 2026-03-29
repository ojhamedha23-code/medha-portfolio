import Hero from "@/components/home/Hero";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-ink/10" />
      </div>

      {/* Featured projects */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl text-ink">Featured Work</h2>
          <Link href="/projects" className="text-xs font-sans text-muted hover:text-ink transition-colors">
            All projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="border-y border-ink/8 bg-blush/60">
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-xl text-ink mb-2">About me</h2>
            <p className="font-sans text-sm text-muted max-w-sm leading-relaxed">
              Strategy & product across AI, finance, and social impact.
              Currently at INSEAD, Singapore.
            </p>
          </div>
          <Link
            href="/about"
            className="text-sm font-sans font-medium text-ink hover:text-burgundy transition-colors whitespace-nowrap"
          >
            Read more →
          </Link>
        </div>
      </section>
    </>
  );
}
