"use client";

import { motion } from "framer-motion";
import { Clock, CalendarRange, Code2, GitBranch } from "lucide-react";

const stats = [
  { icon: Clock, value: "10 Days", label: "Free Engineering Trial" },
  { icon: CalendarRange, value: "5 Months", label: "Apprenticeship" },
  { icon: Code2, value: "Real Software", label: "Not toy projects" },
  { icon: GitBranch, value: "Open Source", label: "Contributions" },
];

export function TrustedStats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center gap-2 border-slate-100 px-6 py-10 text-center sm:border-l sm:first:border-l-0"
          >
            <stat.icon className="h-5 w-5 text-blue-600" strokeWidth={2} />
            <div className="text-2xl font-bold tracking-tight text-slate-900">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}