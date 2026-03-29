export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-paper mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-muted">
          Medha Ojha · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/medhaojha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans text-muted hover:text-ink transition-colors tracking-wide uppercase"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ojhamedha23-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans text-muted hover:text-ink transition-colors tracking-wide uppercase"
          >
            GitHub
          </a>
          <a
            href="mailto:medha.ojha@insead.edu"
            className="text-xs font-sans text-muted hover:text-ink transition-colors tracking-wide uppercase"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
