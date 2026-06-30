import type { Metadata } from "next";
import ImageBlock from "@/components/ImageBlock";

export const metadata: Metadata = {
  title: "Programs & Pricing",
  description:
    "Remote CrossFit programming with Coach Daimino Stewart — periodized class programming for gym owners ($99/mo) and competition prep for athletes chasing the Open, Quarterfinals, and Regionals ($59/mo).",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    url: "/programs",
    title: "Programs & Pricing | Linear Progression",
    description:
      "Remote CrossFit programming with Coach Daimino Stewart — periodized class programming for gym owners and competition prep for athletes chasing the Open, Quarterfinals, and Regionals.",
  },
};

const plans = [
  {
    name: "Programming for Gym Owners",
    price: "$99",
    period: "/mo",
    blurb: "Designed for busy gym owners who want solid, periodized programming without writing it themselves.",
    features: [
      "7 sessions/week",
      "4-week program themes with progressive focus",
      "Full scaling, L1 through Rx",
      "Up to 250 athletes can log and track free",
    ],
    featured: true,
    cta: "Start My 7-Day Free Trial",
    href: "https://marketplace.trainheroic.com/workout-plan/team/strength-conditioning-linear-progression?attrib=35906-lt",
  },
  {
    name: "Competition Prep",
    price: "$59",
    period: "/mo",
    blurb: "For athletes training to compete — Open, Quarterfinals, or Regionals. Coached by someone who's been there six times.",
    features: [],
    cta: "Apply Now",
    href: "https://marketplace.trainheroic.com/workout-plan/team/linearprogressioncf?attrib=35906-lt",
  },
];

export default function ProgramsPage() {
  return (
    <div>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Programs &amp; Pricing
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Two ways to train with Coach Daimino — remote programming built
            for gym owners and competitors.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-8 ${
                plan.featured
                  ? "border-amber-400 bg-amber-50 shadow-md"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
                {plan.name}
              </h2>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500">{plan.period}</span>
              </p>
              <p className="mt-4 text-sm text-slate-600">{plan.blurb}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className="mt-8 rounded-full bg-amber-400 px-6 py-3 text-center font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900">
              Not Sure Which Path Is Right For You?
            </h2>
            <p className="mt-4 text-slate-600">
              Reach out and we&apos;ll help you pick the program that fits
              your goals, schedule, and experience level — no pressure.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-full bg-slate-900 px-7 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-slate-800"
            >
              Talk to a Coach
            </a>
          </div>
          <ImageBlock className="aspect-video w-full rounded-xl" />
        </div>
      </section>
    </div>
  );
}
