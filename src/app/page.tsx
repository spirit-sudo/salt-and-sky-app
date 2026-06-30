import Link from "next/link";
import ImageBlock from "@/components/ImageBlock";

const amenities = [
  "Wood-burning fireplace",
  "Private hot tub under the stars",
  "Full kitchen, stocked for cooking in",
  "Fire pit with mountain views",
  "Fast WiFi + smart TV",
  "Free parking for 2 vehicles",
];

const faqs = [
  {
    q: "Where is Wild Moon Ranch located?",
    a: "Wild Moon Ranch is a private short-term rental in Julian, California, in the Cuyamaca Mountains about 90 minutes northeast of San Diego and 2 hours from Los Angeles.",
  },
  {
    q: "How many guests does the property sleep?",
    a: "Wild Moon Ranch comfortably sleeps up to 6 guests across its bedrooms, with additional space for kids on a pull-out sofa.",
  },
  {
    q: "Is it better to book direct or through Airbnb/VRBO?",
    a: "Booking direct through this site gets you the lowest total price (no third-party service fees) and direct access to the host for questions, early check-in requests, and local recommendations.",
  },
  {
    q: "Are pets allowed at Wild Moon Ranch?",
    a: "Yes, well-behaved pets are welcome with advance notice — just mention it when you check availability.",
  },
];

// FAQPage schema makes these Q&As eligible for rich results and
// AI-generated answers (ChatGPT, Perplexity, Google AI Overviews) that
// cite Wild Moon Ranch directly when travelers ask about Julian rentals.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-30">
          <ImageBlock
            className="h-full w-full"
            src="/photos/entryway-mountain-view.jpg"
            alt="Entryway at Wild Moon Ranch with mountain views through the open door"
            priority
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
          <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-stone-900">
            Julian, California
          </span>
          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl">
            Wild Moon Ranch
          </h1>
          <p className="max-w-xl text-lg font-medium text-stone-200">
            A secluded mountain rental 90 minutes from San Diego — dark-sky
            stargazing, a crackling fireplace, and nothing on the agenda but
            rest. Sleeps 6.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-stone-900 transition hover:bg-amber-300"
            >
              Check Availability
            </Link>
            <Link
              href="/the-cabin"
              className="rounded-full border-2 border-white px-7 py-3 font-bold uppercase tracking-wide text-white transition hover:border-amber-400 hover:text-amber-400"
            >
              Tour the Cabin
            </Link>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          <div>
            <p className="text-3xl font-extrabold text-stone-900">6</p>
            <p className="mt-1 text-sm font-medium text-stone-600">Guests</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-stone-900">3</p>
            <p className="mt-1 text-sm font-medium text-stone-600">Bedrooms</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-stone-900">90 min</p>
            <p className="mt-1 text-sm font-medium text-stone-600">From San Diego</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-stone-900">5,000 ft</p>
            <p className="mt-1 text-sm font-medium text-stone-600">Elevation</p>
          </div>
        </div>
      </section>

      {/* Amenities preview */}
      <section className="bg-stone-100">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <ImageBlock
              className="aspect-video w-full rounded-xl"
              src="/photos/kitchen-wide.jpg"
              alt="Full kitchen at Wild Moon Ranch with wood cabinets and stainless range"
            />
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
                Everything You Need. Nothing You Don&apos;t.
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {amenities.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm font-medium text-stone-700">
                    <span className="text-amber-500">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
              <Link
                href="/the-cabin"
                className="mt-8 inline-block rounded-full bg-stone-900 px-7 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-stone-800"
              >
                See Full Amenities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          A Look Inside
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <ImageBlock
            className="aspect-square rounded-xl"
            src="/photos/primary-bedroom-horse-art.jpg"
            alt="Primary bedroom at Wild Moon Ranch with four-poster bed"
          />
          <ImageBlock
            className="aspect-square rounded-xl"
            src="/photos/bathroom-soaking-tub.jpg"
            alt="Primary bathroom with dual vessel sinks and soaking tub"
          />
          <ImageBlock
            className="aspect-square rounded-xl"
            src="/photos/lounge-howdy-cowboy.jpg"
            alt="Lounge area with leather sofa and Southwestern decor"
          />
          <ImageBlock
            className="aspect-square rounded-xl"
            src="/photos/bunk-room.jpg"
            alt="Bunk room with built-in beds and Southwestern textiles"
          />
        </div>
      </section>

      {/* Julian area teaser */}
      <section className="bg-stone-900">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Explore Julian, California
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-300">
            Apple pie, gold-rush history, and the best stargazing in San
            Diego County — all a short drive from the front porch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/julian-ca"
              className="rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-stone-900 transition hover:bg-amber-300"
            >
              The Julian Area Guide
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-stone-200 pb-6">
              <h3 className="text-lg font-bold text-stone-900">{faq.q}</h3>
              <p className="mt-2 text-stone-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-amber-400">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Ready to Unplug?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-800">
            Book direct and skip the third-party fees — we&apos;ll confirm
            your dates personally.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-stone-900 px-7 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-stone-800"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
}
