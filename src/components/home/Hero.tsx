import Button from "@/components/ui/Button";
import SketchIllustration from "@/components/illustrations/SketchIllustration";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-20">
      <div className="flex flex-col sm:flex-row gap-12 items-center">
        {/* Text */}
        <div className="flex-1 order-2 sm:order-1">
          <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-[1.08] tracking-tight mb-5">
            Medha Ojha
          </h1>
          <p className="font-sans text-lg text-ink/75 leading-relaxed max-w-md mb-3">
            Turning ambiguous problems into shipped AI products. Seven years
            across finance, consulting, and enterprise AI — and currently at
            INSEAD, where I&apos;m adding the strategic and cross-cultural layer.
          </p>
          <p className="font-sans text-sm text-muted leading-relaxed max-w-md mb-8">
            INSEAD MBA · Class of 2026 · Singapore &amp; Fontainebleau
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects">See my work</Button>
            <Button href="/connect" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Sketch illustration */}
        <div className="flex-shrink-0 order-1 sm:order-2 w-[160px] sm:w-[200px]">
          <SketchIllustration className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
