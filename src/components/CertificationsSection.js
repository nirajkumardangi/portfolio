"use client";

import { ClayCard, ClayButton } from "./Clay";
import { IconAward, IconExternal, IconCode, IconBook } from "./Icons";

const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Apr 2026",
    credentialId: "nirajkumardangi-rwdv9",
    url: "https://www.freecodecamp.org/certification/nirajkumardangi/responsive-web-design-v9",
    color: "bg-coral/20 dark:bg-coral/15 text-coral dark:text-coral-light",
    icon: IconCode,
  },
  {
    title: "Full Stack Web Development 1.0",
    issuer: "PW (PhysicsWallah)",
    date: "Aug 2024",
    credentialId: "d8b000fd-f7b0-473b-b194-c2c43003502c",
    url: "https://cdn.pwskills.com/learn/certificates/d8b000fd-f7b0-473b-b194-c2c43003502c.pdf",
    color: "bg-mustard/25 dark:bg-mustard/15 text-[#A07028] dark:text-mustard-light",
    icon: IconAward,
  },
  {
    title: "HTML, CSS & JS for Web Developers",
    issuer: "Johns Hopkins / Coursera",
    date: "Jun 2022",
    credentialId: "6SW2QSXKVKNC",
    url: "https://www.coursera.org/account/accomplishments/verify/6SW2QSXKVKNC",
    color: "bg-sky/20 dark:bg-sky/15 text-[#3D7877] dark:text-sky-light",
    icon: IconBook,
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications">
      <ClayCard hover={false} className="!p-6 h-full flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-mustard/25 dark:bg-mustard/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm">
                <IconAward className="w-5 h-5 text-mustard dark:text-mustard-light" />
              </span>
              <div>
                <h2 className="text-base font-extrabold text-charcoal dark:text-dark-text">
                  Certifications
                </h2>
                <p className="text-[11px] text-olive dark:text-dark-muted">
                  Verified credentials & specializations
                </p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/nirajkumardangi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-semibold text-olive dark:text-dark-muted hover:text-charcoal dark:hover:text-dark-text bg-cream dark:bg-dark-card-hover px-3 py-1.5 rounded-full shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover transition-all"
            >
              Profile
              <IconExternal className="w-3 h-3" />
            </a>
          </div>

          {/* Certification List */}
          <div className="space-y-3.5">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="rounded-2xl bg-sand/60 dark:bg-dark-card-hover p-4 shadow-clay-sm dark:shadow-clay-dark-sm transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-clay-sm dark:shadow-clay-dark-sm ${cert.color}`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-extrabold text-charcoal dark:text-dark-text truncate">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-medium text-olive dark:text-dark-muted">
                        {cert.issuer} · <span className="text-olive-light dark:text-dark-muted">{cert.date}</span>
                      </p>
                      <p className="text-[10px] text-olive-light dark:text-dark-muted/70 truncate mt-0.5 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-cream dark:bg-dark-card text-charcoal dark:text-dark-text shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover active:scale-95 transition-all"
                    >
                      Verify
                      <IconExternal className="w-3 h-3 text-olive dark:text-dark-muted" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Motivational note */}
        <div className="mt-5 p-3 rounded-2xl bg-cream/70 dark:bg-dark-card text-xs text-olive dark:text-dark-muted flex items-center gap-2 shadow-clay-sm dark:shadow-clay-dark-sm">
          <IconAward className="w-4 h-4 text-mustard shrink-0" />
          <span>Continuous hands-on learning across modern web and AI tools.</span>
        </div>
      </ClayCard>
    </section>
  );
}
