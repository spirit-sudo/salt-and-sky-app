import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Julian, CA Travel Guide",
  description:
    "What to do near Wild Moon Ranch in Julian, CA — apple pie on Main Street, Cuyamaca Rancho State Park hiking, Volcan Mountain stargazing, and the best time of year to visit.",
  alternates: { canonical: "/julian-ca" },
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
    blurb: "Walk the historic downtown for pie shops, candy stores, mining-era buildings, and local shops.",
    label: "Town",
  },
  {
    name: "Cuyamaca Rancho State Park",
    blurb: "Miles of hiking and mountain biking trails through pine forest, about 15 minutes from the cabin.",
    label: "Hiking",
  },
  {
    name: "Volcan Mountain Preserve",
    blurb: "A favorite local hike with panoramic views — and one of the best stargazing spots in the area at night.",
    label: "Stargazing",
  },
  {
    name: "Julian Pie Company",
    blurb: "The town's signature stop. Get there early in fall when lines stretch out the door.",
    label: "Food & Drink",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: guideFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function JulianGuidePage() {
  return (
    <div className="bg-white text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/photos/bookshelf-vinyl.jpg"
          alt="Wild Moon Ranch interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">Area Guide</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white">
            Julian, California
          </h1>
          <p className="mt-4 text-white/60 max-w-lg">
            Pie, mountains, dark skies, and gold-rush history — 90 minutes from San Diego.
          </p>
        </div>
      </section>

      {/* ── Editorial intro ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Town</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-navy leading-snug">
            One of Southern California&apos;s best-kept secrets.
          </h2>
          <p className="mt-6 text-navy/60 text-sm leading-relaxed">
            Perched at 4,200 feet in the Cuyamaca Mountains, Julian is a historic
            gold-mining town with apple orchards, a walkable Main Street, and some
            of the darkest night skies in San Diego County. Wild Moon Ranch puts
            you minutes from all of it.
          </p>
        </div>
      </section>

      {/* ── Things to do — editorial cards ── */}
      <section className="py-4 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-10 text-center">Nearby Highlights</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-14">
            {thingsToDo.map((item) => (
              <div key={item.name}>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{item.label}</p>
                <div className="relative aspect-[16/9] overflow-hidden mb-5">
                  <div className="absolute inset-0 bg-cream flex items-center justify-center">
                    <span className="text-xs text-navy/30 uppercase tracking-widest">Photo coming soon</span>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-light text-navy">{item.name}</h3>
                <p className="mt-2 text-sm text-navy/60 leading-relaxed">{item.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed with glass panel ── */}
      <section className="relative h-[55vh] overflow-hidden">
        <Image
          src="/photos/nightstand-lamp.jpg"
          alt="Cozy details at Wild Moon Ranch"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/30" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="bg-white/88 backdrop-blur-sm p-10 max-w-xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Best Time to Visit</p>
            <p className="font-display text-2xl sm:text-3xl font-light text-navy leading-snug">
              Fall brings the apple harvest. Winter brings snow. Spring and summer bring perfect hiking weather.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">Common Questions</p>
          <h2 className="font-display text-4xl font-light text-navy text-center mb-14">Julian FAQ</h2>
          <div className="space-y-0">
            {guideFaqs.map((faq, i) => (
              <div key={faq.q} className={`py-7 ${i < guideFaqs.length - 1 ? "border-b border-navy/10" : ""}`}>
                <h3 className="text-base font-medium text-navy">{faq.q}</h3>
                <p className="mt-3 text-sm text-navy/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Stay Right in the Middle of It</p>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-navy">
          Wild Moon Ranch puts you minutes<br className="hidden sm:block" /> from Main Street and the best trails.
        </h2>
        <Link
          href="/contact"
          className="mt-10 inline-block bg-teal text-white text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-teal-dark transition-colors"
        >
          Check Availability
        </Link>
      </section>
    </div>
  );
}
