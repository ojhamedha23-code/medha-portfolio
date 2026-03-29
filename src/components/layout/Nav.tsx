"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Past Work", href: "/past-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Let's Connect", href: "/connect" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-muted/20">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg text-ink hover:text-burgundy transition-colors"
        >
          Medha Ojha
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-sans transition-colors ${
                    active
                      ? "text-burgundy border-b border-burgundy pb-0.5"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-muted/20 bg-paper px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-sans transition-colors ${
                      active ? "text-burgundy font-medium" : "text-muted hover:text-ink"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
