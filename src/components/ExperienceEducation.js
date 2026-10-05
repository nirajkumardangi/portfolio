"use client";

import { ClayCard, ClayBadge } from "./Clay";
import {
  IconBriefcase,
  IconGraduation,
  IconExternal,
  IconBook,
  IconCheck,
} from "./Icons";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="space-y-6">
      <ClayCard hover={false} className="!p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-coral/20 dark:bg-coral/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm">
              <IconBriefcase className="w-5 h-5 text-coral dark:text-coral-light" />
            </span>
            <div>
              <h2 className="text-base font-extrabold text-charcoal dark:text-dark-text">
                Experience & Education
              </h2>
              <p className="text-[11px] text-olive dark:text-dark-muted">
                Career journey & academic background
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-mint-light/40 dark:bg-mint/20 text-[#3A6B40] dark:text-mint-light shadow-clay-sm dark:shadow-clay-dark-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
            Open for Roles
          </span>
        </div>

        {/* Timeline / Items */}
        <div className="space-y-5">
          {/* Item 1: Internship */}
          <div className="rounded-2xl bg-sand/60 dark:bg-dark-card-hover p-4 shadow-clay-sm dark:shadow-clay-dark-sm transition-all hover:-translate-y-0.5">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-coral/20 text-coral dark:bg-coral/15 dark:text-coral-light uppercase tracking-wider mb-1">
                  Internship
                </span>
                <h3 className="text-sm font-extrabold text-charcoal dark:text-dark-text">
                  Technology Intern
                </h3>
                <p className="text-xs font-semibold text-olive dark:text-dark-muted">
                  366Pi Technologies · Ranchi, Jharkhand (On-site)
                </p>
              </div>
              <span className="text-[11px] font-medium text-olive-light dark:text-dark-muted bg-cream dark:bg-dark-card px-2.5 py-1 rounded-full shadow-clay-sm dark:shadow-clay-dark-sm">
                Jun 2024 – Jul 2024
              </span>
            </div>

            <ul className="mt-2 space-y-1.5 text-xs text-olive dark:text-dark-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <IconCheck className="w-3.5 h-3.5 mt-0.5 text-coral shrink-0" />
                <span>
                  Built an AI Knowledge Assistant with RAG, ChromaDB, and local Ollama-based LLMs; created pipelines for PDF, DOCX, CSV, and Markdown.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-3.5 h-3.5 mt-0.5 text-coral shrink-0" />
                <span>
                  Contributed to an AI-powered Tree Detection & Localization system using YOLO computer vision; implemented image validation workflows.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-1.5 mt-3">
              <ClayBadge color="coral">RAG & ChromaDB</ClayBadge>
              <ClayBadge color="coral">YOLO & Vision</ClayBadge>
              <ClayBadge color="coral">FastAPI & Python</ClayBadge>
            </div>
          </div>

          {/* Item 2: MCA */}
          <div id="education" className="rounded-2xl bg-sand/60 dark:bg-dark-card-hover p-4 shadow-clay-sm dark:shadow-clay-dark-sm transition-all hover:-translate-y-0.5">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-mustard/20 text-[#A07028] dark:bg-mustard/15 dark:text-mustard-light uppercase tracking-wider mb-1">
                  Master&apos;s Degree
                </span>
                <h3 className="text-sm font-extrabold text-charcoal dark:text-dark-text">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-xs font-semibold text-olive dark:text-dark-muted">
                  Doranda College, Ranchi University
                </p>
              </div>
              <span className="text-[11px] font-medium text-olive-light dark:text-dark-muted bg-cream dark:bg-dark-card px-2.5 py-1 rounded-full shadow-clay-sm dark:shadow-clay-dark-sm">
                2024 – 2026 (Expected)
              </span>
            </div>
            <p className="text-xs text-olive dark:text-dark-muted leading-relaxed">
              Specializing in advanced Computer Science fundamentals, Full-Stack MERN Architecture, and applied Artificial Intelligence engineering.
            </p>
          </div>

          {/* Item 3: BSc */}
          <div className="rounded-2xl bg-sand/60 dark:bg-dark-card-hover p-4 shadow-clay-sm dark:shadow-clay-dark-sm transition-all hover:-translate-y-0.5">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky/20 text-[#3D7877] dark:bg-sky/15 dark:text-sky-light uppercase tracking-wider mb-1">
                  Bachelor&apos;s Degree
                </span>
                <h3 className="text-sm font-extrabold text-charcoal dark:text-dark-text">
                  BSc in Computer Science
                </h3>
                <p className="text-xs font-semibold text-olive dark:text-dark-muted">
                  Ranchi University · CGPA 8.12
                </p>
              </div>
              <span className="text-[11px] font-medium text-olive-light dark:text-dark-muted bg-cream dark:bg-dark-card px-2.5 py-1 rounded-full shadow-clay-sm dark:shadow-clay-dark-sm">
                2021 – 2024
              </span>
            </div>
            <p className="text-xs text-olive dark:text-dark-muted leading-relaxed mb-2">
              Core curriculum in data structures, algorithms, DBMS, operating systems, and web technologies.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-sage-dark dark:text-sage-light">
              <IconBook className="w-3.5 h-3.5" />
              <span>Final Project: FeedAid — Food Donation & Distribution Platform</span>
            </div>
          </div>
        </div>
      </ClayCard>
    </section>
  );
}
