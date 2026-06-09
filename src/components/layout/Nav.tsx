"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Connect", href: "/connect" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-ink/8">
      <nav className="max-w-5xl mx-auto px-6 py-0 flex items-center justify-between h-14">
        <Link href="/" aria-label="Home" className="hover:opacity-75 transition-opacity">
          <svg
            width="28"
            height="26"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Top face */}
            <polygon
              points="15,2 27,8 15,14 3,8"
              fill="#F7ECEE"
              stroke="#8B1A2B"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Left face */}
            <polygon
              points="3,8 15,14 15,26 3,20"
              fill="white"
              stroke="#8B1A2B"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Right face */}
            <polygon
              points="27,8 27,20 15,26 15,14"
              fill="#F7ECEE"
              fillOpacity="0.6"
              stroke="#8B1A2B"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-sans tracking-wide transition-colors ${
                    active
                      ? "text-ink font-medium"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="block h-px bg-burgundy mt-0.5 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-ink/8 bg-paper px-6 py-5">
          <ul className="flex flex-col gap-5">
            {links.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-sans transition-colors ${
                      active ? "text-ink font-medium" : "text-muted"
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
