"use client";

import { ClayCard, ClayButton } from "./Clay";
import {
  IconSend,
  IconMail,
  IconPhone,
  IconLinkedin,
  IconGithub,
  IconGlobe,
  IconArrow,
} from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact">
      <ClayCard hover={false} className="!p-6 md:!p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 rounded-2xl bg-coral/20 dark:bg-coral/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm">
                <IconSend className="w-5 h-5 text-coral dark:text-coral-light" />
              </span>
              <div>
                <h2 className="text-xl font-extrabold text-charcoal dark:text-dark-text">
                  Let&apos;s Connect
                </h2>
                <p className="text-xs text-olive dark:text-dark-muted">
                  Start a conversation · Ranchi, Jharkhand, India
                </p>
              </div>
            </div>
            <p className="text-sm text-olive dark:text-dark-muted max-w-lg mt-2 leading-relaxed">
              I&apos;m actively seeking internships, project opportunities, and engineering discussions in Full-Stack & Applied AI.
            </p>
          </div>

          <ClayButton
            as="a"
            href="mailto:nirajkrdangi@gmail.com"
            variant="coral"
            size="md"
            className="shrink-0"
          >
            <span>Say Hello</span>
            <IconArrow className="w-4 h-4" />
          </ClayButton>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          <a
            href="mailto:nirajkrdangi@gmail.com"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-sand/60 dark:bg-dark-card-hover shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover hover:-translate-y-0.5 active:scale-95 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-coral/15 dark:bg-coral/10 text-coral flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <IconMail className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-charcoal dark:text-dark-text">Email</span>
            <span className="text-[10px] text-olive dark:text-dark-muted truncate max-w-full">
              Send note
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/nirajkumardangi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-sand/60 dark:bg-dark-card-hover shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover hover:-translate-y-0.5 active:scale-95 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky/20 dark:bg-sky/15 text-[#3D7877] dark:text-sky-light flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <IconLinkedin className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-charcoal dark:text-dark-text">LinkedIn</span>
            <span className="text-[10px] text-olive dark:text-dark-muted truncate max-w-full">
              Connect
            </span>
          </a>

          <a
            href="https://github.com/nirajkumardangi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-sand/60 dark:bg-dark-card-hover shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover hover:-translate-y-0.5 active:scale-95 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal/10 dark:bg-white/10 text-charcoal dark:text-dark-text flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <IconGithub className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-charcoal dark:text-dark-text">GitHub</span>
            <span className="text-[10px] text-olive dark:text-dark-muted truncate max-w-full">
              Repositories
            </span>
          </a>

          <a
            href="tel:+918825224435"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-sand/60 dark:bg-dark-card-hover shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover hover:-translate-y-0.5 active:scale-95 transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-mint/25 dark:bg-mint/15 text-[#3A6B40] dark:text-mint-light flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <IconPhone className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-charcoal dark:text-dark-text">Phone</span>
            <span className="text-[10px] text-olive dark:text-dark-muted truncate max-w-full">
              Direct call
            </span>
          </a>

          <a
            href="https://nirajkrdangi.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-sand/60 dark:bg-dark-card-hover shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover hover:-translate-y-0.5 active:scale-95 transition-all text-center group col-span-2 sm:col-span-1"
          >
            <div className="w-10 h-10 rounded-xl bg-mustard/20 dark:bg-mustard/15 text-mustard dark:text-mustard-light flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <IconGlobe className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-charcoal dark:text-dark-text">Website</span>
            <span className="text-[10px] text-olive dark:text-dark-muted truncate max-w-full">
              Live domain
            </span>
          </a>
        </div>
      </ClayCard>
    </section>
  );
}
