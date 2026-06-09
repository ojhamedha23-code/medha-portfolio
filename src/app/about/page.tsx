import Button from "@/components/ui/Button";
import SketchIllustration from "@/components/illustrations/SketchIllustration";
import Image from "next/image";

export const metadata = {
  title: "About — Medha Ojha",
};

const expertiseItems = [
  {
    title: "Product Management",
    desc: "I combine business needs, tech, and design in order to build products that are valuable, feasible, and usable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="10" height="10" rx="1.5" />
        <rect x="15" y="3" width="10" height="10" rx="1.5" />
        <rect x="3" y="15" width="10" height="10" rx="1.5" />
        <rect x="15" y="15" width="10" height="10" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Customer Research",
    desc: "I work on identifying the right problems to solve so that we build something that our customers will love.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="11" r="5.5" />
        <line x1="16.5" y1="16.5" x2="24" y2="24" strokeLinecap="round" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
  },
  {
    title: "MVPs",
    desc: "I create lean, highly effective MVP experiments. Testing with real people against actual problems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <polyline points="15,3 10,15 14,15 13,25 18,13 14,13" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "No Code Prototyping",
    desc: "I use no-code tools to prototype and iterate in a fraction of the time and cost compared to traditional methods.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <polyline points="9,8 3,14 9,20" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="19,8 25,14 19,20" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="6" x2="12" y2="22" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Strategy and Execution",
    desc: "I design strategies for clients and lay out implementation plans, tracking outcomes, and adapting fast when the ground reality shifts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="14" cy="14" r="11" />
        <circle cx="14" cy="14" r="6" />
        <circle cx="14" cy="14" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero band */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10 flex flex-col sm:flex-row gap-12 items-center">
        {/* Sketch */}
        <div className="flex-shrink-0 w-[140px] sm:w-[180px]">
          <SketchIllustration className="w-full h-auto" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h1 className="font-serif text-4xl text-ink tracking-tight mb-5">About me</h1>
          <p className="font-sans text-lg text-ink/75 leading-relaxed mb-4 max-w-xl">
            I bring experience of working as a product manager and consulting
            across three very different industries: financial markets,
            consulting, and B2B AI-native products.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed max-w-xl">
            Pivots are not a barrier for me. They&apos;re how I&apos;ve learned
            to stay curious and work with people from diverse backgrounds. I
            enjoy bringing people together towards a shared vision, both in
            personal and professional worlds, and that&apos;s where I see
            myself in the coming years as a product leader.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Expertise */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-ink mb-6">Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseItems.map(({ title, desc, icon }) => (
              <div key={title} className="p-5 border border-ink/10 rounded-xl bg-white shadow-card flex flex-col gap-3">
                <div className="text-ink/70">{icon}</div>
                <div>
                  <h3 className="font-serif text-lg text-ink mb-1">{title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
                summary: "Taught me how to work with, and through, difference. A cohort of 70+ nationalities is not just a stat; it shaped how I frame problems, challenge assumptions, and find solutions that hold up across contexts.",
                logo: "/images/insead-logo.svg",
                logoAlt: "INSEAD",
              },
              {
                degree: "Post Graduate Diploma in Liberal Arts Education",
                school: "Ashoka University · Young India Fellowship",
                location: "Sonipat, India",
                date: "2019 – 2020",
                summary: "Turned me from an engineer into an operator. Stepping into a completely new field and doing real implementation work made me far more comfortable with ambiguity, change, and figuring things out from scratch.",
                logo: "/images/ashoka-logo.png",
                logoAlt: "Ashoka University",
              },
              {
                degree: "B.Tech, Electrical & Electronics Engineering",
                school: "Vellore Institute of Technology",
                location: "Chennai, India",
                date: "2013 – 2017",
                summary: "Set the technical foundation: how to think rigorously, break down systems, and build things that work.",
                logo: "/images/vit-logo.png",
                logoAlt: "VIT",
              },
            ].map(({ degree, school, location, date, summary, logo, logoAlt }) => (
              <div key={school} className="p-5 border border-ink/10 rounded-xl bg-white shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    {/* Fixed-size logo container so all three align consistently */}
                    <div className="flex-shrink-0 w-20 h-12 flex items-center">
                      <Image
                        src={logo}
                        alt={logoAlt}
                        width={80}
                        height={48}
                        unoptimized
                        className="object-contain object-left w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ink">{degree}</h3>
                      <p className="font-sans text-sm font-medium text-burgundy mt-0.5">
                        {school} · {location}
                      </p>
                    </div>
                  </div>
                  <span className="font-sans text-xs text-muted whitespace-nowrap sm:ml-4 sm:mt-1">{date}</span>
                </div>
                <p className="font-sans text-sm text-muted leading-relaxed mt-3 pt-3 border-t border-ink/8">
                  {summary}
                </p>
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
