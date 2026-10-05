"use client";

import Image from "next/image";
import { ClayCard } from "./Clay";
import { IconUser, IconExternal, IconSparkles } from "./Icons";

export default function AboutSection() {
  return (
    <ClayCard id="about" hover={false} className="!p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-sage/20 dark:bg-sage/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm">
            <IconUser className="w-5 h-5 text-sage-dark dark:text-sage-light" />
          </span>
          <div>
            <h2 className="text-base font-extrabold text-charcoal dark:text-dark-text">
              About Me
            </h2>
            <p className="text-[11px] text-olive dark:text-dark-muted">
              Building useful things with code
            </p>
          </div>
        </div>
        <a
          href="https://github.com/nirajkumardangi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-semibold text-olive dark:text-dark-muted hover:text-charcoal dark:hover:text-dark-text bg-cream dark:bg-dark-card-hover px-3 py-1.5 rounded-full shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover transition-all"
        >
          GitHub
          <IconExternal className="w-3 h-3" />
        </a>
      </div>

      {/* Bio */}
      <div className="space-y-3 text-sm text-olive dark:text-dark-muted leading-relaxed">
        <p>
          Full-Stack & AI Developer who has built RAG systems and computer-vision
          applications with Next.js, React, Node.js, PostgreSQL, MongoDB, AWS,
          and Docker.
        </p>
        <p>
          My work includes a local RAG knowledge assistant and an internship
          contribution to an AI-powered Tree Detection & Localization System at
          366Pi Technologies.
        </p>
        <p className="font-semibold text-charcoal dark:text-dark-text text-xs bg-sage/10 dark:bg-sage/8 rounded-2xl px-3 py-2 inline-block">
          Based in Ranchi, Jharkhand · Open to internship opportunities.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {[
          { label: "Full-stack", color: "bg-sage/20 dark:bg-sage/12" },
          { label: "Applied AI", color: "bg-[#A78BDA]/20 dark:bg-[#A78BDA]/12" },
          { label: "RAG systems", color: "bg-coral/15 dark:bg-coral/10" },
          { label: "Internship-ready", color: "bg-mint/20 dark:bg-mint/12" },
        ].map((tag) => (
          <span
            key={tag.label}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-charcoal dark:text-dark-text ${tag.color}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
            {tag.label}
          </span>
        ))}
      </div>

      {/* Decorative portrait */}
      <div className="relative mt-5 flex justify-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <div className="absolute inset-0 rounded-full bg-sage/15 dark:bg-sage/8 blur-xl" />
          <Image
            src="/illustrations/about-developer-v2.webp"
            alt=""
            width={200}
            height={200}
            className="relative w-full h-full rounded-3xl object-cover shadow-clay-sm dark:shadow-clay-dark-sm"
            loading="lazy"
          />
          <span className="absolute -top-1 -right-1 w-8 h-8 flex items-center justify-center">
            <IconSparkles className="w-5 h-5 text-mustard animate-float" />
          </span>
        </div>
      </div>
    </ClayCard>
  );
}
