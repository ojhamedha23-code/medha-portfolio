export default function Footer() {
  return (
    <footer className="border-t border-muted/20 bg-paper mt-24">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-sans text-muted">
          © {new Date().getFullYear()} Medha Ojha
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/medhaojha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans text-muted hover:text-burgundy transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ojhamedha23-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans text-muted hover:text-burgundy transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@medhaojha.com"
            className="text-sm font-sans text-muted hover:text-burgundy transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
