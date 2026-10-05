"use client";

import { ClayButton } from "./Clay";
import { IconSend, IconSparkles } from "./Icons";

export default function BottomBanner({ onConnectClick }) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-sage dark:bg-dark-sidebar p-6 md:p-8 shadow-sidebar">
      {/* Decorative background glow */}
      <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-coral/15 blur-2xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-14 h-14 rounded-3xl bg-white/20 dark:bg-white/10 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm shrink-0 mx-auto md:mx-0">
            <IconSparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1">
              Let&apos;s Build Together
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug">
              Building with purpose. Ready for full-stack & AI roles.
            </h2>
            <p className="text-white/80 text-xs md:text-sm mt-1 max-w-xl">
              Open to internship opportunities and engineering collaborations. Let&apos;s talk!
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <ClayButton
            as="a"
            href="mailto:nirajkrdangi@gmail.com"
            variant="coral"
            size="lg"
            className="shadow-button hover:shadow-button-hover font-bold text-sm md:text-base px-7 py-3.5 whitespace-nowrap"
          >
            <span>Let&apos;s Connect</span>
            <IconSend className="w-4 h-4 ml-1" />
          </ClayButton>
        </div>
      </div>
    </section>
  );
}
