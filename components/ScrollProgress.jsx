'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let progressQueued = false;

    function paintProgress() {
      progressQueued = false;
      if (!progressRef.current) return;
      const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, window.scrollY / range))})`;
    }

    function queueProgress() {
      if (progressQueued) return;
      progressQueued = true;
      window.requestAnimationFrame(paintProgress);
    }

    window.addEventListener('scroll', queueProgress, { passive: true });
    window.addEventListener('resize', queueProgress, { passive: true });
    paintProgress();

    return () => {
      window.removeEventListener('scroll', queueProgress);
      window.removeEventListener('resize', queueProgress);
    };
  }, []);

  return <div className="scroll-progress" id="pageProgress" ref={progressRef} aria-hidden="true" />;
}
