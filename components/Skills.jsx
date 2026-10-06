'use client';

import { useState } from 'react';
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

const PRIMARY_SKILLS = [
  {
    name: 'JavaScript',
    search: 'javascript js',
    mark: <img src="/tech-icons/javascript.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'React',
    search: 'react',
    mark: <img src="/tech-icons/react.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Next.js',
    search: 'nextjs next.js',
    mark: (
      <>
        <img className="theme-icon-light" src="/tech-icons/nextjs.svg" alt="" width="24" height="24" />
        <img className="theme-icon-dark" src="/tech-icons/nextjs-dark.svg" alt="" width="24" height="24" />
      </>
    ),
  },
  {
    name: 'Node.js',
    search: 'nodejs node.js',
    mark: <img src="/tech-icons/nodejs.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Express.js',
    search: 'express',
    markClass: 'brand-wide',
    mark: (
      <>
        <img className="theme-icon-light" src="/tech-icons/express.svg" alt="" width="28" height="18" />
        <img className="theme-icon-dark" src="/tech-icons/express-dark.svg" alt="" width="28" height="18" />
      </>
    ),
  },
  {
    name: 'MongoDB',
    search: 'mongodb mongo',
    mark: <img src="/tech-icons/mongodb.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'PostgreSQL',
    search: 'postgresql postgres',
    mark: <img src="/tech-icons/postgresql.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Python',
    search: 'python',
    mark: <img src="/tech-icons/python.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'FastAPI',
    search: 'fastapi',
    mark: <img src="/tech-icons/fastapi.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Firebase',
    search: 'firebase firestore',
    mark: <img src="/tech-icons/firebase.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'ChromaDB',
    search: 'chromadb vector database',
    mark: <img src="/tech-icons/chroma.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Docker',
    search: 'docker',
    mark: <img src="/tech-icons/docker.svg" alt="" width="24" height="24" />,
  },
];

const MORE_SKILLS = [
  {
    name: 'Tailwind CSS',
    search: 'tailwind css',
    mark: <img src="/tech-icons/tailwindcss.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Vite',
    search: 'vite',
    mark: <img src="/tech-icons/vite.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Gemini',
    search: 'gemini google ai',
    mark: <img src="/tech-icons/gemini.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Ollama / Qwen',
    search: 'ollama qwen',
    markClass: 'skill-mark-pair',
    mark: (
      <>
        <img className="theme-icon-light" src="/tech-icons/ollama.svg" alt="" width="16" height="16" />
        <img className="theme-icon-dark" src="/tech-icons/ollama-dark.svg" alt="" width="16" height="16" />
        <img src="/tech-icons/qwen.svg" alt="" width="16" height="16" />
      </>
    ),
  },
  {
    name: 'RAG',
    search: 'rag retrieval augmented generation',
    markClass: 'skill-mark-concept',
    mark: (
      <svg className="icon"><use href="#i-database"></use></svg>
    ),
  },
  {
    name: 'AWS',
    search: 'aws cloud',
    markClass: 'brand-wide',
    mark: (
      <>
        <img className="theme-icon-light" src="/tech-icons/aws.svg" alt="" width="28" height="18" />
        <img className="theme-icon-dark" src="/tech-icons/aws-dark.svg" alt="" width="28" height="18" />
      </>
    ),
  },
  {
    name: 'SQLite',
    search: 'sqlite',
    mark: (
      <>
        <img className="theme-icon-light" src="/tech-icons/sqlite.svg" alt="" width="24" height="24" />
        <img className="theme-icon-dark" src="/tech-icons/sqlite-dark.svg" alt="" width="24" height="24" />
      </>
    ),
  },
  {
    name: 'Redis',
    search: 'redis upstash',
    mark: <img src="/tech-icons/redis.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'TypeScript',
    search: 'typescript',
    mark: <img src="/tech-icons/typescript.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Java',
    search: 'java',
    mark: <img src="/tech-icons/java.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'MySQL',
    search: 'mysql',
    mark: <img src="/tech-icons/mysql.svg" alt="" width="24" height="24" />,
  },
  {
    name: 'Git & GitHub',
    search: 'git github',
    markClass: 'skill-mark-pair',
    mark: (
      <>
        <img src="/tech-icons/git.svg" alt="" width="16" height="16" />
        <img className="theme-icon-light" src="/tech-icons/github.svg" alt="" width="16" height="16" />
        <img className="theme-icon-dark" src="/tech-icons/github-dark.svg" alt="" width="16" height="16" />
      </>
    ),
  },
];

export default function Skills() {
  const { searchQuery } = usePortfolio();
  const [skillsExpanded, setSkillsExpanded] = useState(false);

  const query = normalize(searchQuery);

  const checkMatch = (skill) => {
    if (!query) return true;
    const haystack = normalize(`${skill.search} ${skill.name}`);
    return haystack.includes(query);
  };

  const visiblePrimary = PRIMARY_SKILLS.filter(checkMatch);
  const visibleMore = MORE_SKILLS.filter(checkMatch);
  const totalVisible = visiblePrimary.length + visibleMore.length;

  const showMoreSection = skillsExpanded || (query && visibleMore.length > 0);

  return (
    <section className="panel skills-panel" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <div className="heading-title">
          <span className="heading-icon">
            <svg className="icon"><use href="#i-layers"></use></svg>
          </span>
          <div>
            <h2 id="skills-title">My Tech Stack</h2>
            <p>Project-backed tools &amp; technologies</p>
          </div>
        </div>
        <button
          className="text-pill"
          id="toggleSkills"
          type="button"
          aria-expanded={skillsExpanded}
          onClick={() => setSkillsExpanded(!skillsExpanded)}
        >
          {skillsExpanded ? 'Show less ' : 'See all '}
          <svg className="icon"><use href="#i-arrow"></use></svg>
        </button>
      </div>

      <div className="skills-grid" id="skillsGrid">
        {PRIMARY_SKILLS.map((skill) => {
          const isMatch = checkMatch(skill);
          return (
            <span
              key={skill.name}
              className="skill-chip filterable-skill"
              data-search={skill.search}
              hidden={!isMatch}
            >
              <span className={`skill-mark ${skill.markClass || ''}`}>
                {skill.mark}
              </span>
              {skill.name}
            </span>
          );
        })}
      </div>

      <div className="skills-more" id="skillsMore" hidden={!showMoreSection}>
        {MORE_SKILLS.map((skill) => {
          const isMatch = checkMatch(skill);
          return (
            <span
              key={skill.name}
              className="skill-chip filterable-skill"
              data-search={skill.search}
              hidden={!isMatch}
            >
              <span className={`skill-mark ${skill.markClass || ''}`}>
                {skill.mark}
              </span>
              {skill.name}
            </span>
          );
        })}
      </div>

      <p className="search-empty skill-empty" id="skillEmpty" hidden={!query || totalVisible > 0}>
        No skills match that search.
      </p>
      <p className="skill-note">Skills are listed without proficiency ratings; experience varies by project.</p>
    </section>
  );
}
