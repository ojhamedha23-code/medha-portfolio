const entries = [
  {
    period: "2013 – 2017",
    title: "B.Tech, Electrical & Electronics · VIT",
    body: "Set the technical foundation. Rigorous problem-solving and systems thinking — the kind you can't unlearn.",
    current: false,
  },
  {
    period: "2017 – 2019",
    title: "Financial Markets",
    body: "First pivot. Learned how capital moves, how decisions get made under uncertainty, and how much rigour actually matters when the stakes are real.",
    current: false,
  },
  {
    period: "2019 – 2020",
    title: "Young India Fellowship · Ashoka University",
    body: "Turned from an engineer into an operator. Stepped into a completely new field, did real implementation work, got comfortable with ambiguity.",
    current: false,
  },
  {
    period: "2020 – 2024",
    title: "Strategy & Consulting",
    body: "Designed strategies for clients across sectors, laid out implementation plans, and learned how to move organisations. Where product thinking and business thinking converged.",
    current: false,
  },
  {
    period: "2024 – 2025",
    title: "Product Manager · Adya AI",
    body: "Built a Voice AI product from zero to one. Shipped to 15+ enterprise clients, converted 4 to paying pilots. The clearest proof that I can take something from idea to market.",
    current: false,
  },
  {
    period: "2025 – present",
    title: "MBA · INSEAD",
    body: "Adding the strategic and cross-cultural layer. A cohort of 70+ nationalities. Learning to lead across difference.",
    current: true,
  },
];

export default function CareerTimeline() {
  return (
    <section className="bg-paper border-y border-ink/8">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="font-serif text-2xl text-ink mb-2">The route here</h2>
          <p className="font-sans text-sm text-muted">Not a straight line. Deliberately so.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] sm:left-[calc(160px+7px)] top-2 bottom-2 w-px bg-ink/10" />

          <div className="flex flex-col gap-0">
            {entries.map(({ period, title, body, current }, i) => (
              <div key={i} className="relative flex flex-col sm:flex-row gap-0 sm:gap-0 pb-10 last:pb-0">
                {/* Period label — desktop left column */}
                <div className="hidden sm:block w-40 flex-shrink-0 pt-0.5 pr-8 text-right">
                  <span className="font-sans text-xs text-muted tabular-nums">{period}</span>
                </div>

                {/* Dot */}
                <div className="absolute left-0 sm:left-[160px] top-1 w-[15px] h-[15px] flex items-center justify-center flex-shrink-0">
                  <div
                    className={`w-[9px] h-[9px] rounded-full ring-2 ring-paper ${
                      current
                        ? "bg-burgundy"
                        : "bg-ink/20"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="pl-7 sm:pl-8 flex-1">
                  {/* Period label — mobile only */}
                  <span className="sm:hidden font-sans text-xs text-muted block mb-1">{period}</span>
                  <h3 className="font-serif text-base text-ink mb-1">{title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
