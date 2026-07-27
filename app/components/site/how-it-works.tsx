"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const steps = [
  { number: "01", title: "Apply", description: "Submit your application for Batch 1." },
  { number: "02", title: "Get Selected", description: "We review applications and select candidates." },
  { number: "03", title: "Join Free Trial", description: "Start the 10-day free engineering trial." },
  { number: "04", title: "Contribute", description: "Ship a real Pull Request into a live project." },
  { number: "05", title: "Continue Apprenticeship", description: "Move into the full 5-month program." },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From application to apprentice
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-3">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-1 flex-col items-center lg:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <div className="mx-auto mb-3 font-mono text-xs font-semibold text-blue-600">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="my-3 flex shrink-0 items-center justify-center text-slate-300 lg:mx-1 lg:my-0">
                  <ArrowDown className="h-5 w-5 lg:hidden" />
                  <ArrowRight className="hidden h-5 w-5 lg:block" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}