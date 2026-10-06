'use client';

import { usePortfolio } from './PortfolioContext';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: '#i-home' },
  { id: 'about', label: 'About Me', icon: '#i-user' },
  { id: 'skills', label: 'Skills', icon: '#i-layers' },
  { id: 'projects', label: 'Projects', icon: '#i-folder' },
  { id: 'experience', label: 'Experience', icon: '#i-briefcase' },
  { id: 'education', label: 'Education', icon: '#i-graduation' },
  { id: 'certifications', label: 'Certificates', icon: '#i-award' },
  { id: 'blog', label: 'Blog', icon: '#i-book' },
  { id: 'contact', label: 'Contact', icon: '#i-send' },
];

export default function Sidebar() {
  const { isDrawerOpen, setIsDrawerOpen, activeSection, setActiveSection } = usePortfolio();

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div
        className="drawer-backdrop"
        id="drawerBackdrop"
        hidden={!isDrawerOpen}
        onClick={() => setIsDrawerOpen(false)}
      />
      <aside
        className={`sidebar ${isDrawerOpen ? 'is-open' : ''}`}
        id="sidebar"
        aria-label="Portfolio sidebar"
      >
        <button
          className="sidebar-close icon-button"
          id="sidebarClose"
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsDrawerOpen(false)}
        >
          <svg className="icon"><use href="#i-close"></use></svg>
        </button>

        {/* Profile Branding Header */}
        <div className="sidebar-profile-card">
          <a
            className="sidebar-profile"
            href="#home"
            aria-label="Go to home"
            onClick={() => handleNavClick('home')}
          >
            <span className="avatar-ring">
              <img
                src="/illustrations/developer-avatar-v2.webp"
                alt="Illustrated portfolio avatar for Niraj Kumar Dangi"
                width="150"
                height="150"
              />
            </span>
            <div className="sidebar-greeting">
              <span className="sidebar-wave" aria-hidden="true">👋</span>
              <span>Hi, I&apos;m Niraj</span>
            </div>
            <span className="sidebar-name">Niraj Kumar Dangi</span>
            <span className="sidebar-role">Full-Stack &amp; AI Developer</span>
          </a>
        </div>

        {/* Navigation Rail with Physically Selected Active States */}
        <nav className="side-nav" aria-label="Portfolio sections">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                className={`nav-item ${isActive ? 'is-active' : ''}`}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="nav-icon">
                  <svg className="icon"><use href={item.icon}></use></svg>
                </span>
                <span className="nav-label">{item.label}</span>
                {isActive && (
                  <span className="nav-active-pip" aria-hidden="true"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Tactile Resume Card ("Go Premium" style) */}
        <div className="sidebar-resume">
          <span className="resume-crown">
            <svg className="icon"><use href="#i-award"></use></svg>
          </span>
          <h2>My Resume</h2>
          <p>Updated 1-page technical PDF</p>
          <a
            className="resume-download"
            href="/resume/Niraj-Kumar-Dangi-Resume.pdf"
            download="Niraj-Kumar-Dangi-Resume.pdf"
            aria-label="Download Niraj Kumar Dangi’s resume PDF"
          >
            <span>Download PDF</span>
            <svg className="icon"><use href="#i-download"></use></svg>
          </a>
        </div>

        {/* Mini Sidebar Footer */}
        <div className="sidebar-bottom-pill">
          <span className="availability-dot"></span>
          <span>Ranchi, IN · Open to internships</span>
        </div>
      </aside>
    </>
  );
}
