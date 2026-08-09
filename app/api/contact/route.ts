import { NextRequest, NextResponse } from "next/server";
import { tenant } from "@/config/tenant";

type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  notes?: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function validate(body: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request body." };
  }
  const b = body as Record<string, unknown>;
  const required = ["name", "phone", "pickup", "dropoff", "date", "time"] as const;
  for (const field of required) {
    if (!isNonEmptyString(b[field])) {
      return { ok: false, error: `Missing required field: ${field}.` };
    }
  }
  return {
    ok: true,
    data: {
      name: (b.name as string).trim(),
      phone: (b.phone as string).trim(),
      email: isNonEmptyString(b.email) ? (b.email as string).trim() : undefined,
      pickup: (b.pickup as string).trim(),
      dropoff: (b.dropoff as string).trim(),
      date: (b.date as string).trim(),
      time: (b.time as string).trim(),
      notes: isNonEmptyString(b.notes) ? (b.notes as string).trim() : undefined,
    },
  };
}

/**
 * Sends the lead via Resend (https://resend.com) when RESEND_API_KEY is set.
 * Without a key configured, the submission is logged server-side so no lead
 * is silently lost during setup — wire up RESEND_API_KEY (see README) before
 * relying on this in production.
 */
async function sendLeadEmail(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const subject = `New reservation request — ${data.name} (${data.date} ${data.time})`;
  const text = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Pickup: ${data.pickup}`,
    `Drop-off: ${data.dropoff}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    data.notes ? `Notes: ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — lead was not emailed. Submission:\n" + text
    );
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: tenant.booking.leadEmailTo,
      reply_to: data.email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error (${res.status}): ${body}`);
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  try {
    await sendLeadEmail(result.data);
  } catch (err) {
    console.error("[contact] Failed to send lead email:", err);
    return NextResponse.json(
      { error: "We couldn't submit your request. Please call us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
