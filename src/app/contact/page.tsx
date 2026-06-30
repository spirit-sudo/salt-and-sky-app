import type { Metadata } from "next";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Check Availability & Contact",
  description:
    "Check availability and book Wild Moon Ranch in Julian, CA directly — no third-party fees. Send your dates and we'll confirm pricing and availability.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Check Availability & Contact | Wild Moon Ranch",
    description:
      "Check availability and book Wild Moon Ranch in Julian, CA directly — no third-party fees.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white text-navy">

      {/* ── Hero ── */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/photos/coffee-bar.jpg"
          alt="Coffee bar at Wild Moon Ranch"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60 mb-4">No Booking Fees</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white">
            Check Availability
          </h1>
        </div>
      </section>

      {/* ── Contact grid ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Request to Book</p>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-navy mb-8">
              Tell us your dates
            </h2>
            <p className="text-sm text-navy/60 mb-10 leading-relaxed">
              Send us your preferred dates and group size and we&apos;ll confirm
              availability and pricing directly — no third-party fees, no middleman.
            </p>
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

          {/* Contact details */}
          <div className="space-y-12 pt-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Location</p>
              <p className="text-sm text-navy/70">Julian, CA 92036</p>
              <p className="mt-1 text-xs text-navy/40">Exact address provided after booking is confirmed.</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Email</p>
              <a
                href="mailto:stay@wildmoonranch.com"
                className="text-sm text-navy/70 hover:text-teal transition-colors"
              >
                stay@wildmoonranch.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Phone</p>
              <a
                href="tel:+15555555555"
                className="text-sm text-navy/70 hover:text-teal transition-colors"
              >
                (555) 555-5555
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Follow</p>
              <div className="flex gap-6 text-sm text-navy/70">
                <a href="https://www.instagram.com/wildmoonranch/" className="hover:text-teal transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-teal transition-colors">Facebook</a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/photos/theater-room-popcorn.jpg"
                alt="Media room at Wild Moon Ranch"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why book direct ── */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "No Service Fees", body: "Skip the 10–15% Airbnb and VRBO fees by booking with us directly." },
            { label: "Direct Communication", body: "Ask questions, request early check-in, or get local tips straight from the host." },
            { label: "Best Rate Guaranteed", body: "The lowest price is always through this site — no exceptions." },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{item.label}</p>
              <p className="text-sm text-navy/60 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
