import ImageBlock from "@/components/ImageBlock";
import SignupForm from "@/components/SignupForm";

const upcoming = [
  { name: "Summer Throwdown", date: "Aug 16, 2026", level: "RX / Scaled / Masters" },
  { name: "Linear Progression In-House Open", date: "Sept 27, 2026", level: "All Levels" },
  { name: "Regional Qualifier Prep Camp", date: "Oct 11, 2026", level: "Competitive" },
];

export default function CompetitionsPage() {
  return (
    <div>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Competitions
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Test your fitness, meet the community, and chase a podium. Sign
            up for an upcoming competition below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900">
          Upcoming Events
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {upcoming.map((event) => (
            <div
              key={event.name}
              className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
            >
              <ImageBlock className="h-36 w-full" />
              <div className="p-6">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-slate-900">
                  {event.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{event.date}</p>
                <p className="text-sm font-semibold text-amber-500">{event.level}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900">
            Sign Up for a Competition
          </h2>
          <p className="mt-2 text-slate-600">
            Let us know you&apos;re interested and which division you&apos;re
            aiming for.
          </p>
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <SignupForm
              submitLabel="Sign Me Up"
              extraField={{
                name: "division",
                label: "Which competition / division?",
                placeholder: "e.g. Summer Throwdown — RX",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
