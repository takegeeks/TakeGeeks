"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  CircleDot,
  GitBranch,
  Code2,
  GitCommitHorizontal,
  GitPullRequest,
  Eye,
  GitMerge,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    label: "Sprint Planning",
    description: "Understand the task",
  },
  {
    icon: CircleDot,
    label: "Pick Issue",
    description: "Choose your ticket",
  },
  {
    icon: GitBranch,
    label: "Create Branch",
    description: "Start a feature branch",
  },
  {
    icon: Code2,
    label: "Develop",
    description: "Build the feature",
  },
  {
    icon: GitCommitHorizontal,
    label: "Commit",
    description: "Write clean commits",
  },
  {
    icon: GitPullRequest,
    label: "Pull Request",
    description: "Open your PR",
  },
  {
    icon: Eye,
    label: "Code Review",
    description: "Receive feedback",
  },
  {
    icon: GitMerge,
    label: "Merge",
    description: "Merge into main",
  },
  {
    icon: Rocket,
    label: "Deploy",
    description: "Release to production",
  },
];

export function WorkflowTimeline() {
  return (
    <section id="workflow" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            The engineering workflow
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Every feature ships the same way it does at a real company
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 md:block" />

          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 md:flex md:justify-between">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative flex flex-col items-center gap-3 text-center"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 shadow-sm">
                  <step.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-slate-900">
                    {step.label}
                  </h3>

                  <p className="max-w-[130px] text-xs leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}