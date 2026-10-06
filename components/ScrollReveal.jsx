'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    // Collect all cards and panels for progressive reveal
    const allTargets = Array.from(
      new Set(
        document.querySelectorAll(
          '.stats-grid .stat-card, .overview-grid > .panel, .project-grid .project-card, .support-stack > .panel, .detail-grid > .panel, .achievements-panel, .blog-panel'
        )
      )
    );

    if (!allTargets.length) return;

    // Check viewport height to identify immediate above-the-fold targets
    const vh = window.innerHeight || 800;
    const initialTargets = [];
    const deferredTargets = [];

    allTargets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      if (rect.top < vh * 0.85) {
        initialTargets.push(target);
      } else {
        deferredTargets.push(target);
      }
    });

    // 1. Initial Page Load: progressive staggered entrance for visible cards
    if (initialTargets.length) {
      gsap.fromTo(
        initialTargets,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.72,
          ease: 'power2.out',
          stagger: 0.075,
          delay: 0.08,
          clearProps: 'transform,opacity,visibility',
        }
      );
    }

    // 2. Deferred Targets: observe with IntersectionObserver as user scrolls
    if (deferredTargets.length) {
      gsap.set(deferredTargets, { autoAlpha: 0, y: 18 });

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target;
            const order = target.dataset.revealOrder ? Number(target.dataset.revealOrder) : 0;
            const delay = Math.min(order * 0.045 || 0.035, 0.16);

            gsap.to(target, {
              autoAlpha: 1,
              y: 0,
              duration: 0.68,
              delay,
              ease: 'power2.out',
              clearProps: 'transform,opacity,visibility',
            });
            obs.unobserve(target);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
      );

      deferredTargets.forEach((target, index) => {
        target.dataset.revealOrder = String(index % 5);
        observer.observe(target);
      });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}
