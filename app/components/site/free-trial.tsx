"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GitBranch,
  BookOpen,
  Building2,
  ClipboardList,
  Hammer,
  Workflow,
  Eye,
  PartyPopper,
  Hammer as Build,
  Users,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { FaGithub} from "react-icons/fa";
import { Card } from "@/app/components/ui/card";

const days = [
  {
    day: 1,
    title: "Engineering Mindset & Team Onboarding",
    icon: Brain,
  },
  {
    day: 2,
    title: "Git Fundamentals",
    icon: GitBranch,
  },
  {
    day: 3,
    title: "GitHub & Team Collaboration",
    icon: FaGithub,
  },
  {
    day: 4,
    title: "Understanding the Existing Codebase",
    icon: BookOpen,
  },
  {
    day: 5,
    title: "Project Setup, Architecture & Low-Level Design",
    icon: Building2,
  },
  {
    day: 6,
    title: "Sprint Planning & Task Breakdown",
    icon: ClipboardList,
  },
  {
    day: 7,
    title: "Build Your First Feature",
    icon: Hammer,
  },
  {
    day: 8,
    title: "Testing, Debugging & Pull Requests",
    icon: Workflow,
  },
  {
    day: 9,
    title: "Code Reviews & Improvements",
    icon: Eye,
  },
  {
    day: 10,
    title: "Feature Demo & Sprint Review",
    icon: PartyPopper,
  },
];

const whyJoin = [
  {
    icon: Build,
    title: "Learn by Building",
    description: "Not watching videos. You ship code from day one.",
  },
  {
    icon: Workflow,
    title: "Real Engineering Experience",
    description: "Follow the exact workflow professional teams use.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work inside a team, like a real software company.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Building",
    description: "Walk away with real GitHub contributions to show for it.",
  },
];

const takeaways = [
  "Git experience",
  "GitHub experience",
  "Pull Requests",
  "Code Reviews",
  "Real project contribution",
  "Opportunity to become an Open Source Contributor",
];

export function FreeTrial() {
  return (
    <section id="trial" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Free 10-day engineering trial
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What you&rsquo;ll do
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {days.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Card className="flex h-full flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-blue-600">
                    Day {d.day}
                  </span>
                  <d.icon className="h-4 w-4 text-slate-400" strokeWidth={2} />
                </div>
                <p className="text-sm font-semibold leading-snug text-slate-900">
                  {d.title}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold tracking-tight text-slate-900">
            Why students join
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyJoin.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Card className="h-full p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Even if you don&rsquo;t continue
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-blue-100">
                The 10-day trial is designed to provide value on its own.
                You&rsquo;ll leave with:
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {takeaways.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}