"use client";

import Image from "next/image";
import { IconSearch, IconSun, IconMoon, IconMenu, IconWave } from "./Icons";

export default function TopBar({ theme, onToggleTheme, onMenuOpen, searchQuery, onSearchChange }) {
  return (
    <header className="flex items-center gap-4 flex-wrap mb-6">
      {/* Mobile menu button */}
      <button
        onClick={onMenuOpen}
        className="lg:hidden p-2.5 rounded-2xl bg-cream dark:bg-dark-card shadow-clay-sm dark:shadow-clay-dark-sm text-charcoal dark:text-dark-text hover:shadow-clay-hover transition-all cursor-pointer"
        aria-label="Open navigation"
      >
        <IconMenu className="w-5 h-5" />
      </button>

      {/* Title area */}
      <div className="mr-auto">
        <p className="text-[10px] font-bold tracking-wider text-olive dark:text-dark-muted uppercase">
          PORTFOLIO · RANCHI, INDIA
        </p>
        <h2 className="text-lg font-extrabold text-charcoal dark:text-dark-text flex items-center gap-1.5">
          Niraj&apos;s Portfolio{" "}
          <span className="animate-wave text-xl">
            <IconWave className="w-5 h-5" />
          </span>
        </h2>
        <p className="flex items-center gap-1.5 text-xs text-olive dark:text-dark-muted">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
          Open to internship opportunities
        </p>
      </div>

      {/* Search bar */}
      <div className="order-last w-full sm:order-none sm:w-auto sm:flex-1 sm:max-w-sm">
        <div className="relative">
          <IconSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-olive/50 dark:text-dark-muted/50" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects, skills, tools..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-cream dark:bg-dark-card text-sm text-charcoal dark:text-dark-text placeholder:text-olive/40 dark:placeholder:text-dark-muted/40 shadow-[inset_3px_3px_6px_rgba(165,150,135,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(60,80,100,0.1)] border-none outline-none transition-shadow focus:shadow-[inset_4px_4px_8px_rgba(165,150,135,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.6)] dark:focus:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-3px_-3px_6px_rgba(60,80,100,0.15)]"
            id="siteSearch"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          className="p-2.5 rounded-2xl bg-cream dark:bg-dark-card shadow-clay-sm dark:shadow-clay-dark-sm text-charcoal dark:text-dark-text hover:shadow-clay-hover active:shadow-clay-pressed active:scale-95 transition-all cursor-pointer"
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? (
            <IconSun className="w-5 h-5" />
          ) : (
            <IconMoon className="w-5 h-5" />
          )}
        </button>

        {/* Avatar link */}
        <a
          href="https://www.linkedin.com/in/nirajkumardangi/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-2xl overflow-hidden shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover transition-all"
          aria-label="LinkedIn profile"
        >
          <Image
            src="/illustrations/developer-avatar-v2.webp"
            alt=""
            width={46}
            height={46}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </header>
  );
}
