import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "About — Medha Ojha",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="flex flex-col sm:flex-row gap-12 items-start mb-20">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative w-[180px] h-[220px]">
            <Image
              src="/images/medha-ojha.jpg"
              alt="Medha Ojha"
              fill
              className="object-cover object-top rounded-2xl mix-blend-multiply"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 pt-1">
          <h1 className="font-serif text-4xl text-ink tracking-tight mb-5">About me</h1>
          <p className="font-sans text-lg text-ink/80 leading-relaxed mb-4 max-w-xl">
            I&apos;ve spent my career building things at the edges — where
            technology meets people, where strategy meets implementation, and
            where emerging markets meet global capital.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed max-w-xl mb-4">
            I started as an engineer, moved into social impact, then into
            AI product management, and now into consulting and strategy. Each
            step taught me something the others couldn&apos;t.
          </p>
          <p className="font-sans text-base text-muted leading-relaxed max-w-xl">
            At INSEAD, I&apos;m pulling all of that together — and building things
            on the side to stay sharp.
          </p>
        </div>
      </div>

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
              className="p-5 border border-ink/10 rounded-xl bg-white shadow-card"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-serif text-lg text-ink">{degree}</h3>
                  <p className="font-sans text-sm font-medium text-burgundy mt-0.5">
                    {school} · {location}
                  </p>
                </div>
                <span className="font-sans text-xs text-muted whitespace-nowrap mt-1">
                  {date}
                </span>
              </div>
              <ul className="space-y-1.5 mt-3 pt-3 border-t border-ink/8">
                {bullets.map((b, i) => (
                  <li key={i} className="font-sans text-sm text-muted flex gap-2.5">
                    <span className="text-burgundy mt-0.5 flex-shrink-0">–</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
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
              className="p-5 border border-ink/10 rounded-xl bg-white shadow-card"
            >
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
