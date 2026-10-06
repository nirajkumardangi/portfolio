'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    const targets = Array.from(
      new Set(
        document.querySelectorAll(
          '.stats-grid .stat-card, .overview-grid > .panel, .project-grid .project-card, .support-stack > .panel, .detail-grid > .panel, .achievements-panel, .blog-panel'
        )
      )
    );

    if (!targets.length) return;

    gsap.set(targets, { autoAlpha: 0, y: 18 });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target;
          const order = target.dataset.revealOrder ? Number(target.dataset.revealOrder) : 0;
          const delay = Math.min(order * 0.04 || 0.035, 0.16);

          gsap.to(target, {
            autoAlpha: 1,
            y: 0,
            duration: 0.64,
            delay,
            ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
          });
          obs.unobserve(target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    targets.forEach((target, index) => {
      target.dataset.revealOrder = String(index % 5);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
