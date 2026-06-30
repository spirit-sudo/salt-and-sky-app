import ImageBlock from "@/components/ImageBlock";
import SignupForm from "@/components/SignupForm";

const lessons = [
  { name: "Strict Pull-Ups", desc: "Finally nail your first pull-up — no bands, no nonsense." },
  { name: "Bar Muscle-Ups", desc: "Stop chicken-winging. Learn timing, turnover, and strength work." },
  { name: "Ring Muscle-Ups", desc: "Turn frustration into confidence with consistent reps." },
  { name: "Handstand Push-Ups", desc: "Build shoulder strength, balance, and technique safely." },
  { name: "Snatch Technique", desc: "Clean up your positions and turn over the bar with confidence." },
  { name: "Double-Unders", desc: "Stop tripping up — get smooth, unbroken sets." },
];

export default function VideoLessonsPage() {
  return (
    <div>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Video Lessons
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Pick a skill, master it. On-demand video lessons you can watch
            anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <div
              key={lesson.name}
              className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
            >
              <ImageBlock className="h-40 w-full" />
              <div className="p-6">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-slate-900">
                  {lesson.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{lesson.desc}</p>
                <a
                  href="#signup"
                  className="mt-4 inline-block rounded-full bg-amber-400 px-5 py-2 text-sm font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
                >
                  Get Access
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="signup" className="bg-slate-100">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-slate-900">
            Get Video Lesson Access
          </h2>
          <p className="mt-2 text-slate-600">
            Sign up below and we&apos;ll send you access to the full video
            lesson library.
          </p>
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <SignupForm submitLabel="Get Access" />
          </div>
        </div>
      </section>
    </div>
  );
}
