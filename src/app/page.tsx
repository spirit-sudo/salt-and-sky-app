import Link from "next/link";
import ImageBlock from "@/components/ImageBlock";

const programs = [
  {
    name: "Group Classes",
    blurb:
      "High-energy group WODs with coaching cues on every lift. Show up, work hard, leave better.",
    price: "$150/mo",
  },
  {
    name: "1-on-1 Programming",
    blurb:
      "Fully custom strength & conditioning programming built around your goals, schedule, and equipment.",
    price: "$250/mo",
  },
  {
    name: "Competition Prep",
    blurb:
      "Periodized training for athletes prepping for the Open, Quarterfinals, or local throwdowns.",
    price: "$300/mo",
  },
];

const guides = [
  { name: "Pull-Ups", desc: "Step-by-step drills to get your first strict pull-up." },
  { name: "Muscle-Ups", desc: "Stop chicken-winging. Learn timing, turnover, and strength." },
  { name: "Handstand Push-Ups", desc: "Build shoulder strength, balance, and technique." },
  { name: "Olympic Lifts", desc: "Clean up your snatch and clean & jerk technique." },
];

const testimonials = [
  {
    quote:
      "Coach completely rebuilt my squat and my confidence. I hit a 50lb PR in six months.",
    name: "Maria S.",
  },
  {
    quote:
      "The programming is smart and the coaching is honest. I've never felt stronger or more consistent.",
    name: "Devon K.",
  },
  {
    quote:
      "Went from never competing to placing top 10 at a regional comp. Couldn't have done it without this coaching.",
    name: "Alex R.",
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
            Linear Progression
          </span>
          <p className="max-w-xl text-lg font-medium text-slate-200">
            Train with purpose. Do the hard things. Put in the reps. Be proud
            of the work.
          </p>
          <h1 className="text-5xl font-extrabold uppercase italic leading-[0.95] tracking-tight text-white sm:text-7xl">
            Train Smarter.
            <br />
            Stay Stronger.
          </h1>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/schedule"
              className="rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
            >
              Book a Class
            </Link>
            <Link
              href="/programs"
              className="rounded-full border-2 border-white px-7 py-3 font-bold uppercase tracking-wide text-white transition hover:border-amber-400 hover:text-amber-400"
            >
              Programs & Pricing
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
                  href="/programs"
                  className="mt-4 inline-block rounded-full bg-amber-400 px-5 py-2 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free video guides preview */}
      <section className="bg-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Start With Free Video Lessons
            </h2>
            <Link
              href="/video-lessons"
              className="hidden shrink-0 rounded-full bg-sky-300 px-5 py-2 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-sky-200 sm:inline-block"
            >
              See All Lessons
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((g) => (
              <div
                key={g.name}
                className="overflow-hidden rounded-xl bg-slate-900"
              >
                <ImageBlock className="h-32 w-full" />
                <div className="p-5">
                  <h3 className="font-extrabold uppercase tracking-tight text-white">
                    {g.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{g.desc}</p>
                  <Link
                    href="/video-lessons"
                    className="mt-4 inline-block rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
                  >
                    Watch Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About coach */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <ImageBlock className="aspect-square w-full rounded-xl" />
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900">
              Meet Your Coach
            </h2>
            <p className="mt-4 text-slate-600">
              With years of experience coaching athletes from first-timers to
              competitive CrossFitters, the coach at Linear Progression
              believes great fitness is never accidental — it&apos;s
              programmed, measured, and earned rep by rep.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-medium text-slate-700">
              <li>• CrossFit Level 2 Trainer (CF-L2)</li>
              <li>• USA Weightlifting Coach Certified</li>
              <li>• 10+ years coaching experience</li>
              <li>• Competitive CrossFit athlete</li>
            </ul>
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
              href="/schedule"
              className="mt-6 inline-block rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
            >
              Book a Class
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900">
          What Athletes Say
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold text-amber-500">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Ready to Start Your Progression?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Sign up for a class, grab a video lesson, or get on the list for
            the next competition.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
