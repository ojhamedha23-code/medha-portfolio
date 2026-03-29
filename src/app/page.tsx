import Hero from "@/components/home/Hero";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";
import { getAllCaseStudies } from "@/lib/case-studies";
import Link from "next/link";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const caseStudies = getAllCaseStudies().slice(0, 2);

  return (
    <>
      {/* ── 1. Hero — warm cream ─────────────────────────── */}
      <Hero />

      {/* ── 2. Featured Projects — pure white ────────────── */}
      <section className="bg-white border-y border-ink/8">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-serif text-2xl text-ink">Projects</h2>
            <Link href="/projects" className="text-xs font-sans text-muted hover:text-ink transition-colors">
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Case Studies — deep ink ───────────────────── */}
      {caseStudies.length > 0 && (
        <section className="bg-ink">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-serif text-2xl text-paper">Strategy & Consulting</h2>
              <Link href="/case-studies" className="text-xs font-sans text-paper/50 hover:text-paper transition-colors">
                All case studies →
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {caseStudies.map((study) => (
                <div key={study.slug} className="[&_*]:!border-paper/10 [&_.shadow-card]:shadow-none">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="flex flex-col sm:flex-row bg-white/5 border border-paper/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-200 group"
                  >
                    {study.previewImage && (
                      <div className="sm:w-56 sm:flex-shrink-0 h-40 sm:h-auto relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={study.previewImage}
                          alt={study.title}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        {study.context && (
                          <p className="font-sans text-[10px] text-paper/40 uppercase tracking-widest mb-2">
                            {study.context}
                          </p>
                        )}
                        <h3 className="font-serif text-lg text-paper mb-2 group-hover:text-paper/80 transition-colors leading-snug">
                          {study.title}
                        </h3>
                        <p className="font-sans text-sm text-paper/55 leading-relaxed">
                          {study.summary}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-paper/10">
                        <span className="text-xs font-sans text-paper/40 group-hover:text-paper/70 transition-colors">
                          Read case study →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. About strip — blush ───────────────────────── */}
      <section className="bg-blush border-y border-ink/8">
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
