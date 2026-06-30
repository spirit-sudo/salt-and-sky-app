import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Cabin | Amenities & Layout",
  description:
    "Tour Wild Moon Ranch in Julian, CA — 3 bedrooms, sleeps 6, wood-burning fireplace, private hot tub, and a fire pit with mountain views. See the full amenities list.",
  alternates: { canonical: "/the-cabin" },
  openGraph: {
    url: "/the-cabin",
    title: "The Cabin | Wild Moon Ranch",
    description:
      "Tour Wild Moon Ranch in Julian, CA — 3 bedrooms, sleeps 6, wood-burning fireplace, private hot tub, and a fire pit with mountain views.",
  },
};

const amenityGroups = [
  {
    name: "Indoors",
    items: [
      "Wood-burning fireplace",
      "Full kitchen with cookware & coffee bar",
      "Smart TV with streaming",
      "Fast WiFi for remote work",
      "In-unit washer & dryer",
      "Central heat",
    ],
  },
  {
    name: "Outdoors",
    items: [
      "Private hot tub under the stars",
      "Fire pit with mountain views",
      "Covered porch with seating",
      "Hammocks",
      "Pickleball court",
      "Free parking for 2 vehicles",
    ],
  },
  {
    name: "Bedrooms & Bath",
    items: [
      "3 bedrooms (1 king, 1 queen, 2 twins)",
      "Sleeps up to 6 guests",
      "2 full bathrooms",
      "Hotel-quality linens",
    ],
  },
];

const photos = [
  { src: "/photos/kitchen-vaulted-ceiling.jpg", alt: "Kitchen with vaulted ceiling", className: "aspect-[4/3]" },
  { src: "/photos/primary-bedroom-horse-art.jpg", alt: "Primary bedroom", className: "aspect-[4/3]" },
  { src: "/photos/bathroom-soaking-tub.jpg", alt: "Soaking tub", className: "aspect-[4/5]" },
  { src: "/photos/bunk-room.jpg", alt: "Bunk room", className: "aspect-[4/3]" },
  { src: "/photos/lounge-howdy-cowboy.jpg", alt: "Lounge", className: "aspect-[4/3]" },
  { src: "/photos/theater-room-popcorn.jpg", alt: "Theater room", className: "aspect-[4/3]" },
  { src: "/photos/walk-in-shower.jpg", alt: "Walk-in shower", className: "aspect-[4/5]" },
  { src: "/photos/double-vanity.jpg", alt: "Double vanity", className: "aspect-[4/3]" },
];

export default function TheCabinPage() {
  return (
    <div className="bg-white text-navy">

      {/* ── Hero ── */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/photos/kitchen-vaulted-ceiling.jpg"
          alt="Wild Moon Ranch kitchen with vaulted wood ceiling"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">Wild Moon Ranch</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white">
            The Cabin
          </h1>
          <p className="mt-4 text-white/70 tracking-wide">
            3 bedrooms &nbsp;·&nbsp; 2 baths &nbsp;·&nbsp; Sleeps 6 &nbsp;·&nbsp; Private hot tub
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Property</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-navy leading-snug">
              Rustic charm.<br />Modern comfort.
            </h2>
            <p className="mt-6 text-navy/60 text-sm leading-relaxed">
              Wild Moon Ranch sits on a quiet stretch of land just outside
              downtown Julian, surrounded by oak and pine. The cabin blends
              rustic mountain character with the comforts you actually want on
              vacation — a stocked kitchen, a hot tub for cold nights, and a
              fireplace that makes the whole place feel like a retreat.
            </p>
            <p className="mt-4 text-navy/60 text-sm leading-relaxed">
              It&apos;s an easy walk or short drive to Julian&apos;s Main
              Street for pie, coffee, and antique shops, and a short drive to
              Cuyamaca Rancho State Park and Volcan Mountain for hiking and
              stargazing.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/photos/bedroom-vaulted-ceiling.jpg"
              alt="Bedroom with vaulted wood ceiling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Amenities ── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">What&apos;s Included</p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-navy">Amenities</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            {amenityGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">{group.name}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
                      <span className="w-4 h-px bg-teal mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed with glass panel ── */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/photos/lounge-howdy-cowboy.jpg"
          alt="Lounge at Wild Moon Ranch"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/25" />
        <div className="absolute bottom-0 right-0 left-0 md:left-auto md:max-w-lg bg-white/90 backdrop-blur-sm p-10 m-8 md:m-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Outdoors</p>
          <p className="font-display text-2xl sm:text-3xl font-light text-navy leading-snug">
            A private hot tub. A fire pit. Mountain views in every direction.
          </p>
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Gallery</p>
            <h2 className="font-display text-4xl font-light text-navy">Every Room</h2>
          </div>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-2">
            {photos.map((photo) => (
              <div key={photo.src} className={`relative ${photo.className} mb-2 overflow-hidden`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-navy text-white text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4">Book Direct</p>
        <h2 className="font-display text-4xl sm:text-5xl font-light">
          See Availability for Your Dates
        </h2>
        <p className="mt-4 text-white/60 text-sm max-w-md mx-auto">
          Send us your dates and we&apos;ll confirm availability and pricing
          directly — no booking fees, no middleman.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-teal text-white text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-teal-dark transition-colors"
        >
          Check Availability
        </Link>
      </section>
    </div>
  );
}
