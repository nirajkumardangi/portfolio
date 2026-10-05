"use client";

import Image from "next/image";
import { ClayButton } from "./Clay";
import {
  IconHome,
  IconUser,
  IconLayers,
  IconFolder,
  IconBriefcase,
  IconGraduation,
  IconAward,
  IconBook,
  IconSend,
  IconDownload,
  IconClose,
} from "./Icons";

const navItems = [
  { label: "Home", icon: IconHome, href: "#home" },
  { label: "About Me", icon: IconUser, href: "#about" },
  { label: "Skills", icon: IconLayers, href: "#skills" },
  { label: "Projects", icon: IconFolder, href: "#projects" },
  { label: "Experience", icon: IconBriefcase, href: "#experience" },
  { label: "Education", icon: IconGraduation, href: "#education" },
  { label: "Certifications", icon: IconAward, href: "#certifications" },
  { label: "Blog", icon: IconBook, href: "#blog" },
];

export default function Sidebar({ activeSection, onNavClick, isOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`drawer-backdrop ${isOpen ? "active" : ""} lg:hidden`}
        onClick={onClose}
      />

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-[280px]
          bg-sage dark:bg-dark-sidebar
          rounded-r-[36px] lg:rounded-[36px]
          shadow-sidebar
          flex flex-col
          p-5 gap-4
          transition-transform duration-300 ease-out
          lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors lg:hidden cursor-pointer"
          aria-label="Close navigation"
        >
          <IconClose className="w-5 h-5" />
        </button>

        {/* Profile */}
        <a
          href="#home"
          onClick={() => onNavClick("home")}
          className="flex flex-col items-center gap-2 pt-2"
        >
          <div className="w-24 h-24 rounded-full p-1 bg-cream/30 shadow-clay-sm dark:shadow-clay-dark-sm">
            <Image
              src="/illustrations/developer-avatar-v2.webp"
              alt="Niraj Kumar Dangi"
              width={150}
              height={150}
              className="w-full h-full rounded-full object-cover"
              priority
            />
          </div>
          <h2 className="text-white font-bold text-base mt-1">
            Niraj Kumar Dangi
          </h2>
          <p className="text-white/70 text-xs font-medium">
            Full-Stack & AI Developer
          </p>
        </a>

        {/* Navigation */}
        <nav className="flex flex-col gap-1.5 mt-2 flex-1" aria-label="Portfolio sections">
          {navItems.map((item) => {
            const Icon = item.icon;
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(sectionId);
                  onClose();
                }}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-2xl
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-cream/90 dark:bg-dark-card text-charcoal dark:text-dark-text shadow-clay-sm dark:shadow-clay-dark-sm"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="w-[18px] h-[18px] shrink-0" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Bottom CTA - "Open to Opportunities" */}
        <div className="bg-coral dark:bg-coral-dark rounded-3xl p-4 shadow-button text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-2xl bg-white/20 flex items-center justify-center">
            <IconBriefcase className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-white font-bold text-sm">Seeking Internships</h3>
          <p className="text-white/70 text-xs mt-1 mb-3">
            Open to full-stack & AI roles
          </p>
          <ClayButton
            as="a"
            href="mailto:nirajkrdangi@gmail.com"
            variant="cream"
            size="sm"
            className="w-full text-xs"
          >
            Hire Me
            <IconSend className="w-3.5 h-3.5" />
          </ClayButton>
        </div>
      </aside>
    </>
  );
}
