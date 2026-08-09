"use client";

import { useState, type FormEvent } from "react";
import { tenant } from "@/config/tenant";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-black/15 bg-white px-4 py-2.5 text-sm text-black placeholder:text-black/35 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";
const labelClass = "text-xs font-semibold uppercase tracking-wide text-black/60";

function buildMailtoUrl(data: Record<string, string>) {
  const subject = `Reservation request — ${data.name} (${data.date} ${data.time})`;
  const lines = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Pickup: ${data.pickup}`,
    `Drop-off: ${data.dropoff}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    data.notes ? `Notes: ${data.notes}` : null,
  ].filter(Boolean);
  const params = new URLSearchParams({ subject, body: lines.join("\n") });
  return `mailto:${tenant.email}?${params.toString()}`;
}

/**
 * This site is statically hosted (GitHub Pages), so there's no server to
 * post the form to. If tenant.booking.leadFormEndpoint is set (a Formspree
 * form URL), submissions post there directly. Otherwise, submitting opens
 * a prefilled mailto: link as a zero-config fallback — see config/tenant.ts.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!tenant.booking.leadFormEndpoint) {
      window.location.href = buildMailtoUrl(data);
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch(tenant.booking.leadFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again or call us directly.");
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
        <h3 className="font-display text-xl font-semibold text-black">
          {tenant.booking.leadFormEndpoint ? "Request received" : "Almost done"}
        </h3>
        <p className="mt-2 text-sm text-black/70">
          {tenant.booking.leadFormEndpoint
            ? "Thanks — we'll confirm your reservation shortly. If your trip is time sensitive, please call us directly."
            : "Your email app should have opened with your request prefilled — just hit send to complete it. If nothing opened, please call us directly."}
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
