import Button from "@/components/ui/Button";
import SketchIllustration from "@/components/illustrations/SketchIllustration";

export const metadata = {
  title: "About — Medha Ojha",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero band ────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10 flex flex-col sm:flex-row gap-12 items-center">
        {/* Sketch */}
        <div className="flex-shrink-0 w-[140px] sm:w-[180px]">
          <SketchIllustration className="w-full h-auto" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h1 className="font-serif text-4xl text-ink tracking-tight mb-5">About me</h1>
          <p className="font-sans text-lg text-ink/75 leading-relaxed mb-4 max-w-xl">
            I sit at the intersection of technology, people management, and
            strategy, and I&apos;ve built that combination deliberately across
            three very different industries: finance, consulting, and AI
            product.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed max-w-xl">
            Pivots are not a barrier for me. They&apos;re how I&apos;ve
            learned. Each industry shift added a layer: engineering rigour,
            on-the-ground implementation, product thinking, and now at INSEAD,
            the strategic and cross-cultural muscle that comes from working
            alongside people from 70+ nationalities. I enjoy bringing people
            together, both in personal and professional worlds, and that&apos;s
            where I see myself in the coming years as a product leader.
          </p>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Education */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-ink mb-6">Education</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                degree: "MBA, Class of July 2026",
                school: "INSEAD",
                location: "Singapore",
                date: "2025 – present",
                summary: "Taught me how to work with — and through — difference. A cohort of 70+ nationalities is not just a stat; it shaped how I frame problems, challenge assumptions, and find solutions that hold up across contexts.",
              },
              {
                degree: "Post Graduate Diploma in Liberal Arts Education",
                school: "Ashoka University · Young India Fellowship",
                location: "Sonipat, India",
                date: "2019 – 2020",
                summary: "Turned me from an engineer into an operator. Stepping into a completely new field and doing real implementation work made me far more comfortable with ambiguity, change, and figuring things out from scratch.",
              },
              {
                degree: "B.Tech, Electrical & Electronics Engineering",
                school: "Vellore Institute of Technology",
                location: "Chennai, India",
                date: "2013 – 2017",
                summary: "Set the technical foundation — how to think rigorously, break down systems, and build things that work.",
              },
            ].map(({ degree, school, location, date, summary }) => (
              <div key={school} className="p-5 border border-ink/10 rounded-xl bg-white shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-serif text-lg text-ink">{degree}</h3>
                    <p className="font-sans text-sm font-medium text-burgundy mt-0.5">
                      {school} · {location}
                    </p>
                  </div>
                  <span className="font-sans text-xs text-muted whitespace-nowrap mt-1">{date}</span>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed mt-3 pt-3 border-t border-ink/8">
                  {summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What I do */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-ink mb-6">What I do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Product Management",
                desc: "I've taken products from 0 to 1, working with cross-functional teams to define specs, run user research, and ship to real users. I'm comfortable owning a roadmap end-to-end and presenting to senior stakeholders.",
              },
              {
                title: "Strategy & Implementation",
                desc: "I've designed and executed scale-up strategies for social enterprises and government programmes — building the implementation plan, tracking outcomes, and adapting fast when the ground reality shifts.",
              },
              {
                title: "Client & Stakeholder Management",
                desc: "I've managed relationships across governments, corporate clients, vendors, and project implementation partners — translating between technical teams and decision-makers, and keeping complex multi-party programmes on track.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="p-5 border border-ink/10 rounded-xl bg-white shadow-card">
                <h3 className="font-serif text-lg text-ink mb-2">{title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CV download */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-blush rounded-2xl border border-ink/8">
          <div className="flex-1">
            <h3 className="font-serif text-lg text-ink mb-1">Download my CV</h3>
            <p className="font-sans text-sm text-muted">Full work history, education, and experience.</p>
          </div>
          <Button href="/resume.pdf" download="Medha_Ojha_CV.pdf">
            Download CV
          </Button>
        </section>
      </div>
    </>
  );
}
