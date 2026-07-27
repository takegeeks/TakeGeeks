"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  RefreshCw,
  Layers,
  Eye,
  GitPullRequest,
  Sparkles,
} from "lucide-react";
import { Card } from "@/app/components/ui/card";

const experiences = [
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Learn real version control the way engineering teams actually use it.",
  },
  {
    icon: RefreshCw,
    title: "Agile Sprints",
    description: "Daily standups, sprint planning, and team collaboration, every week.",
  },
  {
    icon: Layers,
    title: "Production Development",
    description: "Build the TakeGeeks Workspace, a living product, not a sandbox exercise.",
  },
  {
    icon: Eye,
    title: "Code Reviews",
    description: "Review code and receive feedback like a professional engineer.",
  },
  {
    icon: GitPullRequest,
    title: "Pull Requests",
    description: "Create, discuss, and merge real Pull Requests into a shared codebase.",
  },
  {
    icon: Sparkles,
    title: "Open Source",
    description: "Become an Open Source Contributor the moment your PR gets merged.",
  },
];

export function WhyTakeGeeks() {
  return (
    <section id="why-takegeeks" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why TakeGeeks?
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Coding is the easy part. We teach the rest.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
              <p>
                Traditional education teaches students how to code. TakeGeeks
                teaches students how software is actually built.
              </p>
              <p>
                Students work in teams, contribute to real products, use Git
                &amp; GitHub, participate in code reviews, follow Agile
                sprints, and gain practical engineering experience under
                mentor guidance.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
              What you&rsquo;ll experience
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {experiences.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <item.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}