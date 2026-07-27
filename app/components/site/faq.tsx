"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the 10-day trial free?",
    answer:
      "Yes. The entire 10-day engineering trial is completely free, with no obligation to continue into the full apprenticeship afterward.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No prior professional experience is required. You should be comfortable with the basics of programming; we teach the engineering workflow, tools, and mindset from scratch.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes. From the trial onward, you contribute to real, live products like the TakeGeeks Workspace, using the same Git, GitHub, and code review process professional teams use.",
  },
  {
    question: "What happens after the trial?",
    answer:
      "Students who complete the trial and demonstrate strong engagement are invited to continue into the full 5-month apprenticeship program.",
  },
  {
    question: "How many students are selected?",
    answer:
      "Batch 1 is limited to 15 students, so every apprentice gets direct, personalized mentorship from our engineering mentors.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className="px-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-slate-500">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}