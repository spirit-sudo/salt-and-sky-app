import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-mono text-lg font-bold">
              <span className="text-amber-400">LINEAR</span> PROGRESSION
            </p>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              Strength, conditioning, and competition coaching built on
              consistent progress — one rep at a time.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-slate-100">Site</span>
            <Link href="/programs" className="text-slate-400 hover:text-amber-400">Programs & Pricing</Link>
            <Link href="/competitions" className="text-slate-400 hover:text-amber-400">Events</Link>
            <Link href="/contact" className="text-slate-400 hover:text-amber-400">Contact</Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-slate-100">Contact</span>
            <a
              href="https://www.instagram.com/lp_strength_/"
              className="text-slate-400 hover:text-amber-400"
            >
              Follow @lp_strength_ on Instagram
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Linear Progression. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
