"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-black/15 bg-white px-4 py-2.5 text-sm text-black placeholder:text-black/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";
const labelClass = "text-xs font-semibold uppercase tracking-wide text-black/60";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-gold/10 p-6 text-center">
        <h3 className="font-display text-xl font-semibold text-black">Request received</h3>
        <p className="mt-2 text-sm text-black/70">
          Thanks — we&apos;ll confirm your reservation shortly. If your trip is time
          sensitive, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${inputClass}`} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={`mt-1.5 ${inputClass}`}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" className={`mt-1.5 ${inputClass}`} autoComplete="email" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup" className={labelClass}>
            Pickup Location *
          </label>
          <input
            id="pickup"
            name="pickup"
            required
            placeholder="e.g. Dulles Airport (IAD)"
            className={`mt-1.5 ${inputClass}`}
          />
        </div>
        <div>
          <label htmlFor="dropoff" className={labelClass}>
            Drop-off Location *
          </label>
          <input
            id="dropoff"
            name="dropoff"
            required
            placeholder="e.g. Georgetown, DC"
            className={`mt-1.5 ${inputClass}`}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClass}>
            Date *
          </label>
          <input id="date" name="date" type="date" required className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label htmlFor="time" className={labelClass}>
            Time *
          </label>
          <input id="time" name="time" type="time" required className={`mt-1.5 ${inputClass}`} />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Flight number, number of passengers, luggage, special requests..."
          className={`mt-1.5 ${inputClass}`}
        />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-gold-light disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Request Reservation"}
      </button>
    </form>
  );
}
