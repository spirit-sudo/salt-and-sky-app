import type { Metadata } from "next";
import Link from "next/link";
import ImageBlock from "@/components/ImageBlock";

export const metadata: Metadata = {
  title: "Julian, CA Travel Guide",
  description:
    "What to do near Wild Moon Ranch in Julian, CA — apple pie on Main Street, Cuyamaca Rancho State Park hiking, Volcan Mountain stargazing, and the best time of year to visit.",
  alternates: {
    canonical: "/julian-ca",
  },
  openGraph: {
    url: "/julian-ca",
    title: "Julian, CA Travel Guide | Wild Moon Ranch",
    description:
      "What to do near Wild Moon Ranch in Julian, CA — apple pie on Main Street, hiking, stargazing, and the best time of year to visit.",
  },
};

const guideFaqs = [
  {
    q: "How far is Julian, CA from San Diego?",
    a: "Julian is about 60 miles (90 minutes by car) northeast of downtown San Diego, up in the Cuyamaca Mountains at roughly 4,200 feet elevation.",
  },
  {
    q: "What is Julian, CA known for?",
    a: "Julian is a historic gold-mining town known for its apple orchards and pie shops, Old West-era Main Street, and some of the darkest night skies in Southern California.",
  },
  {
    q: "What's the best time of year to visit Julian?",
    a: "Fall (September–November) is peak season for apple harvest and pie festivals. Winter occasionally brings light snow — rare for San Diego County. Spring and summer are best for hiking and stargazing with milder temperatures than the coast.",
  },
  {
    q: "What outdoor activities are near Wild Moon Ranch?",
    a: "Cuyamaca Rancho State Park and Volcan Mountain Preserve both offer hiking within a short drive, and the area's high elevation and low light pollution make it a popular stargazing destination.",
  },
];

const thingsToDo = [
  {
    name: "Main Street Julian",
    blurb:
      "Walk the historic downtown for pie shops, candy stores, mining-era buildings, and local shops.",
  },
  {
    name: "Cuyamaca Rancho State Park",
    blurb:
      "Miles of hiking and mountain biking trails through pine forest, about 15 minutes from the cabin.",
  },
  {
    name: "Volcan Mountain Preserve",
    blurb:
      "A favorite local hike with panoramic views — and one of the best stargazing spots in the area at night.",
  },
  {
    name: "Julian Pie Company",
    blurb:
      "The town's signature stop. Get there early in fall when lines stretch out the door.",
  },
];

// FAQPage schema targets "Julian CA" travel queries so AI answer engines
// and Google can surface Wild Moon Ranch alongside local trip-planning info.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: guideFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function JulianGuidePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-stone-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Julian, California Travel Guide
          </h1>
          <p className="mt-4 max-w-xl text-stone-300">
            Everything to do near Wild Moon Ranch — pie, hikes, and some of
            the darkest skies in San Diego County.
          </p>
        </div>
      </section>

      <ImageBlock
        className="h-48 w-full sm:h-64"
        src="/photos/bookshelf-vinyl.jpg"
        alt="Built-in shelving with books and records at Wild Moon Ranch"
        priority
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-extrabold tracking-tight text-stone-900">
          Things to Do Nearby
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {thingsToDo.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl border border-stone-200 shadow-sm"
            >
              <ImageBlock className="h-36 w-full" />
              <div className="p-6">
                <h3 className="text-lg font-extrabold tracking-tight text-stone-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{item.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-stone-900">
            Julian, CA FAQ
          </h2>
          <div className="mt-8 space-y-6">
            {guideFaqs.map((faq) => (
              <div key={faq.q} className="border-b border-stone-300 pb-6">
                <h3 className="text-lg font-bold text-stone-900">{faq.q}</h3>
                <p className="mt-2 text-stone-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-400">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Stay Right in the Middle of It
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-800">
            Wild Moon Ranch puts you minutes from Main Street and the best
            trails in Julian.
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
