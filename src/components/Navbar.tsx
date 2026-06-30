"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/the-cabin", label: "The Cabin" },
  { href: "/julian-ca", label: "Julian, CA" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left nav */}
        <nav className="hidden md:flex gap-8 flex-1">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-navy/70 hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <Link href="/" className="flex-shrink-0">
          <span className="font-display text-xl tracking-[0.25em] text-navy font-light">
            WILD MOON
          </span>
          <span className="font-display text-xl tracking-[0.25em] text-navy font-semibold">
            {" "}RANCH
          </span>
        </Link>

        {/* Right CTA */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <Link
            href="/contact"
            className="text-xs uppercase tracking-[0.15em] text-navy/70 hover:text-navy transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-teal text-white text-xs uppercase tracking-[0.15em] px-5 py-2.5 hover:bg-teal-dark transition-colors"
          >
            Check Availability
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-navy md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-gray-100 bg-white px-6 py-6 gap-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.15em] text-navy/70 hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block bg-teal text-white text-xs uppercase tracking-[0.15em] px-5 py-3 text-center"
          >
            Check Availability
          </Link>
        </nav>
      )}
    </header>
  );
}
