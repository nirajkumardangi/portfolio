"use client";

import Image from "next/image";
import { ClayCard, ClayBadge } from "./Clay";
import { IconFolder, IconExternal, IconArrow, IconTarget, IconDatabase, IconUsers, IconSparkles } from "./Icons";

const projects = [
  {
    title: "Tree Detection",
    kicker: "Internship contribution · 366Pi Technologies",
    description:
      "Contributed to an AI-powered tree detection and localization system, including image-validation workflows for detection, localization, segmentation, and metadata generation.",
    tags: ["YOLO", "Computer vision", "Internship"],
    image: "/projects/tree-detection-hld.webp",
    icon: IconTarget,
    iconColor: "bg-mint/20 dark:bg-mint/15 text-[#4A7D50] dark:text-mint-light",
    links: [
      { label: "My fork", url: "https://github.com/nirajkumardangi/tree-detection-localization" },
      { label: "Original · 366Pi", url: "https://github.com/366Pi/tree-detection-localization" },
    ],
    search: "tree detection localization computer vision yolo internship 366pi",
  },
  {
    title: "RAG",
    kicker: "AI Knowledge Assistant · document intelligence",
    description:
      "A local-first assistant that searches private documents and returns source-cited answers, with Word and PDF export workflows.",
    tags: ["Python", "ChromaDB", "FastAPI"],
    image: "/projects/ai-knowledge-assistant.webp",
    icon: IconDatabase,
    iconColor: "bg-sky/20 dark:bg-sky/15 text-[#4A8A89] dark:text-sky-light",
    links: [
      { label: "GitHub", url: "https://github.com/nirajkumardangi/ai-knowledge-assistant" },
    ],
    search: "rag ai knowledge assistant document search chromadb fastapi nextjs ollama python",
  },
  {
    title: "DevTinder",
    kicker: "Backend learning project · in progress",
    description:
      "A Node.js and Express learning project. Authentication, developer profiles, and matching are listed as planned features.",
    tags: ["Node.js", "Express", "MongoDB · planned"],
    image: "/projects/devtinder-concept.svg",
    icon: IconUsers,
    iconColor: "bg-coral/15 dark:bg-coral/10 text-coral dark:text-coral-light",
    links: [
      { label: "Backend", url: "https://github.com/nirajkumardangi/devtinder" },
      { label: "Frontend scaffold", url: "https://github.com/nirajkumardangi/devtinder-frontend" },
    ],
    search: "devtinder developer networking node nodejs express mongodb",
  },
  {
    title: "WriteNova",
    kicker: "AI content-generation SaaS",
    description:
      "An AI writing product with account flows, generation history, credit-aware usage, and subscription billing workflows.",
    tags: ["Next.js", "Gemini", "MongoDB"],
    image: "/projects/writenova.webp",
    icon: IconSparkles,
    iconColor: "bg-mustard/20 dark:bg-mustard/15 text-mustard dark:text-mustard-light",
    links: [
      { label: "GitHub", url: "https://github.com/nirajkumardangi/writenova" },
    ],
    search: "writenova write nova ai writing content generation saas gemini nextjs",
  },
];

export default function ProjectsSection({ searchQuery = "" }) {
  const filtered = searchQuery
    ? projects.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.search.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : projects;

  return (
    <section id="projects">
      <ClayCard hover={false} className="!p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-sage/20 dark:bg-sage/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm">
              <IconFolder className="w-5 h-5 text-sage-dark dark:text-sage-light" />
            </span>
            <div>
              <h2 className="text-base font-extrabold text-charcoal dark:text-dark-text">
                Featured Projects
              </h2>
              <p className="text-[11px] text-olive dark:text-dark-muted">
                Four selected projects
              </p>
            </div>
          </div>
          <a
            href="https://github.com/nirajkumardangi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-olive dark:text-dark-muted hover:text-charcoal dark:hover:text-dark-text bg-cream dark:bg-dark-card-hover px-3 py-1.5 rounded-full shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover transition-all"
          >
            See all
            <IconArrow className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="rounded-[24px] bg-sand dark:bg-dark-card-hover shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <a
                  href={project.links[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/80 dark:bg-dark-card/80 backdrop-blur-sm flex items-center justify-center shadow-button opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconExternal className="w-4 h-4 text-charcoal dark:text-dark-text" />
                  </span>
                </a>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-clay-sm dark:shadow-clay-dark-sm ${project.iconColor}`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold text-charcoal dark:text-dark-text">
                        {project.title}
                      </h3>
                      <p className="text-[10px] text-olive dark:text-dark-muted">
                        {project.kicker}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-olive dark:text-dark-muted leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <ClayBadge key={tag} color="sage">
                        {tag}
                      </ClayBadge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-sage-dark dark:text-sage-light hover:text-charcoal dark:hover:text-dark-text transition-colors"
                      >
                        {link.label}
                        <IconExternal className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-olive dark:text-dark-muted py-8">
            No projects match that search. Try another technology or title.
          </p>
        )}
      </ClayCard>
    </section>
  );
}
