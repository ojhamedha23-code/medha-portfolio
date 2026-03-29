export const metadata = {
  title: "Let's Connect — Medha Ojha",
};

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/medhaojha/",
    desc: "linkedin.com/in/medhaojha",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:medha.ojha@insead.edu",
    desc: "medha.ojha@insead.edu",
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/ojhamedha23-code",
    desc: "ojhamedha23-code",
    external: true,
  },
];

export default function ConnectPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-4xl text-ink mb-4">Let&apos;s Connect</h1>
        <p className="font-sans text-muted text-lg leading-relaxed max-w-xl">
          Whether you&apos;re working on something interesting, want to
          collaborate, or just want to say hi — I&apos;d love to hear from you.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-lg">
        {links.map(({ label, href, desc, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between p-5 border border-muted/20 rounded-xl bg-white hover:border-burgundy/40 hover:shadow-sm transition-all duration-200 group"
          >
            <div>
              <p className="font-serif text-lg text-ink group-hover:text-burgundy transition-colors">
                {label}
              </p>
              <p className="font-sans text-sm text-muted">{desc}</p>
            </div>
            <span className="text-muted group-hover:text-burgundy transition-colors text-lg">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
