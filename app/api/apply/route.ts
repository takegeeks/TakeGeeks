import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit } from "@/app/lib/Rate limit";

// Where applications land. Change these if the inboxes ever change.
const RECIPIENTS = ["contact@takegeeks.com", "jawad@takegeeks.com"];

const LIMITS = {
  name: 100,
  email: 200,
  phone: 30,
  github: 200,
  experience: 100,
  motivation: 3000,
};

type ApplyPayload = {
  name: string;
  email: string;
  phone?: string;
  github?: string;
  experience: string;
  motivation: string;
  company?: string; // honeypot, should always be empty
  startedAt?: number; // ms timestamp from when the form was rendered
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  // 1. Rate limit: 5 applications per IP per 10 minutes.
  const { ok: withinLimit } = rateLimit(`apply:${ip}`, {
    limit: 5,
    windowMs: 10 * 60 * 1000,
  });
  if (!withinLimit) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      { status: 429 }
    );
  }

  let body: ApplyPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, github, experience, motivation, company, startedAt } = body;

  // 2. Honeypot: real users never fill this field in.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  // 3. Timing trap: a human takes at least a couple seconds to fill this out.
  if (typeof startedAt === "number" && Date.now() - startedAt < 2000) {
    return NextResponse.json({ ok: true }); // pretend success, drop silently
  }

  // 4. Required fields.
  if (!name?.trim() || !email?.trim() || !experience?.trim() || !motivation?.trim()) {
    return NextResponse.json(
      { error: "Name, email, experience level, and motivation are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // 5. Length caps, so nobody can post megabytes of text into an email.
  const tooLong =
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    (phone && phone.length > LIMITS.phone) ||
    (github && github.length > LIMITS.github) ||
    experience.length > LIMITS.experience ||
    motivation.length > LIMITS.motivation;

  if (tooLong) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    MAIL_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Missing SMTP environment variables for /api/apply");
    return NextResponse.json(
      { error: "Application system isn't configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true", // true for port 465, false for 587/25
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `New Batch 1 application: ${name}`;

  const text = [
    `New TakeGeeks application`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone?.trim() || "-"}`,
    `GitHub / portfolio: ${github?.trim() || "-"}`,
    `Experience level: ${experience}`,
    `Submitted from IP: ${ip}`,
    ``,
    `Why they want to join:`,
    motivation,
  ].join("\n");

  const html = `
    <div style="font-family:sans-serif;font-size:14px;color:#0f172a;line-height:1.6;">
      <h2 style="margin:0 0 16px;">New TakeGeeks application</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone?.trim() || "-")}</p>
      <p><strong>GitHub / portfolio:</strong> ${escapeHtml(github?.trim() || "-")}</p>
      <p><strong>Experience level:</strong> ${escapeHtml(experience)}</p>
      <p><strong>Why they want to join:</strong></p>
      <p style="white-space:pre-wrap;">${escapeHtml(motivation)}</p>
    </div>
  `;

try {
  const info = await transporter.sendMail({
    from: SMTP_USER!,
    to: RECIPIENTS,
    replyTo: email,
    subject,
    text,
    html,
  });

  console.log("Mail sent:", info);

  return NextResponse.json({ ok: true });
} catch (err) {
  console.error("SMTP_USER:", SMTP_USER);
  console.error("MAIL_FROM:", MAIL_FROM);
  console.error("SMTP_HOST:", SMTP_HOST);
  console.error("SMTP_PORT:", SMTP_PORT);
  console.error("Full error:", err);

  return NextResponse.json(
    {
      error: err instanceof Error ? err.message : String(err),
    },
    { status: 500 }
  );
}
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}