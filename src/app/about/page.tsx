import Button from "@/components/ui/Button";

export const metadata = {
  title: "About — Medha Ojha",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <h1 className="font-serif text-4xl text-ink mb-6">About</h1>
        <p className="font-sans text-xl text-muted leading-relaxed max-w-2xl">
          I&apos;m Medha — a product thinker and builder currently doing my MBA
          at INSEAD. I like making things that solve real problems, and I enjoy
          sharing the process.
        </p>
      </div>

      {/* Background */}
      <section className="mb-16 flex flex-col sm:flex-row gap-10 items-start">
        <div className="flex-1">
          <h2 className="font-serif text-2xl text-ink mb-4">Background</h2>
          <div className="font-sans text-muted leading-relaxed space-y-4">
            <p>
              {/* Update this with your real background */}
              My path has taken me through product, strategy, and now an MBA —
              with a thread of curiosity running through all of it. I&apos;m
              drawn to the intersection of user needs, business problems, and
              what technology can actually do.
            </p>
            <p>
              Outside of work, I build side projects — mostly tools and games —
              that let me stay close to the craft of making things.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-64 h-48 bg-blush rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-5xl">👩‍💻</span>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-ink mb-6">What I do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Product Management",
              desc: "Defining problems, prioritising ruthlessly, and shipping things that matter.",
            },
            {
              title: "Building & Prototyping",
              desc: "From idea to working product — HTML, CSS, JS, and enough code to get it done.",
            },
            {
              title: "Strategy & Research",
              desc: "Thinking from first principles, talking to users, and making sense of what I find.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="p-5 border border-muted/20 rounded-xl bg-white">
              <h3 className="font-serif text-lg text-ink mb-2">{title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-blush rounded-xl">
        <div className="flex-1">
          <h3 className="font-serif text-lg text-ink mb-1">My resume</h3>
          <p className="font-sans text-sm text-muted">
            Full work history, education, and experience.
          </p>
        </div>
        <Button href="/resume.pdf" download="Medha_Ojha_Resume.pdf">
          Download CV
        </Button>
      </section>
    </div>
  );
}
