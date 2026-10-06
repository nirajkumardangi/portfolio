'use client';

import { useRef, useEffect } from 'react';
import { usePortfolio } from './PortfolioContext';

export default function Topbar() {
  const {
    theme,
    toggleTheme,
    searchQuery,
    setSearchQuery,
    isDrawerOpen,
    setIsDrawerOpen,
    isActivityOpen,
    setIsActivityOpen,
  } = usePortfolio();

  const activityRef = useRef(null);
  const isDark = theme === 'dark';

  // Close activity popover on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (isActivityOpen && activityRef.current && !activityRef.current.contains(event.target)) {
        setIsActivityOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isActivityOpen, setIsActivityOpen]);

  return (
    <header className="topbar">
      <div className="topbar-identity">
        <button
          className="mobile-menu icon-button"
          id="menuToggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded={isDrawerOpen}
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <svg className="icon"><use href="#i-menu"></use></svg>
        </button>
        <div>
          <p className="welcome-label">PORTFOLIO <span>·</span> RANCHI, INDIA</p>
          <h2>
            Niraj's Portfolio{' '}
            <span className="wave" aria-hidden="true">
              <svg className="icon"><use href="#i-wave"></use></svg>
            </span>
          </h2>
          <p className="availability">
            <span className="availability-dot"></span> Open to internship opportunities
          </p>
        </div>
      </div>

      <form
        className="search-box"
        id="siteSearchForm"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <svg className="icon search-icon"><use href="#i-search"></use></svg>
        <label className="visually-hidden" htmlFor="siteSearch">
          Search projects and skills
        </label>
        <input
          id="siteSearch"
          name="q"
          type="search"
          autoComplete="off"
          placeholder="Search projects, skills, or anything…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <kbd>Ctrl K</kbd>
      </form>

      <div className="topbar-actions">
        <button
          className="icon-button theme-button"
          id="themeToggle"
          type="button"
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          aria-pressed={isDark}
          title={isDark ? 'Switch to the warm light theme' : 'Switch to the dark theme'}
          onClick={toggleTheme}
        >
          <svg className="icon theme-sun"><use href="#i-sun"></use></svg>
          <svg className="icon theme-moon"><use href="#i-moon"></use></svg>
        </button>

        <div className="activity-wrap" ref={activityRef}>
          <button
            className="icon-button"
            id="activityToggle"
            type="button"
            aria-label="Open GitHub activity snapshot"
            aria-expanded={isActivityOpen}
            title="GitHub activity"
            onClick={(e) => {
              e.stopPropagation();
              setIsActivityOpen(!isActivityOpen);
            }}
          >
            <svg className="icon"><use href="#i-activity"></use></svg>
          </button>
          <div
            className="activity-popover"
            id="activityPopover"
            hidden={!isActivityOpen}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popover-head">
              <span className="activity-icon">
                <svg className="icon"><use href="#i-activity"></use></svg>
              </span>
              <div>
                <strong>GitHub activity</strong>
                <small>Snapshot · 1 Oct 2026</small>
              </div>
            </div>
            <div className="popover-stat">
              <b>803</b>
              <span>contributions in the last year</span>
            </div>
            <div className="activity-bar">
              <span style={{ width: '97%' }}></span>
              <span style={{ width: '3%' }}></span>
            </div>
            <p>97% commits <span>·</span> 3% pull requests</p>
            <a
              href="https://github.com/nirajkumardangi"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub profile <svg className="icon"><use href="#i-external"></use></svg>
            </a>
          </div>
        </div>

        <a
          className="top-avatar"
          href="https://www.linkedin.com/in/nirajkumardangi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Niraj Kumar Dangi’s LinkedIn profile"
        >
          <img
            src="/illustrations/developer-avatar-v2.webp"
            alt=""
            width={46}
            height={46}
          />
        </a>
      </div>
    </header>
  );
}
