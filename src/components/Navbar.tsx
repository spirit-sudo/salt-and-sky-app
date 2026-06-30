"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs & Pricing" },
  { href: "/competitions", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2 font-mono">
          <span className="text-xl font-bold tracking-tight text-amber-400">
            LINEAR
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            PROGRESSION
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://marketplace.trainheroic.com/workout-plan/team/strength-conditioning-linear-progression?attrib=35906-lt"
          className="hidden rounded-full bg-amber-400 px-5 py-2 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300 md:inline-block"
        >
          Start Free Trial
        </Link>

        <button
          className="text-slate-100 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-800 bg-slate-900 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
