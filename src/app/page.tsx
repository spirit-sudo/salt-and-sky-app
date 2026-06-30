import Link from "next/link";
import ImageBlock from "@/components/ImageBlock";

const programs = [
  {
    name: "Programming for Gym Owners",
    blurb:
      "Weekly, periodized CrossFit class programming with full scaling for every level. Free trial, up to 250 athletes can log and track at no extra cost.",
    price: "$99/mo",
    cta: "Start Free Trial",
    href: "https://marketplace.trainheroic.com/workout-plan/team/strength-conditioning-linear-progression?attrib=35906-lt",
  },
  {
    name: "Competition Prep",
    blurb:
      "Periodized training for athletes chasing the Open, Quarterfinals, and Regionals — coached by someone who's competed at that level six times himself.",
    price: "$59/mo",
    cta: "Apply Now",
    href: "https://marketplace.trainheroic.com/workout-plan/team/linearprogressioncf?attrib=35906-lt",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <ImageBlock className="h-full w-full" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
          <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-900">
            Linear Progression — Programming by Coach Daimino Stewart
          </span>
          <h1 className="text-5xl font-extrabold uppercase italic leading-[0.95] tracking-tight text-white sm:text-7xl">
            Train Smarter.
            <br />
            Compete Stronger.
          </h1>
          <p className="max-w-xl text-lg font-medium text-slate-200">
            Proven CrossFit programming for gym owners who want results
            without the guesswork, and competitors chasing their next podium.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="https://marketplace.trainheroic.com/workout-plan/team/strength-conditioning-linear-progression?attrib=35906-lt"
              className="rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
            >
              Start My 7-Day Free Trial
            </Link>
            <Link
              href="https://marketplace.trainheroic.com/workout-plan/team/linearprogressioncf?attrib=35906-lt"
              className="rounded-full border-2 border-white px-7 py-3 font-bold uppercase tracking-wide text-white transition hover:border-amber-400 hover:text-amber-400"
            >
              Apply for Comp Prep
            </Link>
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-4xl">
            Pick a Path. Start Today.
          </h2>
          <Link
            href="/programs"
            className="hidden shrink-0 rounded-full bg-sky-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-sky-900 transition hover:bg-sky-200 sm:inline-block"
          >
            See All Programs
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
            >
              <ImageBlock className="h-40 w-full" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight text-slate-900">
                    {p.name}
                  </h3>
                  <span className="font-bold text-slate-900">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
                <Link
                  href={p.href}
                  className="mt-4 inline-block rounded-full bg-amber-400 px-5 py-2 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About coach */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <ImageBlock className="aspect-square w-full rounded-xl" />
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900">
              Coach Daimino Stewart
            </h2>
            <p className="mt-4 text-slate-600">
              Former professional football player — CFL, Arena League, and
              Seattle Seahawks practice squad (2013) — and college Track &amp;
              Field athlete (Decathlon) turned CrossFit competitor and coach.
              Daimino has competed at the Regional and Semifinal level six
              times, and has spent 13 years coaching and competing in
              CrossFit.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-slate-700">
              <li>
                • Credentials: CrossFit Level 1 &amp; 2 Trainer · NASM · NFPT ·
                Nutrition Certified · Anatomy &amp; Physiology
              </li>
              <li>
                • Athletic background: Pro Football (CFL, Arena, Seattle
                Seahawks practice squad) · Track &amp; Field (Decathlon) · 6x
                CrossFit Semifinals/Regionals
              </li>
              <li>
                • Notable lifts: 375lb Clean · 292lb Snatch · 30 unbroken bar
                muscle-ups
              </li>
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              Since founding Linear Progression in 2016, Daimino&apos;s
              programming has reached hundreds of athletes worldwide and
              helped produce several elite-level CrossFit competitors.
            </p>
          </div>
        </div>
      </section>

      {/* Community photo grid + testimonial blurb */}
      <section className="bg-slate-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <ImageBlock className="aspect-square rounded-xl" />
            <ImageBlock className="aspect-square rounded-xl" />
            <ImageBlock className="aspect-square rounded-xl" />
            <ImageBlock className="aspect-square rounded-xl" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold uppercase italic tracking-tight text-slate-900">
              You&apos;re Not Alone.
              <br />
              You&apos;re in Linear Progression.
            </h2>
            <p className="mt-4 text-slate-600">
              Progress hits different when you&apos;ve got people in your
              corner. Train with athletes chasing PRs, trading wins, and
              getting real feedback from a coach who&apos;s been there.
            </p>
            <p className="mt-4 font-semibold text-slate-800">
              Join the gym — get accountability, support, and the motivation
              to keep showing up.
            </p>
            <Link
              href="https://marketplace.trainheroic.com/workout-plan/team/strength-conditioning-linear-progression?attrib=35906-lt"
              className="mt-6 inline-block rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
            >
              Start My 7-Day Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            A Few Times a Year, We Throw Down.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Join Linear Progression athletes at our next live competition.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/competitions"
              className="rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
            >
              See Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
