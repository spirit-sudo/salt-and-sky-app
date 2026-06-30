import ImageBlock from "@/components/ImageBlock";

const plans = [
  {
    name: "Group Classes",
    price: "$150",
    period: "/mo",
    blurb: "Unlimited coached group WODs. Best for athletes who love training in a community setting.",
    features: [
      "Unlimited group classes",
      "Programmed daily WODs",
      "Form & technique coaching",
      "Access to the community board",
    ],
  },
  {
    name: "1-on-1 Programming",
    price: "$250",
    period: "/mo",
    blurb: "Fully custom strength & conditioning programming, built around your goals and equipment.",
    features: [
      "Custom weekly programming",
      "Video form checks",
      "Direct coach messaging",
      "Monthly progress check-ins",
    ],
    featured: true,
  },
  {
    name: "Competition Prep",
    price: "$300",
    period: "/mo",
    blurb: "Periodized training for athletes prepping for the Open, Quarterfinals, or local throwdowns.",
    features: [
      "Everything in 1-on-1 Programming",
      "Peaking & taper strategy",
      "Competition-day game plan",
      "Priority scheduling",
    ],
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
            Whether you want the energy of group classes or fully custom
            programming, there&apos;s a path built for where you are.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
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
                href="/contact"
                className="mt-8 rounded-full bg-amber-400 px-6 py-3 text-center font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
              >
                Get Started
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
