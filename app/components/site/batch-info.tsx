"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ApplyForm } from "@/app/components/site/apply-form";

export function BatchInfo() {
  return (
    <section id="apply" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-8 py-16 text-center shadow-xl shadow-slate-200/60 sm:px-16"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Users className="h-6 w-6" strokeWidth={2} />
          </div>

          <div className="relative text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            Only 15
          </div>
          <p className="relative mt-2 text-lg font-medium text-slate-600">
            students for Batch 1
          </p>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500">
            Limited batch size ensures every student receives personalized
            mentorship from our engineering team.
          </p>

          <div className="relative mt-9">
            <Button size="lg" asChild>
              <a href="#apply-form">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <div id="apply-form" className="mt-12 scroll-mt-24">
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}