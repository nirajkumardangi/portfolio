'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [theme, setThemeState] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Initialize theme from localStorage or document
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('niraj-portfolio-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setThemeState(savedTheme);
        document.documentElement.dataset.theme = savedTheme;
      } else {
        const current = document.documentElement.dataset.theme || 'light';
        setThemeState(current);
      }
    } catch (_) {
      // fallback
    }
  }, []);

  const setTheme = useCallback((nextTheme) => {
    const validTheme = nextTheme === 'dark' ? 'dark' : 'light';
    setThemeState(validTheme);
    document.documentElement.dataset.theme = validTheme;
    try {
      localStorage.setItem('niraj-portfolio-theme', validTheme);
    } catch (_) {}
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  // Sync drawer body class
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
  }, [isDrawerOpen]);

  // Global keydown handler (Ctrl+K / Cmd+K and Escape)
  useEffect(() => {
    function handleKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        const searchInput = document.getElementById('siteSearch');
        searchInput?.focus();
        searchInput?.select();
      }
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
        setIsActivityOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section observer for active nav highlighting
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'blog', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible && visible.target.id) {
            setActiveSection(visible.target.id);
          }
        },
        { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.15, 0.35, 0.6] }
      );

      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    }
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        searchQuery,
        setSearchQuery,
        isDrawerOpen,
        setIsDrawerOpen,
        isActivityOpen,
        setIsActivityOpen,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
}
