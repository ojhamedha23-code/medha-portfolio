const steps = [
  {
    number: "01",
    title: "Discover",
    body: "Start with the problem, not the solution. I spend disproportionate time with customers and data before writing a single spec — because building the wrong thing always costs more than an extra week of research.",
  },
  {
    number: "02",
    title: "Define",
    body: "Translate customer pain into a direction the whole team can build towards. That means ruthless prioritisation, a clear success metric, and a spec that survives first contact with engineering.",
  },
  {
    number: "03",
    title: "Ship",
    body: "Iterate fast and close the loop. An MVP in front of real users in week 3 beats a perfect spec in week 12. I run tight feedback loops and adapt quickly when the ground shifts.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white border-y border-ink/8">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="font-serif text-2xl text-ink mb-2">How I work</h2>
          <p className="font-sans text-sm text-muted">
            The same loop, regardless of industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {steps.map(({ number, title, body }) => (
            <div key={number}>
              <span className="font-serif text-4xl text-burgundy opacity-30 leading-none block mb-4">
                {number}
              </span>
              <h3 className="font-serif text-xl text-ink mb-3">{title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
