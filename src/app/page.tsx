import Hero from "@/components/home/Hero";
import ValuesSection from "@/components/home/ValuesSection";
import CareerTimeline from "@/components/home/CareerTimeline";

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────── */}
      <Hero />

      {/* ── 2. My Values ─────────────────────────────────── */}
      <ValuesSection />

      {/* ── 3. Career Timeline ───────────────────────────── */}
      <CareerTimeline />

      {/* ── 4. About strip ───────────────────────────────── */}
      <section className="bg-blush border-y border-ink/8">
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-xl text-ink mb-2">About me</h2>
            <p className="font-sans text-sm text-muted max-w-sm leading-relaxed">
              Strategy &amp; product across AI, finance, and social impact.
              Currently at INSEAD, Singapore.
            </p>
          </div>
          <a
            href="/about"
            className="text-sm font-sans font-medium text-ink hover:text-burgundy transition-colors whitespace-nowrap"
          >
            Read more →
          </a>
        </div>
      </section>
    </>
  );
}
