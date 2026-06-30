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
            <Link href="/schedule" className="text-slate-400 hover:text-amber-400">Schedule</Link>
            <Link href="/competitions" className="text-slate-400 hover:text-amber-400">Competitions</Link>
            <Link href="/video-lessons" className="text-slate-400 hover:text-amber-400">Video Lessons</Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-slate-100">Contact</span>
            <a href="mailto:coach@linearprogression.fit" className="text-slate-400 hover:text-amber-400">
              coach@linearprogression.fit
            </a>
            <a href="tel:+15555555555" className="text-slate-400 hover:text-amber-400">
              (555) 555-5555
            </a>
            <span className="text-slate-400">123 Iron Way, Your City</span>
          </div>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Linear Progression. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
