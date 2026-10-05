"use client";

import Image from "next/image";
import { ClayButton } from "./Clay";
import { IconArrow, IconDownload, IconWave } from "./Icons";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[32px] bg-peach dark:bg-dark-card shadow-clay dark:shadow-clay-dark p-6 md:p-8"
    >
      {/* Decorative floating orbs */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-coral/10 dark:bg-coral/5 blur-2xl animate-float" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-sage/15 dark:bg-sage/8 blur-xl animate-float delay-500" />

      <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Illustration */}
        <div className="relative w-full max-w-[240px] md:max-w-[280px] shrink-0">
          <div className="rounded-3xl overflow-hidden shadow-clay-sm dark:shadow-clay-dark-sm">
            <Image
              src="/illustrations/developer-workspace-v2.webp"
              alt="Niraj at his developer workspace"
              width={560}
              height={560}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Floating tag */}
          <div className="absolute -bottom-2 -right-2 bg-cream dark:bg-dark-card-hover rounded-2xl px-3 py-1.5 shadow-clay-sm dark:shadow-clay-dark-sm text-[10px] font-bold text-charcoal dark:text-dark-text animate-float delay-300">
            <IconWave className="w-3 h-3 inline mr-1" />
            FULL-STACK + APPLIED AI
          </div>
        </div>

        {/* Copy */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs font-bold tracking-wider text-coral dark:text-coral-light uppercase mb-2 flex items-center justify-center md:justify-start gap-1.5">
            <IconWave className="w-4 h-4" />
            FULL-STACK + APPLIED AI
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-charcoal dark:text-dark-text leading-tight mb-3">
            Niraj Kumar Dangi
          </h1>

          <h2 className="text-lg font-bold text-olive dark:text-dark-muted mb-3">
            Full-Stack & AI Developer
          </h2>

          <p className="text-sm text-olive dark:text-dark-muted leading-relaxed mb-6 max-w-md">
            I build RAG systems and computer-vision applications with Next.js,
            React, Node.js, PostgreSQL, MongoDB, AWS, and Docker—from local
            document intelligence to practical AI products.
          </p>

          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
            <ClayButton as="a" href="#projects" variant="coral" size="md">
              Explore My Work
              <IconArrow className="w-4 h-4" />
            </ClayButton>

            <ClayButton
              as="a"
              href="/resume/Niraj-Kumar-Dangi-Resume.pdf"
              download="Niraj-Kumar-Dangi-Resume.pdf"
              variant="cream"
              size="md"
            >
              <IconDownload className="w-4 h-4" />
              Resume PDF
            </ClayButton>
          </div>
        </div>
      </div>
    </section>
  );
}
