import Hero from "@/components/home/Hero";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <div className="max-w-4xl mx-auto px-6">
        <hr className="border-muted/20" />
      </div>

      {/* Featured projects */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl text-ink">Featured Work</h2>
          <Link
            href="/projects"
            className="text-sm font-sans text-burgundy hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-blush">
        <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl text-ink mb-2">About me</h2>
            <p className="font-sans text-muted max-w-md leading-relaxed">
              MBA student, builder, and product enthusiast. I care about making
              things that actually solve problems.
            </p>
          </div>
          <Link
            href="/about"
            className="text-sm font-sans font-medium text-burgundy hover:underline whitespace-nowrap"
          >
            Read more →
          </Link>
        </div>
      </section>
    </>
  );
}
