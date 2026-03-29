import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "About — Medha Ojha",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header with photo */}
      <div className="flex flex-col sm:flex-row gap-10 items-start mb-16">
        <div className="flex-1">
          <h1 className="font-serif text-4xl text-ink mb-6">About</h1>
          <p className="font-sans text-xl text-muted leading-relaxed mb-4">
            Strategy consulting and product management professional with 7+
            years&apos; experience across AI startups, finance and social impact
            sectors.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed">
            Currently pursuing an MBA at INSEAD, gaining a global business
            perspective to build and implement scalable strategies in emerging
            markets.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/medha-ojha.jpg"
            alt="Medha Ojha"
            width={220}
            height={280}
            className="rounded-xl object-cover shadow-sm"
          />
        </div>
      </div>

      {/* Education */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-ink mb-6">Education</h2>
        <div className="flex flex-col gap-5">
          {[
            {
              degree: "MBA, Class of July 2026",
              school: "INSEAD",
              location: "Singapore",
              date: "2025 – present",
              bullets: [
                "President, Women in Business Club — leading a team of 12 to design and deliver networking and mentorship programs",
                "Grab Product Games 2025 — proposed a fintech product for APAC markets with validated business case and working prototype",
                "Built a talent risk management ML model to identify attrition patterns and estimate $8–12M in potential annual HR cost savings",
              ],
            },
            {
              degree: "Post Graduate Diploma in Liberal Arts Education",
              school: "Ashoka University",
              location: "Sonipat, India",
              date: "2019 – 2020",
              bullets: [
                "Outstanding Project Award for a user-insights driven strategic plan to launch an Agri-financing product across 344 locations",
              ],
            },
            {
              degree: "B.Tech, Electrical & Electronics Engineering",
              school: "Vellore Institute of Technology",
              location: "Chennai, India",
              date: "2013 – 2017",
              bullets: [
                "Led a 25-member All-Terrain Vehicle engineering team, securing top 10 rank at BAJA SAE USA for business presentation",
              ],
            },
          ].map(({ degree, school, location, date, bullets }) => (
            <div
              key={school}
              className="p-5 border border-muted/20 rounded-xl bg-white"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-serif text-lg text-ink">{degree}</h3>
                  <p className="font-sans text-sm font-medium text-burgundy">
                    {school} · {location}
                  </p>
                </div>
                <span className="font-sans text-sm text-muted whitespace-nowrap">
                  {date}
                </span>
              </div>
              <ul className="space-y-1">
                {bullets.map((b, i) => (
                  <li key={i} className="font-sans text-sm text-muted flex gap-2">
                    <span className="text-burgundy mt-0.5">–</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-ink mb-6">What I do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              title: "Product Management",
              desc: "0-to-1 product development, AI agent deployment, cross-functional team leadership, and product demos to senior stakeholders.",
            },
            {
              title: "Strategy & Consulting",
              desc: "Scale-up strategy, impact assessment frameworks, and stakeholder alignment across governments, non-profits, and corporates.",
            },
            {
              title: "Data & Research",
              desc: "ML models, LLM evaluation, KPI frameworks, and user insights research across large populations.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-5 border border-muted/20 rounded-xl bg-white"
            >
              <h3 className="font-serif text-lg text-ink mb-2">{title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional */}
      <section className="mb-16 p-5 border border-muted/20 rounded-xl bg-white">
        <h2 className="font-serif text-xl text-ink mb-3">Additional</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-sm text-muted">
          <p><span className="text-ink font-medium">Languages:</span> Hindi (Native), English (Fluent)</p>
          <p><span className="text-ink font-medium">Nationality:</span> Indian</p>
          <p><span className="text-ink font-medium">Technical Skills:</span> ML models, AI product management, LLM evaluation</p>
          <p><span className="text-ink font-medium">Interests:</span> Cultural food tours, yoga, Indian folk dancing</p>
        </div>
      </section>

      {/* Resume */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-blush rounded-xl">
        <div className="flex-1">
          <h3 className="font-serif text-lg text-ink mb-1">Download my CV</h3>
          <p className="font-sans text-sm text-muted">
            Full work history, education, and experience.
          </p>
        </div>
        <Button href="/resume.pdf" download="Medha_Ojha_CV.pdf">
          Download CV
        </Button>
      </section>
    </div>
  );
}
