import type { Metadata } from "next";
import ImageBlock from "@/components/ImageBlock";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Linear Progression CrossFit coaching — questions about programs, pricing, or scheduling? Send a message to Coach Daimino Stewart.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact | Linear Progression",
    description:
      "Get in touch with Linear Progression CrossFit coaching — questions about programs, pricing, or scheduling? Send a message to Coach Daimino Stewart.",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            Questions about programs, schedule, or just want to say hi?
            Send a message.
          </p>
        </div>
      </section>

      <ImageBlock className="h-56 w-full sm:h-72" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
              Send a Message
            </h2>
            <div className="mt-6">
              <SignupForm
                submitLabel="Send Message"
                extraField={{
                  name: "message",
                  label: "Message",
                  placeholder: "How can we help?",
                }}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
                Location
              </h2>
              <p className="mt-2 text-slate-600">123 Iron Way, Your City, ST 00000</p>
            </div>
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
                Email
              </h2>
              <a
                href="mailto:coach@linearprogression.fit"
                className="mt-2 block text-slate-600 hover:text-amber-500"
              >
                coach@linearprogression.fit
              </a>
            </div>
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
                Phone
              </h2>
              <a
                href="tel:+15555555555"
                className="mt-2 block text-slate-600 hover:text-amber-500"
              >
                (555) 555-5555
              </a>
            </div>
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
                Follow
              </h2>
              <div className="mt-2 flex gap-4 text-slate-600">
                <a href="#" className="hover:text-amber-500">Instagram</a>
                <a href="#" className="hover:text-amber-500">Facebook</a>
                <a href="#" className="hover:text-amber-500">YouTube</a>
              </div>
            </div>
            <ImageBlock className="aspect-video w-full rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
