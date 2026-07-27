import type { Metadata } from "next";
import { Navbar } from "@/app/components/site/navbar";
import { Hero } from "@/app/components/site/hero";
import { TrustedStats } from "@/app/components/site/trusted-stats";
import { WhyTakeGeeks } from "@/app/components/site/why-takegeeks";
import { WorkflowTimeline } from "@/app/components/site/workflow-timeline";
import { FreeTrial } from "@/app/components/site/free-trial";
import { HowItWorks } from "@/app/components/site/how-it-works";
import { BatchInfo } from "@/app/components/site/batch-info";
import { FAQ } from "@/app/components/site/faq";
import { Footer } from "@/app/components/site/footer";

export const metadata: Metadata = {
  title: "TakeGeeks — Software Engineering Apprenticeship",
  description:
    "TakeGeeks is a Software Engineering Apprenticeship where students learn by building real products, collaborating with teams, and following professional engineering workflows. Apply for Batch 1.",
  keywords: [
    "software engineering apprenticeship",
    "learn to code",
    "git and github",
    "pull requests",
    "agile development",
    "open source",
    "TakeGeeks",
  ],
  openGraph: {
    title: "TakeGeeks — Software Engineering Apprenticeship",
    description:
      "Become a Software Engineer by Working on Real Products. Git, GitHub, code reviews, Agile sprints, and real projects, under mentor guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TakeGeeks — Software Engineering Apprenticeship",
    description:
      "Become a Software Engineer by Working on Real Products. Apply for Batch 1.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <Hero />
      <TrustedStats />
      <WhyTakeGeeks />
      <WorkflowTimeline />
      <FreeTrial />
      <HowItWorks />
      <BatchInfo />
      <FAQ />
      <Footer />
    </main>
  );
}