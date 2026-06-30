import Image from "next/image";
import Link from "next/link";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const galleryPhotos = [
  { src: "/photos/primary-bedroom-horse-art.jpg", alt: "Primary bedroom", className: "aspect-[4/5]" },
  { src: "/photos/kitchen-wide.jpg", alt: "Kitchen", className: "aspect-[4/3]" },
  { src: "/photos/lounge-howdy-cowboy.jpg", alt: "Lounge", className: "aspect-[4/3]" },
  { src: "/photos/bathroom-soaking-tub.jpg", alt: "Bathroom", className: "aspect-[4/5]" },
  { src: "/photos/bunk-room.jpg", alt: "Bunk room", className: "aspect-[4/3]" },
  { src: "/photos/coffee-bar.jpg", alt: "Coffee bar", className: "aspect-[4/3]" },
];

export default function Home() {
  return (
    <div className="bg-white text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/photos/entryway-mountain-view.jpg"
            alt="Wild Moon Ranch entryway with mountain views"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-white/60 text-xs uppercase tracking-[0.35em] mb-8">
            Julian, California
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1]">
            The Mountain Retreat<br />You&apos;ve Been Imagining
          </h1>
          <p className="mt-6 text-white/70 text-base sm:text-lg tracking-wide">
            3 bedrooms &nbsp;·&nbsp; Sleeps 6 &nbsp;·&nbsp; Private hot tub &nbsp;·&nbsp; 90 min from San Diego
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal text-white text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-teal-dark transition-colors"
            >
              Check Availability
            </Link>
            <Link
              href="/the-cabin"
              className="border border-white/50 text-white text-xs uppercase tracking-[0.2em] px-10 py-4 hover:border-white transition-colors"
            >
              Tour the Cabin
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── Editorial intro ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Julian, California</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-navy leading-snug">
            Secluded. Elevated. Entirely yours.
          </h2>
          <p className="mt-6 text-navy/60 text-base leading-relaxed max-w-xl mx-auto">
            Wild Moon Ranch sits above the clouds at 5,000 feet in the Cuyamaca
            Mountains — a private mountain home with room to breathe, skies dark
            enough for stargazing, and enough space for everyone you actually
            want to see.
          </p>
          <Link
            href="/the-cabin"
            className="mt-10 inline-block text-xs uppercase tracking-[0.2em] text-navy border-b border-navy/30 pb-0.5 hover:border-navy transition-colors"
          >
            See the property →
          </Link>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-cream py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            ["6", "Guests"],
            ["3", "Bedrooms"],
            ["90 min", "From San Diego"],
            ["5,000 ft", "Elevation"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="font-display text-4xl font-light text-navy">{val}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-navy/50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery grid ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Inside the Ranch</p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-navy">A Look Inside</h2>
            </div>
            <Link
              href="/the-cabin"
              className="hidden sm:block text-xs uppercase tracking-[0.15em] text-navy/50 hover:text-navy border-b border-navy/20 pb-0.5 transition-colors"
            >
              Full tour →
            </Link>
          </div>
          <div className="columns-2 sm:columns-3 gap-2">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className={`relative ${photo.className} mb-2 overflow-hidden`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed image + glass panel ── */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/photos/bedroom-vaulted-ceiling.jpg"
          alt="Bedroom with vaulted wood ceiling at Wild Moon Ranch"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/30" />
        <div className="absolute bottom-0 left-0 right-0 md:right-auto md:max-w-xl bg-white/90 backdrop-blur-sm p-10 m-8 md:m-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">The Details</p>
          <p className="font-display text-2xl sm:text-3xl font-light text-navy leading-snug">
            Wood-burning fireplace. Private hot tub. Mountain views from every window.
          </p>
          <Link
            href="/the-cabin"
            className="mt-6 inline-block text-xs uppercase tracking-[0.15em] text-teal hover:text-teal-dark transition-colors"
          >
            See all amenities →
          </Link>
        </div>
      </section>

      {/* ── Amenities 2-col ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/photos/kitchen-vaulted-ceiling.jpg"
              alt="Kitchen with vaulted wood ceiling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Indoors & Out</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-navy leading-snug">
              Everything You Need.<br />Nothing You Don&apos;t.
            </h2>
            <ul className="mt-8 space-y-3">
              {[
                "Wood-burning fireplace",
                "Private hot tub under the stars",
                "Full kitchen, stocked for cooking in",
                "Fire pit with mountain views",
                "Fast WiFi + smart TV",
                "Pickleball court on property",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-navy/70">
                  <span className="w-4 h-px bg-teal inline-block flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/the-cabin"
              className="mt-8 inline-block bg-navy text-white text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-navy-light transition-colors"
            >
              Full Amenities List
            </Link>
          </div>
        </div>
      </section>

      {/* ── Julian area ── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Area</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-navy leading-snug">
              Apple pie, gold-rush history, and the darkest skies in San Diego County.
            </h2>
            <p className="mt-6 text-navy/60 text-sm leading-relaxed">
              Julian is a historic mountain town unlike anywhere else in Southern
              California — a short drive from the ranch and a world away from the coast.
            </p>
            <Link
              href="/julian-ca"
              className="mt-8 inline-block bg-teal text-white text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-teal-dark transition-colors"
            >
              Julian Area Guide
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/photos/bookshelf-vinyl.jpg"
              alt="Cozy reading nook at Wild Moon Ranch"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">Common Questions</p>
          <h2 className="font-display text-4xl font-light text-navy text-center mb-14">FAQ</h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`py-7 ${i < faqs.length - 1 ? "border-b border-navy/10" : ""}`}>
                <h3 className="text-base font-medium text-navy">{faq.q}</h3>
                <p className="mt-3 text-sm text-navy/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src="/photos/double-vanity.jpg"
          alt="Wild Moon Ranch bathroom"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">Book Direct</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white">
            Ready to unplug?
          </h2>
          <Link
            href="/contact"
            className="mt-8 bg-teal text-white text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-teal-dark transition-colors"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
}
