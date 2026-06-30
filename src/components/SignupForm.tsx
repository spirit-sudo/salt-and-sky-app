"use client";

import { useState } from "react";

export default function SignupForm({
  fields = ["name", "email", "phone"],
  submitLabel = "Submit",
  extraField,
}: {
  fields?: ("name" | "email" | "phone")[];
  submitLabel?: string;
  extraField?: { name: string; label: string; placeholder?: string };
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-amber-400/60 bg-amber-50 p-6 text-center">
        <p className="font-bold text-slate-900">You&apos;re in!</p>
        <p className="mt-1 text-sm text-slate-600">
          Thanks for signing up — we&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4"
    >
      {fields.includes("name") && (
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            required
            type="text"
            placeholder="Jane Doe"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none focus:border-amber-400"
          />
        </div>
      )}
      {fields.includes("email") && (
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            required
            type="email"
            placeholder="jane@email.com"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none focus:border-amber-400"
          />
        </div>
      )}
      {fields.includes("phone") && (
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            type="tel"
            placeholder="(555) 555-5555"
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none focus:border-amber-400"
          />
        </div>
      )}
      {extraField && (
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            {extraField.label}
          </label>
          <textarea
            placeholder={extraField.placeholder}
            rows={3}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none focus:border-amber-400"
          />
        </div>
      )}
      <button
        type="submit"
        className="mt-2 rounded-full bg-amber-400 px-6 py-3 font-bold uppercase tracking-wide text-slate-900 transition hover:bg-amber-300"
      >
        {submitLabel}
      </button>
    </form>
  );
}
