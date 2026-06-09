const values = [
  {
    title: "Range compounds",
    body: "Each pivot added a layer I still use. Engineering taught me how systems break. Finance showed me that constraints are real. Consulting taught me how organisations actually move. AI taught me to ship. None of it was wasted.",
  },
  {
    title: "Right problem first",
    body: "Most of the work happens before the spec. I invest heavily in understanding what's actually broken — sitting with the data, talking to the people affected — before jumping to answers. Wrong problem, wrong product. Every time.",
  },
  {
    title: "Something real, sooner",
    body: "A working prototype in front of a real user teaches you more than three weeks of planning. I have a strong bias for getting something tangible into the world quickly, then iterating from evidence rather than assumption.",
  },
  {
    title: "The PM as translator",
    body: "The job is making sure the customer's reality reaches the engineer, and the engineer's constraints reach the customer. That translation — done consistently and without distortion — is what separates products that ship from ones that don't.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white border-y border-ink/8">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-serif text-2xl text-ink mb-12">My values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-10">
          {values.map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-serif text-lg text-ink mb-3">{title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
