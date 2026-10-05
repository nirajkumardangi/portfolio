"use client";

import { ClayCard } from "./Clay";
import { IconSparkles, IconAward, IconActivity, IconArrow } from "./Icons";

export default function AchievementsSection() {
  return (
    <section id="achievements">
      <ClayCard hover={false} className="!p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-coral/20 dark:bg-coral/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm">
              <IconSparkles className="w-5 h-5 text-coral dark:text-coral-light" />
            </span>
            <div>
              <h2 className="text-base font-extrabold text-charcoal dark:text-dark-text">
                GitHub Highlights
              </h2>
              <p className="text-[11px] text-olive dark:text-dark-muted">
                Public activity snapshot · 2026
              </p>
            </div>
          </div>
          <a
            href="https://github.com/nirajkumardangi?tab=achievements"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-olive dark:text-dark-muted hover:text-charcoal dark:hover:text-dark-text bg-cream dark:bg-dark-card-hover px-3 py-1.5 rounded-full shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover transition-all"
          >
            View profile
            <IconArrow className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Badge 1 */}
          <div className="rounded-2xl bg-sand/60 dark:bg-dark-card-hover p-4 shadow-clay-sm dark:shadow-clay-dark-sm flex items-center gap-3.5 transition-all hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-mustard/20 dark:bg-mustard/15 flex items-center justify-center relative shadow-clay-sm dark:shadow-clay-dark-sm shrink-0">
              <IconAward className="w-6 h-6 text-mustard dark:text-mustard-light" />
              <span className="absolute -top-1 -right-1 bg-coral text-white text-[9px] font-black px-1.5 py-0.2 rounded-full shadow-button">
                ×2
              </span>
            </div>
            <div>
              <strong className="block text-sm font-extrabold text-charcoal dark:text-dark-text">
                Pull Shark · Bronze
              </strong>
              <small className="text-xs text-olive dark:text-dark-muted">
                GitHub profile achievement
              </small>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="rounded-2xl bg-sand/60 dark:bg-dark-card-hover p-4 shadow-clay-sm dark:shadow-clay-dark-sm flex items-center gap-3.5 transition-all hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-coral/20 dark:bg-coral/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm shrink-0">
              <IconActivity className="w-6 h-6 text-coral dark:text-coral-light" />
            </div>
            <div>
              <strong className="block text-sm font-extrabold text-charcoal dark:text-dark-text">
                803 contributions
              </strong>
              <small className="text-xs text-olive dark:text-dark-muted">
                Last year, as displayed on GitHub
              </small>
            </div>
          </div>

          {/* Note */}
          <div className="sm:col-span-2 lg:col-span-1 rounded-2xl bg-sand/60 dark:bg-dark-card-hover p-4 shadow-clay-sm dark:shadow-clay-dark-sm flex items-center gap-3.5 transition-all hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-mint/25 dark:bg-mint/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm shrink-0">
              <IconSparkles className="w-6 h-6 text-[#3A6B40] dark:text-mint-light" />
            </div>
            <div>
              <p className="text-xs text-olive dark:text-dark-muted leading-relaxed font-medium">
                Actively contributing to open-source and shipping modern AI & web products.
              </p>
            </div>
          </div>
        </div>
      </ClayCard>
    </section>
  );
}
