"use client";

import { IconCode, IconActivity, IconAward, IconTarget } from "./Icons";

const stats = [
  {
    label: "Public repositories",
    value: "36",
    caption: "Public projects & learning repos",
    icon: IconCode,
    colorClass: "bg-mint/25 dark:bg-mint/15",
    iconColor: "text-[#4A7D50] dark:text-mint-light",
  },
  {
    label: "Contributions",
    value: "803",
    caption: "Last year · snapshot 01 Oct 2026",
    icon: IconActivity,
    colorClass: "bg-coral-light/25 dark:bg-coral/15",
    iconColor: "text-coral dark:text-coral-light",
  },
  {
    label: "Credentials",
    value: "4 Listed",
    caption: "Resume + LinkedIn",
    icon: IconAward,
    colorClass: "bg-mustard-light/30 dark:bg-mustard/15",
    iconColor: "text-mustard dark:text-mustard-light",
  },
  {
    label: "Currently open to",
    value: "Internships",
    caption: "Full-stack & AI opportunities",
    icon: IconTarget,
    colorClass: "bg-sky-light/25 dark:bg-sky/15",
    iconColor: "text-[#4A8A89] dark:text-sky-light",
  },
];

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4" aria-label="Portfolio at a glance">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <article
            key={stat.label}
            className={`
              rounded-[24px] p-4 md:p-5
              bg-cream dark:bg-dark-card
              shadow-clay-sm dark:shadow-clay-dark-sm
              hover:shadow-clay-hover hover:-translate-y-0.5
              transition-all duration-300
              animate-slide-up
            `}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-start gap-3">
              <span
                className={`
                  w-10 h-10 rounded-2xl flex items-center justify-center shrink-0
                  shadow-clay-sm dark:shadow-clay-dark-sm
                  ${stat.colorClass}
                `}
              >
                <Icon className={`w-5 h-5 ${stat.iconColor}`} />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-olive dark:text-dark-muted leading-tight">
                  {stat.label}
                </p>
                <p className="text-xl font-extrabold text-charcoal dark:text-dark-text mt-0.5">
                  {stat.value}
                </p>
                <p className="text-[10px] text-olive/60 dark:text-dark-muted/60 mt-0.5 leading-tight">
                  {stat.caption}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
