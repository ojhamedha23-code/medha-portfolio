const values = [
  {
    title: "Range Is the Strategy, Not the Story",
    body: "Three industries, seven years, zero regrets. Every pivot added a lens I still use: engineering rigour from VIT, how organisations actually move from consulting, and what it takes to ship from AI. Most people treat range as something to explain away. I treat it as the point.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="6" width="22" height="5" rx="1.5" />
        <rect x="3" y="14" width="16" height="5" rx="1.5" />
        <rect x="3" y="22" width="10" height="4" rx="1.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Talk to the Person, Not the Persona",
    body: "Assumptions make expensive roadmaps. I spend disproportionate time with the people who actually have the problem before writing a single spec — not to confirm what I already think, but to be surprised by what I didn't expect to find.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="14" cy="9" r="5" />
        <path d="M 4 24 Q 4 18 14 18 Q 24 18 24 24" strokeLinecap="round" />
        <path d="M 20 8 Q 24 8 24 12 Q 24 15 21 15 L 20 18 L 19 15 Q 16 15 16 12" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Get It in Front of Someone Real",
    body: "Planning in a vacuum is the fastest way to build the wrong thing confidently. I have a strong bias for getting something tangible into the world quickly — a prototype, a pilot, anything — so feedback comes from evidence, not opinion.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <path d="M 6 14 L 11 19 L 22 8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="11" />
      </svg>
    ),
  },
  {
    title: "Complexity Is a Choice",
    body: "Most products fail not because they didn't do enough, but because they tried to do too much. I obsess over what to cut as much as what to build. If a feature doesn't clearly earn its place, it probably doesn't belong.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <line x1="8" y1="8" x2="20" y2="20" strokeLinecap="round" />
        <line x1="20" y1="8" x2="8" y2="20" strokeLinecap="round" />
        <circle cx="14" cy="14" r="11" />
      </svg>
    ),
  },
  {
    title: "The PM Is a Translator, Not a Manager",
    body: "The job is making sure the customer's reality reaches the engineer, and the engineering constraints reach the customer. That translation — consistent and without distortion — is what separates products that ship from products that stall.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <path d="M 4 10 L 14 10 L 14 6 L 24 14 L 14 22 L 14 18 L 4 18 Z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Context Over Framework",
    body: "I'm sceptical of universal playbooks. What works for a B2B SaaS in Singapore doesn't always apply to a logistics startup in rural India. I try to understand each situation deeply enough to know which rules apply — and which ones are just cargo cult.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="14" cy="12" r="5" />
        <path d="M 14 17 L 14 26" strokeLinecap="round" />
        <path d="M 9 26 Q 14 22 19 26" strokeLinecap="round" />
        <circle cx="14" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white border-y border-ink/8">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="font-serif text-2xl text-ink mb-12">My values</h2>
        <div className="flex flex-col gap-10">
          {values.map(({ title, body, icon }) => (
            <div key={title} className="flex gap-6 items-start">
              <div className="flex-shrink-0 text-ink/60 mt-0.5">{icon}</div>
              <div>
                <h3 className="font-serif text-lg text-ink mb-2">{title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
