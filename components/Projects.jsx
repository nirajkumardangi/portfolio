'use client';

import { usePortfolio } from './PortfolioContext';

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9.+# ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const PROJECTS = [
  {
    id: 'tree-detection',
    cardClass: 'project-tree-card',
    imageClass: 'project-tree',
    search: 'tree detection localization computer vision yolo internship 366pi image validation segmentation metadata',
    href: 'https://github.com/nirajkumardangi/tree-detection-localization',
    ariaLabel: "Open Niraj's fork of the Tree Detection repository",
    imgSrc: '/projects/tree-detection-hld.webp',
    imgAlt: 'High-level architecture diagram for the Tree Detection and Localization project, sourced from the original 366Pi repository',
    imgWidth: 1536,
    imgHeight: 1024,
    caption: 'ARCHITECTURE SOURCE · 366Pi',
    badgeClass: 'badge-tree',
    badgeIcon: '#i-target',
    title: 'Tree Detection',
    kicker: 'Internship contribution · 366Pi Technologies',
    desc: 'Contributed to an AI-powered tree detection and localization system, including image-validation workflows for detection, localization, segmentation, and metadata generation.',
    tags: ['YOLO', 'Computer vision', 'Internship'],
    links: [
      { label: 'My fork', href: 'https://github.com/nirajkumardangi/tree-detection-localization' },
      { label: 'Original · 366Pi', href: 'https://github.com/366Pi/tree-detection-localization' },
    ],
  },
  {
    id: 'rag',
    cardClass: 'project-rag-card',
    imageClass: 'project-ai',
    search: 'rag ai knowledge assistant local document search citations chromadb fastapi nextjs ollama qwen python',
    href: 'https://github.com/nirajkumardangi/ai-knowledge-assistant',
    ariaLabel: 'Open the RAG AI Knowledge Assistant repository',
    imgSrc: '/projects/ai-knowledge-assistant.webp',
    imgAlt: 'RAG AI Knowledge Assistant interface from its GitHub repository',
    imgWidth: 1920,
    imgHeight: 1080,
    caption: null,
    badgeClass: 'badge-ai',
    badgeIcon: '#i-database',
    title: 'RAG',
    kicker: 'AI Knowledge Assistant · document intelligence',
    desc: 'A local-first assistant that searches private documents and returns source-cited answers, with Word and PDF export workflows.',
    tags: ['Python', 'ChromaDB', 'FastAPI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/nirajkumardangi/ai-knowledge-assistant' },
    ],
  },
  {
    id: 'devtinder',
    cardClass: 'project-devtinder-card',
    imageClass: 'project-devtinder',
    search: 'devtinder developer networking node nodejs express mongodb planned learning project react vite frontend scaffold',
    href: 'https://github.com/nirajkumardangi/devtinder',
    ariaLabel: 'Open DevTinder backend repository; illustration is conceptual, not an application screenshot',
    imgSrc: '/projects/devtinder-concept.svg',
    imgAlt: 'Decorative DevTinder concept illustration showing a developer profile card and connection interface; not a screenshot',
    imgWidth: 1200,
    imgHeight: 680,
    caption: 'ILLUSTRATIVE CONCEPT',
    captionClass: 'caption-concept',
    badgeClass: 'badge-tinder',
    badgeIcon: '#i-users',
    title: 'DevTinder',
    kicker: 'Backend learning project · in progress',
    desc: 'A Node.js and Express learning project. Authentication, developer profiles, and matching are listed as planned features in the repository.',
    tags: ['Node.js', 'Express', 'MongoDB · planned'],
    links: [
      { label: 'Backend', href: 'https://github.com/nirajkumardangi/devtinder' },
      { label: 'Frontend scaffold', href: 'https://github.com/nirajkumardangi/devtinder-frontend' },
    ],
  },
  {
    id: 'writenova',
    cardClass: 'project-writenova-card',
    imageClass: 'project-write',
    search: 'writenova write nova ai writing content generation saas gemini nextjs stripe mongodb node express',
    href: 'https://github.com/nirajkumardangi/writenova',
    ariaLabel: 'Open WriteNova repository',
    imgSrc: '/projects/writenova.webp',
    imgAlt: 'WriteNova AI writing product interface from the public repository',
    imgWidth: 1920,
    imgHeight: 1080,
    caption: null,
    badgeClass: 'badge-write',
    badgeIcon: '#i-sparkles',
    title: 'WriteNova',
    kicker: 'AI content-generation SaaS',
    desc: 'An AI writing product with account flows, generation history, credit-aware usage, and subscription billing workflows.',
    tags: ['Next.js', 'Gemini', 'MongoDB'],
    links: [
      { label: 'GitHub', href: 'https://github.com/nirajkumardangi/writenova' },
    ],
  },
];

export default function Projects() {
  const { searchQuery } = usePortfolio();
  const query = normalize(searchQuery);

  const checkMatch = (p) => {
    if (!query) return true;
    const haystack = normalize(`${p.search} ${p.title} ${p.kicker} ${p.desc} ${p.tags.join(' ')}`);
    return haystack.includes(query);
  };

  const visibleProjects = PROJECTS.filter(checkMatch);

  return (
    <section className="panel projects-panel" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-folder"></use></svg>
          </span>
          <div>
            <h2 id="projects-title">Featured Projects</h2>
            <p>Four selected projects</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://github.com/nirajkumardangi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all <svg className="icon"><use href="#i-arrow"></use></svg>
        </a>
      </div>

      <p className="search-empty" id="projectEmpty" hidden={!query || visibleProjects.length > 0}>
        No projects match that search. Try another technology or title.
      </p>

      <div className="project-grid" id="projectGrid">
        {PROJECTS.map((project) => {
          const isMatch = checkMatch(project);
          return (
            <article
              key={project.id}
              className={`project-card filterable-project ${project.cardClass}`}
              data-search={project.search}
              hidden={!isMatch}
            >
              <a
                className={`project-image ${project.imageClass}`}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.ariaLabel}
              >
                <img
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  loading="lazy"
                  decoding="async"
                  width={project.imgWidth}
                  height={project.imgHeight}
                />
                {project.caption && (
                  <span className={`image-caption ${project.captionClass || ''}`}>
                    {project.caption}
                  </span>
                )}
                <span className="image-link">
                  <svg className="icon"><use href="#i-external"></use></svg>
                </span>
              </a>

              <div className="project-main">
                <div className="project-title-row">
                  <span className={`project-badge ${project.badgeClass}`}>
                    <svg className="icon"><use href={project.badgeIcon}></use></svg>
                  </span>
                  <div>
                    <h3>{project.title}</h3>
                    <span className="project-kicker">{project.kicker}</span>
                  </div>
                </div>

                <p>{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} <svg className="icon"><use href="#i-external"></use></svg>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
