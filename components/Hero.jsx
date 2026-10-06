'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const reduceMotion = Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);
    if (!reduceMotion && titleRef.current) {
      const titleWords = titleRef.current.querySelectorAll('.title-word');
      if (titleWords.length) {
        gsap.fromTo(
          titleWords,
          { y: 15, autoAlpha: 0, rotateX: -12, filter: 'blur(4px)' },
          {
            y: 0,
            autoAlpha: 1,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 0.82,
            ease: 'power3.out',
            stagger: 0.095,
            delay: 0.12,
            clearProps: 'transform,filter,opacity,visibility',
          }
        );
      }
    }
  }, []);

  return (
    <section className="hero-card" id="home" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true">
        <img
          src="/illustrations/developer-workspace-v2.webp"
          alt=""
          fetchPriority="high"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-copy">
        <p className="hero-eyebrow">
          <svg className="icon"><use href="#i-wave"></use></svg> FULL-STACK + APPLIED AI
        </p>
        <h1 id="hero-title" ref={titleRef} aria-label="Niraj Kumar Dangi">
          <span className="title-word">Niraj</span>{' '}
          <span className="title-word">Kumar</span>{' '}
          <span className="title-word">Dangi</span>
        </h1>
        <h2>Full-Stack &amp; AI Developer</h2>
        <p className="hero-description">
          I build RAG systems and computer-vision applications with Next.js, React, Node.js, PostgreSQL, MongoDB, AWS, and Docker—from local document intelligence to practical AI products.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore My Work <svg className="icon"><use href="#i-arrow"></use></svg>
          </a>
          <a
            className="button button-secondary resume-trigger"
            href="/resume/Niraj-Kumar-Dangi-Resume.pdf"
            download="Niraj-Kumar-Dangi-Resume.pdf"
          >
            <svg className="icon"><use href="#i-download"></use></svg> Resume PDF
          </a>
        </div>
      </div>
      <div className="hero-note" aria-hidden="true">
        <span>Ideas into useful software</span>
        <svg viewBox="0 0 86 46">
          <path d="M78 5C54 4 36 12 15 37M15 37l3-13M15 37l13-3" />
        </svg>
      </div>
      <div className="hero-orbit orbit-one" aria-hidden="true"></div>
      <div className="hero-orbit orbit-two" aria-hidden="true"></div>
    </section>
  );
}
