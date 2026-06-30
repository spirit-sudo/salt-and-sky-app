import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl tracking-[0.2em] text-white">
              <span className="font-light">WILD MOON</span>
              <span className="font-semibold"> RANCH</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A secluded mountain retreat in Julian, California — 90 minutes
              from San Diego, a world away from everything else.
            </p>
            <a
              href="https://www.instagram.com/wildmoonranch/"
              className="mt-4 inline-block text-sm text-teal hover:text-white transition-colors"
            >
              @wildmoonranch
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.15em] text-white mb-1">Explore</span>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/the-cabin" className="hover:text-white transition-colors">The Cabin</Link>
            <Link href="/julian-ca" className="hover:text-white transition-colors">Julian, CA</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.15em] text-white mb-1">Contact</span>
            <span>Julian, CA 92036</span>
            <a href="tel:+15555555555" className="hover:text-white transition-colors">(555) 555-5555</a>
            <a href="mailto:stay@wildmoonranch.com" className="hover:text-white transition-colors">stay@wildmoonranch.com</a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Wild Moon Ranch. All rights reserved.</p>
          <p>Book direct — no fees, no middleman.</p>
        </div>
      </div>
    </footer>
  );
}
