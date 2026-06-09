const values = [
  {
    title: "Make It Work, Then Make It Beautiful",
    body: "Impact comes from solving real problems. I focus on delivering solutions that meet user needs and drive business results. Then I elevate them into experiences that feel seamless, meaningful, and human.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.3}>
        {/* Sunflower / bloom */}
        <circle cx="20" cy="20" r="6"/>
        <line x1="20" y1="4" x2="20" y2="10" strokeLinecap="round"/>
        <line x1="20" y1="30" x2="20" y2="36" strokeLinecap="round"/>
        <line x1="4" y1="20" x2="10" y2="20" strokeLinecap="round"/>
        <line x1="30" y1="20" x2="36" y2="20" strokeLinecap="round"/>
        <line x1="8.7" y1="8.7" x2="13" y2="13" strokeLinecap="round"/>
        <line x1="27" y1="27" x2="31.3" y2="31.3" strokeLinecap="round"/>
        <line x1="31.3" y1="8.7" x2="27" y2="13" strokeLinecap="round"/>
        <line x1="13" y1="27" x2="8.7" y2="31.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Let Users Be the GPS, Not a Checkbox",
    body: "Assumptions make risky roadmaps. I prioritize real user insights to reduce uncertainty, uncover unmet needs, and build products that solve the right problems. Research is not a formality. It's the foundation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.3}>
        {/* Compass arrow + person */}
        <path d="M 8 28 L 8 18 Q 8 14 12 14 L 20 14" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 20 14 L 28 8" strokeLinecap="round"/>
        <path d="M 28 8 L 32 18" strokeLinecap="round"/>
        <circle cx="28" cy="8" r="3"/>
        <rect x="14" y="24" width="12" height="9" rx="2"/>
        <circle cx="20" cy="20" r="3"/>
      </svg>
    ),
  },
  {
    title: "Technology Serves People",
    body: "Technology is a tool, not the end goal. I focus on designing AI-powered solutions that respect human context, solve meaningful problems, and drive real value without losing the human thread.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.3}>
        {/* Open hand with stars */}
        <path d="M 10 30 Q 8 26 12 24 L 22 24 Q 26 24 28 20 L 30 14" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 12 24 L 14 18" strokeLinecap="round"/>
        <path d="M 16 24 L 17 17" strokeLinecap="round"/>
        <path d="M 20 24 L 20 17" strokeLinecap="round"/>
        <circle cx="16" cy="11" r="2" opacity="0.7"/>
        <circle cx="24" cy="9" r="1.5" opacity="0.5"/>
        <circle cx="30" cy="13" r="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "If It's Not Instantly Clear, Simplify It",
    body: "Complexity confuses. Clarity converts. I distill decisions, features, and flows down to what users actually need. When things make sense instantly, people trust and adopt more quickly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.3}>
        {/* Magnifying glass over document */}
        <rect x="6" y="8" width="20" height="26" rx="2"/>
        <line x1="10" y1="14" x2="22" y2="14" strokeLinecap="round"/>
        <line x1="10" y1="19" x2="22" y2="19" strokeLinecap="round"/>
        <line x1="10" y1="24" x2="18" y2="24" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="7"/>
        <line x1="33.5" y1="33.5" x2="37" y2="37" strokeLinecap="round" strokeWidth={1.8}/>
      </svg>
    ),
  },
  {
    title: "Don't Just Throw Spaghetti at a Wall",
    body: "Great products aren't built on guesswork. I start with clear hypotheses, then test, learn, and iterate with purpose. Every feature earns its place by solving a real problem or driving measurable value.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.3}>
        {/* Fork + hypothesis/test */}
        <line x1="14" y1="6" x2="14" y2="22" strokeLinecap="round"/>
        <line x1="10" y1="6" x2="10" y2="14" strokeLinecap="round"/>
        <line x1="18" y1="6" x2="18" y2="14" strokeLinecap="round"/>
        <path d="M 10 14 Q 14 18 18 14" strokeLinecap="round" fill="none"/>
        {/* Target circle on right */}
        <circle cx="28" cy="22" r="10"/>
        <circle cx="28" cy="22" r="6"/>
        <circle cx="28" cy="22" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "Part of a Crew",
    body: "No product moves forward alone. I create shared context across teams, bridge the gap between ideas and execution, and help each contributor do their best work. Collaboration isn't just process. It's product strategy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 40 40" stroke="currentColor" strokeWidth={1.3}>
        {/* Anchor */}
        <circle cx="20" cy="11" r="4"/>
        <line x1="20" y1="15" x2="20" y2="34" strokeLinecap="round"/>
        <path d="M 10 20 L 20 20 L 30 20" strokeLinecap="round"/>
        <path d="M 11 34 Q 11 28 20 28 Q 29 28 29 34" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white border-y border-ink/8">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-serif text-2xl text-ink mb-10">My values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map(({ title, body, icon }) => (
            <div
              key={title}
              className="p-6 border border-ink/10 rounded-2xl bg-white shadow-card flex flex-col gap-4"
            >
              <div className="text-ink/55">{icon}</div>
              <div>
                <h3 className="font-sans text-[11px] font-semibold tracking-widest uppercase text-ink mb-3">
                  {title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
