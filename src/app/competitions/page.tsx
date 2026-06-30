import ImageBlock from "@/components/ImageBlock";
import SignupForm from "@/components/SignupForm";

export default function EventsPage() {
  return (
    <div>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Linear Progression Events
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            A few times a year, we open the floor for competition.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <ImageBlock className="h-48 w-full" />
            <div className="p-8">
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-slate-900">
                Fortius Summer Games
              </h2>
              <p className="mt-2 text-sm font-semibold text-amber-500">
                August 29, 2026
              </p>
              <p className="mt-1 text-sm text-slate-600">
                CrossFit Fortius, San Diego
              </p>
              <p className="mt-4 text-sm text-slate-700">
                <span className="font-bold">Divisions:</span> Rx (M/F) ·
                Masters (M/F) · Intermediate (M/F)
              </p>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-bold">Prizes:</span> Cash prize for
                division winners. Gift prizes for 2nd &amp; 3rd place
                finishers.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
              Reserve My Spot
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Let us know you&apos;re interested and which division you&apos;re
              aiming for.
            </p>
            <div className="mt-6">
              <SignupForm
                submitLabel="Reserve My Spot"
                extraField={{
                  name: "division",
                  label: "Which division?",
                  placeholder: "e.g. Rx (M) / Masters (F) / Intermediate (M)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
