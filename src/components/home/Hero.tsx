import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-20">
      <div className="flex flex-col sm:flex-row gap-12 items-start sm:items-center">
        {/* Text */}
        <div className="flex-1 order-2 sm:order-1">
          <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-[1.1] tracking-tight mb-5">
            Medha Ojha
          </h1>
          <p className="font-sans text-lg text-muted leading-relaxed max-w-md mb-3">
            I&apos;ve spent 7+ years at the intersection of technology, strategy,
            and impact — from building AI products to advising organisations
            across finance and social sectors.
          </p>
          <p className="font-sans text-base text-muted/80 leading-relaxed max-w-md mb-8">
            Currently doing my MBA at INSEAD while working on the next set of
            problems.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects">See my work</Button>
            <Button href="/connect" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 order-1 sm:order-2">
          <div className="relative w-[180px] h-[220px] sm:w-[210px] sm:h-[260px]">
            <Image
              src="/images/medha-ojha.jpg"
              alt="Medha Ojha"
              fill
              className="object-cover object-top rounded-2xl mix-blend-multiply"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
