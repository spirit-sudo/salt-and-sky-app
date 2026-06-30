import type { Metadata } from "next";
import ImageBlock from "@/components/ImageBlock";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Check Availability & Contact",
  description:
    "Check availability and book Wild Moon Ranch in Julian, CA directly — no third-party fees. Send your dates and we'll confirm pricing and availability.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Check Availability & Contact | Wild Moon Ranch",
    description:
      "Check availability and book Wild Moon Ranch in Julian, CA directly — no third-party fees.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-stone-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Check Availability
          </h1>
          <p className="mt-4 max-w-xl text-stone-300">
            Tell us your dates and group size — we&apos;ll confirm
            availability and pricing directly, no booking fees.
          </p>
        </div>
      </section>

      <ImageBlock className="h-56 w-full sm:h-72" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-stone-900">
              Request to Book
            </h2>
            <div className="mt-6">
              <SignupForm
                submitLabel="Send Request"
                successMessage="Thanks for your request — we'll confirm availability and pricing by email shortly."
                extraField={{
                  name: "dates",
                  label: "Preferred dates & group size",
                  placeholder: "e.g. Sept 12–15, 4 guests",
                }}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-stone-900">
                Location
              </h2>
              <p className="mt-2 text-stone-600">Julian, CA 92036</p>
              <p className="mt-1 text-sm text-stone-500">
                Exact address provided after booking is confirmed.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-stone-900">
                Email
              </h2>
              <a
                href="mailto:stay@wildmoonranch.com"
                className="mt-2 block text-stone-600 hover:text-amber-500"
              >
                stay@wildmoonranch.com
              </a>
            </div>
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-stone-900">
                Phone
              </h2>
              <a
                href="tel:+15555555555"
                className="mt-2 block text-stone-600 hover:text-amber-500"
              >
                (555) 555-5555
              </a>
            </div>
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-stone-900">
                Follow
              </h2>
              <div className="mt-2 flex gap-4 text-stone-600">
                <a href="https://www.instagram.com/wildmoonranch/" className="hover:text-amber-500">Instagram</a>
                <a href="#" className="hover:text-amber-500">Facebook</a>
              </div>
            </div>
            <ImageBlock className="aspect-video w-full rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
