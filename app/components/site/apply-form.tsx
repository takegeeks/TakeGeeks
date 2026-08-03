"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const experienceLevels = [
  "No experience",
  "Beginner (learning on my own)",
  "Intermediate (built a few projects)",
  "Advanced (professional or freelance experience)",
];

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const startedAtRef = useRef(Date.now());
  const hearAboutOptions = [
    "Instagram",
    "LinkedIn",
    "YouTube",
    "X (Twitter)",
    "Friend / Referral",
    "WhatsApp",
    "College",
    "Google Search",
    "Discord",
    "Other",
  ];

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          startedAt: startedAtRef.current,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-14 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <h3 className="text-xl font-semibold text-slate-900">
          Application received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-600">
          Thanks for applying to Batch 1. Our team will review your
          application and reach out by email.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Honeypot field, hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Jane Doe"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </Field>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="jane@example.com"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </Field>

        <Field label="Phone (optional)" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={30}
            placeholder="+1 555 000 1234"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </Field>

        <Field label="GitHub / portfolio (optional)" htmlFor="github">
          <input
            id="github"
            name="github"
            type="url"
            maxLength={200}
            placeholder="https://github.com/janedoe"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </Field>

        <Field label="Coding experience" htmlFor="experience" className="sm:col-span-2">
          <select
            id="experience"
            name="experience"
            required
            defaultValue=""
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="" disabled>
              Select your level
            </option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="How did you hear about TakeGeeks?"
          htmlFor="heardFrom"
        >
          <select
            id="heardFrom"
            name="heardFrom"
            required
            defaultValue=""
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="" disabled>
              Select an option
            </option>

            {hearAboutOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Why do you want to join TakeGeeks?" htmlFor="motivation" className="sm:col-span-2">
          <textarea
            id="motivation"
            name="motivation"
            required
            maxLength={3000}
            rows={4}
            placeholder="Tell us a bit about yourself and why you're applying."
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-6 w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Submit Application
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}