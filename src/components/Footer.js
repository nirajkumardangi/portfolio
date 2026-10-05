"use client";

import { IconArrow } from "./Icons";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-8 pt-6 pb-10 border-t border-cream-dark/40 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-olive dark:text-dark-muted">
      <div>
        <p className="font-semibold text-charcoal dark:text-dark-text">
          © 2026 Niraj Kumar Dangi
        </p>
        <p className="text-[11px] text-olive-light dark:text-dark-muted/70">
          Code with purpose. Build with passion.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span>Designed with 3D Claymorphism</span>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream dark:bg-dark-card shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover active:scale-95 text-charcoal dark:text-dark-text font-semibold transition-all cursor-pointer"
        >
          <span>Back to top</span>
          <IconArrow className="w-3.5 h-3.5 -rotate-90" />
        </button>
      </div>
    </footer>
  );
}
