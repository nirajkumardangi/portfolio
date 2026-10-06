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
    cardClass: 'project-tree-card project-flagship',
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
    ribbon: 'Flagship Internship',
    floatingLabels: ['Computer Vision', 'Applied AI'],
    title: 'Tree Detection & Localization',
    kicker: 'YOLO Computer Vision & Validation Pipeline',
    desc: 'Contributed to an AI-powered tree detection and localization system, developing robust image-validation workflows for quality checks, YOLO detection, localization, segmentation, and automated metadata generation.',
    tags: ['YOLOv8', 'Computer Vision', 'Python', 'FastAPI'],
    links: [
      { label: 'My Fork', href: 'https://github.com/nirajkumardangi/tree-detection-localization' },
      { label: 'Original · 366Pi', href: 'https://github.com/366Pi/tree-detection-localization' },
    ],
  },
  {
    id: 'rag',
    cardClass: 'project-rag-card project-flagship',
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
    ribbon: 'Applied AI Product',
    floatingLabels: ['RAG', 'Applied AI'],
    title: 'RAG Knowledge Assistant',
    kicker: 'Local Document Intelligence & Citation Search',
    desc: 'A local-first intelligence assistant that searches private documents with semantic vector retrieval and returns source-cited answers, complete with Word and PDF report export pipelines.',
    tags: ['FastAPI', 'ChromaDB', 'Next.js', 'Ollama / Qwen'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/nirajkumardangi/ai-knowledge-assistant' },
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
    ribbon: 'Backend Architecture',
    floatingLabels: ['Full Stack', 'Architecture'],
    title: 'DevTinder',
    kicker: 'Developer Networking Platform · In Progress',
    desc: 'A Node.js & Express architectural learning project exploring JWT authentication, developer profile indexing, match scoring, and robust schema validation.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    links: [
      { label: 'Backend API', href: 'https://github.com/nirajkumardangi/devtinder' },
      { label: 'Frontend Scaffold', href: 'https://github.com/nirajkumardangi/devtinder-frontend' },
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
    ribbon: 'AI SaaS',
    floatingLabels: ['AI', 'Full Stack'],
    title: 'WriteNova',
    kicker: 'AI Content-Generation Platform',
    desc: 'A full-stack AI content studio with account flows, token-aware generation history, usage quotas, credit management, and subscription billing workflows.',
    tags: ['Next.js', 'Gemini AI', 'MongoDB', 'Node.js'],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/nirajkumardangi/writenova' },
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
            <p>Crafted engineering &amp; applied AI product showcases</p>
          </div>
        </div>
        <a
          className="text-pill"
          href="https://github.com/nirajkumardangi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all on GitHub <svg className="icon"><use href="#i-arrow"></use></svg>
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
              <div className="project-preview-wrap">
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
                  {project.ribbon && (
                    <span className="project-ribbon">{project.ribbon}</span>
                  )}
                  <span className="image-link" aria-label="Open repository">
                    <svg className="icon"><use href="#i-external"></use></svg>
                  </span>
                </a>

                {/* Floating Category Chips */}
                <div className="project-floating-chips" aria-hidden="true">
                  {project.floatingLabels.map((lbl, idx) => (
                    <span key={lbl} className={`floating-chip chip-tag-${idx}`}>
                      <span className="floating-chip-dot"></span>
                      <span>{lbl}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-main">
                <div className="project-title-row">
                  <span className={`project-badge ${project.badgeClass}`} aria-hidden="true">
                    <svg className="icon"><use href={project.badgeIcon}></use></svg>
                  </span>
                  <div className="project-title-meta">
                    <h3>{project.title}</h3>
                    <span className="project-kicker">{project.kicker}</span>
                  </div>
                </div>

                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="project-tag-chip">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <span>{link.label}</span>
                      <svg className="icon"><use href="#i-external"></use></svg>
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
