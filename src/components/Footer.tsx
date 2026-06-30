import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-mono text-lg font-bold">
              <span className="text-amber-400">WILD MOON</span> RANCH
            </p>
            <p className="mt-2 max-w-xs text-sm text-stone-400">
              A secluded short-term rental in Julian, California — mountain
              air, dark skies, and room to slow down.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-stone-100">Site</span>
            <Link href="/the-cabin" className="text-stone-400 hover:text-amber-400">The Cabin</Link>
            <Link href="/julian-ca" className="text-stone-400 hover:text-amber-400">Julian, CA</Link>
            <Link href="/contact" className="text-stone-400 hover:text-amber-400">Contact</Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-stone-100">Contact</span>
            <span className="text-stone-400">Julian, CA 92036</span>
            <a href="tel:+15555555555" className="text-stone-400 hover:text-amber-400">
              (555) 555-5555
            </a>
            <a href="mailto:stay@wildmoonranch.com" className="text-stone-400 hover:text-amber-400">
              stay@wildmoonranch.com
            </a>
            <a
              href="https://www.instagram.com/wildmoonranch/"
              className="text-stone-400 hover:text-amber-400"
            >
              Follow @wildmoonranch
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-stone-500">
          © {new Date().getFullYear()} Wild Moon Ranch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
