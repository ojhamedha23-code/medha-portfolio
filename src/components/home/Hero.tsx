import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
      <p className="font-sans text-sm text-burgundy font-medium tracking-widest uppercase mb-4">
        Hello, I&apos;m
      </p>
      <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-tight mb-6">
        Medha Ojha
      </h1>
      <p className="font-sans text-xl text-muted leading-relaxed max-w-xl mb-10">
        Product-minded builder. I make tools, write about my process, and share
        things I&apos;ve learned along the way.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button href="/projects">See my work</Button>
        <Button href="/connect" variant="outline">
          Let&apos;s connect
        </Button>
      </div>
    </section>
  );
}
