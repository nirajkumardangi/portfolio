'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const reduceMotion = Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);
    if (!reduceMotion) {
      if (titleRef.current) {
        const titleWords = titleRef.current.querySelectorAll('.title-word');
        if (titleWords.length) {
          gsap.fromTo(
            titleWords,
            { y: 18, autoAlpha: 0, rotateX: -14, filter: 'blur(4px)' },
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

      if (stageRef.current) {
        gsap.fromTo(
          stageRef.current,
          { autoAlpha: 0, scale: 0.96, y: 14 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.05 }
        );
      }
    }
  }, []);

  return (
    <section className="hero-card" id="home" aria-labelledby="hero-title">
      {/* Background Ambience & Soft Depth */}
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-glow glow-warm"></div>
        <div className="hero-glow glow-peach"></div>
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
      </div>

      <div className="hero-story-grid">
        {/* Left Side: Large Storytelling 3D Workspace Scene */}
        <div className="hero-visual-col" ref={stageRef}>
          <div className="hero-stage-frame">
            <div className="hero-stage-glow"></div>
            <div className="hero-stage-inner">
              <img
                src="/illustrations/niraj-hero-workspace.jpg"
                alt="Illustrated scene of Niraj Kumar Dangi coding on a laptop at a warm desk with books, coffee, and plant"
                className="hero-stage-img"
                fetchPriority="high"
                width={800}
                height={600}
              />
            </div>

            {/* Tactile Floating Badges on Illustration Scene */}
            <div className="stage-badge badge-top-left" aria-hidden="true">
              <span className="stage-badge-icon icon-sparkle">
                <svg className="icon"><use href="#i-sparkles"></use></svg>
              </span>
              <span className="stage-badge-text">Applied AI &amp; Vision</span>
            </div>

            <div className="stage-badge badge-bottom-right" aria-hidden="true">
              <span className="stage-badge-icon icon-code">
                <svg className="icon"><use href="#i-code"></use></svg>
              </span>
              <span className="stage-badge-text">Full-Stack Architect</span>
            </div>
          </div>
        </div>

        {/* Right Side: Strong Personal Brand Typography & CTA Hierarchy */}
        <div className="hero-copy-col">
          {/* Floating Chip Row */}
          <div className="hero-chips-row">
            <span className="hero-chip chip-eyebrow">
              <svg className="icon"><use href="#i-sparkles"></use></svg>
              <span>Full Stack + Applied AI</span>
            </span>
            <span className="hero-chip chip-status">
              <span className="availability-dot"></span>
              <span>Open to Internships</span>
            </span>
          </div>

          {/* 1. Name */}
          <h1 id="hero-title" ref={titleRef} aria-label="Niraj Kumar Dangi">
            <span className="title-word">Niraj</span>{' '}
            <span className="title-word">Kumar</span>{' '}
            <span className="title-word">Dangi</span>
          </h1>

          {/* 2. Role Title */}
          <div className="hero-role-wrapper">
            <h2 className="hero-role-text">Full-Stack &amp; AI Developer</h2>
            <span className="hero-role-badge">MCA &apos;26</span>
          </div>

          {/* 3. Short Value Proposition */}
          <p className="hero-description">
            I build RAG systems and computer-vision applications with Next.js, React, Node.js, PostgreSQL, MongoDB, AWS, and Docker—from local document intelligence to practical AI products.
          </p>

          {/* Tiny Feature Pillars */}
          <div className="hero-features-row" aria-label="Core competencies">
            <span className="feature-pill">
              <svg className="icon"><use href="#i-database"></use></svg>
              <span>Local RAG Systems</span>
            </span>
            <span className="feature-pill">
              <svg className="icon"><use href="#i-target"></use></svg>
              <span>YOLO Object Detection</span>
            </span>
            <span className="feature-pill">
              <svg className="icon"><use href="#i-layers"></use></svg>
              <span>Production Web Apps</span>
            </span>
          </div>

          {/* 4. CTA Buttons */}
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              <span>Explore My Work</span>
              <svg className="icon"><use href="#i-arrow"></use></svg>
            </a>
            <a
              className="button button-secondary resume-trigger"
              href="/resume/Niraj-Kumar-Dangi-Resume.pdf"
              download="Niraj-Kumar-Dangi-Resume.pdf"
            >
              <svg className="icon"><use href="#i-download"></use></svg>
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Handcrafted Note with Sketch Arrow */}
      <div className="hero-note" aria-hidden="true">
        <span>Ideas into useful software</span>
        <svg viewBox="0 0 86 46">
          <path d="M78 5C54 4 36 12 15 37M15 37l3-13M15 37l13-3" />
        </svg>
      </div>
    </section>
  );
}
