import SignupForm from "@/components/SignupForm";

const schedule = [
  { day: "Monday", classes: ["6:00 AM", "9:00 AM", "5:00 PM", "6:30 PM"] },
  { day: "Tuesday", classes: ["6:00 AM", "9:00 AM", "5:00 PM", "6:30 PM"] },
  { day: "Wednesday", classes: ["6:00 AM", "9:00 AM", "5:00 PM", "6:30 PM"] },
  { day: "Thursday", classes: ["6:00 AM", "9:00 AM", "5:00 PM", "6:30 PM"] },
  { day: "Friday", classes: ["6:00 AM", "9:00 AM", "5:00 PM"] },
  { day: "Saturday", classes: ["8:00 AM", "9:30 AM"] },
  { day: "Sunday", classes: ["Open Gym 10:00 AM – 12:00 PM"] },
];

export default function SchedulePage() {
  return (
    <div>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Class Schedule
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Find a time that works and lock in your spot below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            {schedule.map((row, i) => (
              <div
                key={row.day}
                className={`flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <span className="font-extrabold uppercase tracking-tight text-slate-900">
                  {row.day}
                </span>
                <div className="flex flex-wrap gap-2">
                  {row.classes.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
              Book a Class
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Drop your info below and we&apos;ll confirm your spot.
            </p>
            <div className="mt-6">
              <SignupForm submitLabel="Book My Spot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
