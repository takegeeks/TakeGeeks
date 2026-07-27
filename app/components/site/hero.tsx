"use client";

import { motion } from "framer-motion";
import { ArrowRight, GitBranch, GitMerge, GitPullRequest, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.25) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Batch 1 &middot; Applications open
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
            Become a Software Engineer by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
             Working on Real Products
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            TakeGeeks is a Software Engineering Apprenticeship where students
            learn by building real products, collaborating with teams, and
            following professional engineering workflows.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#apply">
                Apply for Batch 1
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#why-takegeeks">Learn More</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              No experience required
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Only 15 seats
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
            <div className="flex items-center gap-1.5 rounded-t-2xl border-b border-slate-100 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500">
                <GitBranch className="h-3 w-3" />
                feature/auth-flow
              </span>
            </div>

            <div className="space-y-1.5 bg-slate-900 px-5 py-5 font-mono text-[12.5px] leading-relaxed">
              <div className="text-slate-500">// PR #142 &middot; auth-flow.ts</div>
              <div><span className="text-purple-400">export function</span> <span className="text-blue-400">verifySession</span><span className="text-slate-300">(token: string) {'{'}</span></div>
              <div className="pl-4 text-slate-300">const user = <span className="text-blue-400">decode</span>(token);</div>
              <div className="pl-4 text-emerald-400">+ if (!user?.active) throw new AuthError();</div>
              <div className="pl-4 text-red-400/80 line-through decoration-red-400/50">- return user;</div>
              <div className="pl-4 text-emerald-400">+ return {'{'} ...user, verifiedAt: Date.now() {'}'};</div>
              <div className="text-slate-300">{'}'}</div>
            </div>

            <div className="flex items-center justify-between rounded-b-2xl border-t border-slate-100 px-5 py-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                <GitPullRequest className="h-4 w-4 text-blue-600" />
                2 approvals &middot; CI passing
              </div>
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                <GitMerge className="h-3 w-3" />
                Merged
              </span>
            </div>
          </div>

          <div className="absolute -left-6 top-10 hidden rotate-[-4deg] rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-medium text-slate-600 shadow-lg sm:flex sm:items-center sm:gap-1.5">
            <Circle className="h-2 w-2 fill-blue-600 text-blue-600" />
            Sprint 4 &middot; Day 3 of 10
          </div>
          <div className="absolute -right-4 bottom-6 hidden rotate-[3deg] rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-medium text-slate-600 shadow-lg sm:flex sm:items-center sm:gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
            Code review requested
          </div>
        </motion.div>
      </div>
    </section>
  );
}