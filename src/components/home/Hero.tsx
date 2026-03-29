import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
      <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
        <div className="flex-1">
          <p className="font-sans text-sm text-burgundy font-medium tracking-widest uppercase mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-tight mb-4">
            Medha Ojha
          </h1>
          <p className="font-sans text-lg text-muted leading-relaxed max-w-lg mb-8">
            Strategy & product professional with 7+ years across AI, finance and
            social impact. Currently doing my MBA at INSEAD.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/projects">See my work</Button>
            <Button href="/connect" variant="outline">
              Let&apos;s connect
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/medha-ojha.jpg"
            alt="Medha Ojha"
            width={200}
            height={240}
            className="rounded-xl object-cover shadow-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
