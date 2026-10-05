"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import StatsGrid from "@/components/StatsGrid";
import TechStack from "@/components/TechStack";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceEducation from "@/components/ExperienceEducation";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import BottomBanner from "@/components/BottomBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const applyTheme = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    if (t === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Sync theme with document & localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("nkd-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem("nkd-theme", nextTheme);
  };

  // Keyboard shortcut Ctrl+K to search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.getElementById("siteSearch");
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "education",
      "certifications",
      "achievements",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-sand dark:bg-dark-bg text-charcoal dark:text-dark-text transition-colors duration-300">
      <div className="max-w-[1560px] mx-auto p-3 sm:p-5 lg:p-6 flex flex-col lg:flex-row gap-6">
        {/* Left Sticky / Tactile Clay Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onNavClick={handleNavClick}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Dashboard Area */}
        <main className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Top Bar with Search & Theme toggle */}
          <TopBar
            theme={theme}
            onToggleTheme={toggleTheme}
            onMenuOpen={() => setIsSidebarOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Hero Banner Card */}
          <HeroSection />

          {/* Quick Metrics Clay Grid */}
          <StatsGrid />

          {/* Tech Stack Matrix with Interactive Chips */}
          <TechStack searchQuery={searchQuery} />

          {/* About Me Section */}
          <AboutSection />

          {/* Featured Projects with Preview Cards */}
          <ProjectsSection searchQuery={searchQuery} />

          {/* Row 3: Experience & Education + Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <ExperienceEducation />
            <CertificationsSection />
          </div>

          {/* GitHub Highlights & Achievements */}
          <AchievementsSection />

          {/* Bottom Sage Green Clay Feature Banner */}
          <BottomBanner onConnectClick={() => handleNavClick("contact")} />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
