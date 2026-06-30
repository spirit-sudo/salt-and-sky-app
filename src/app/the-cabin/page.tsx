import type { Metadata } from "next";
import Link from "next/link";
import ImageBlock from "@/components/ImageBlock";

export const metadata: Metadata = {
  title: "The Cabin | Amenities & Layout",
  description:
    "Tour Wild Moon Ranch in Julian, CA — 3 bedrooms, sleeps 6, wood-burning fireplace, private hot tub, and a fire pit with mountain views. See the full amenities list.",
  alternates: {
    canonical: "/the-cabin",
  },
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

export default function TheCabinPage() {
  return (
    <div>
      <section className="bg-stone-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            The Cabin
          </h1>
          <p className="mt-4 max-w-xl text-stone-300">
            3 bedrooms · 2 baths · Sleeps 6 · Private hot tub · Mountain views
          </p>
        </div>
      </section>

      <ImageBlock className="h-56 w-full sm:h-72" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-stone-900">
              About the Stay
            </h2>
            <p className="mt-4 text-stone-600">
              Wild Moon Ranch sits on a quiet stretch of land just outside
              downtown Julian, surrounded by oak and pine. The cabin blends
              rustic mountain charm with the comforts you actually want on
              vacation — a stocked kitchen, a hot tub for cold nights, and a
              fireplace that makes the whole place feel like a retreat
              instead of a stopover.
            </p>
            <p className="mt-4 text-stone-600">
              It&apos;s an easy walk or short drive to Julian&apos;s Main
              Street for pie, coffee, and antique shops, and a short drive to
              Cuyamaca Rancho State Park and Volcan Mountain for hiking and
              stargazing.
            </p>
          </div>
          <ImageBlock className="aspect-video w-full rounded-xl" />
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {amenityGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-lg font-extrabold uppercase tracking-tight text-stone-900">
                {group.name}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-amber-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
              See Availability for Your Dates
            </h2>
            <p className="mt-4 text-stone-600">
              Send us your dates and we&apos;ll confirm availability and
              pricing directly — no booking fees, no middleman.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-amber-400 px-7 py-3 font-bold uppercase tracking-wide text-stone-900 transition hover:bg-amber-300"
            >
              Check Availability
            </Link>
          </div>
          <ImageBlock className="aspect-video w-full rounded-xl" />
        </div>
      </section>
    </div>
  );
}
