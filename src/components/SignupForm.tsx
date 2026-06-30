"use client";

import { useState } from "react";

export default function SignupForm({
  fields = ["name", "email", "phone"],
  submitLabel = "Submit",
  extraField,
  successMessage = "Thanks for reaching out — we'll be in touch soon.",
}: {
  fields?: ("name" | "email" | "phone")[];
  submitLabel?: string;
  extraField?: { name: string; label: string; placeholder?: string };
  successMessage?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-teal/30 bg-teal/5 p-6 text-center">
        <p className="font-display text-lg text-navy">Message received.</p>
        <p className="mt-1 text-sm text-navy/60">{successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-5"
    >
      {fields.includes("name") && (
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-navy/50 mb-2">
            Full Name
          </label>
          <input
            required
            type="text"
            placeholder="Jane Doe"
            className="w-full border-b border-navy/20 bg-transparent pb-2 text-navy placeholder:text-navy/30 outline-none focus:border-teal transition-colors"
          />
        </div>
      )}
      {fields.includes("email") && (
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-navy/50 mb-2">
            Email
          </label>
          <input
            required
            type="email"
            placeholder="jane@email.com"
            className="w-full border-b border-navy/20 bg-transparent pb-2 text-navy placeholder:text-navy/30 outline-none focus:border-teal transition-colors"
          />
        </div>
      )}
      {fields.includes("phone") && (
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-navy/50 mb-2">
            Phone
          </label>
          <input
            type="tel"
            placeholder="(555) 555-5555"
            className="w-full border-b border-navy/20 bg-transparent pb-2 text-navy placeholder:text-navy/30 outline-none focus:border-teal transition-colors"
          />
        </div>
      )}
      {extraField && (
        <div>
          <label className="block text-xs uppercase tracking-[0.12em] text-navy/50 mb-2">
            {extraField.label}
          </label>
          <textarea
            placeholder={extraField.placeholder}
            rows={3}
            className="w-full border-b border-navy/20 bg-transparent pb-2 text-navy placeholder:text-navy/30 outline-none focus:border-teal transition-colors resize-none"
          />
        </div>
      )}
      <button
        type="submit"
        className="mt-2 bg-teal text-white text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-teal-dark transition-colors self-start"
      >
        {submitLabel}
      </button>
    </form>
  );
}
