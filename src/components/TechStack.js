"use client";

import Image from "next/image";
import { useState } from "react";
import { ClayCard } from "./Clay";
import { IconLayers, IconArrow } from "./Icons";

const skills = [
  { name: "JavaScript", icon: "/tech-icons/javascript.svg", search: "javascript js" },
  { name: "React", icon: "/tech-icons/react.svg", search: "react" },
  { name: "Next.js", icon: "/tech-icons/nextjs.svg", search: "nextjs next.js" },
  { name: "Node.js", icon: "/tech-icons/nodejs.svg", search: "nodejs node.js" },
  { name: "Express.js", icon: "/tech-icons/express.svg", search: "express", wide: true },
  { name: "MongoDB", icon: "/tech-icons/mongodb.svg", search: "mongodb mongo" },
  { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg", search: "postgresql postgres" },
  { name: "Python", icon: "/tech-icons/python.svg", search: "python" },
  { name: "FastAPI", icon: "/tech-icons/fastapi.svg", search: "fastapi" },
  { name: "ChromaDB", icon: "/tech-icons/chroma.svg", search: "chromadb vector database" },
  { name: "Firebase", icon: "/tech-icons/firebase.svg", search: "firebase firestore" },
  { name: "Docker", icon: "/tech-icons/docker.svg", search: "docker" },
];

const moreSkills = [
  { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg", search: "tailwind css" },
  { name: "Vite", icon: "/tech-icons/vite.svg", search: "vite" },
  { name: "Gemini", icon: "/tech-icons/gemini.svg", search: "gemini google ai" },
  { name: "TypeScript", icon: "/tech-icons/typescript.svg", search: "typescript" },
  { name: "AWS", icon: "/tech-icons/aws.svg", search: "aws cloud", wide: true },
  { name: "SQLite", icon: "/tech-icons/sqlite.svg", search: "sqlite" },
  { name: "Redis", icon: "/tech-icons/redis.svg", search: "redis upstash" },
  { name: "Java", icon: "/tech-icons/java.svg", search: "java" },
  { name: "MySQL", icon: "/tech-icons/mysql.svg", search: "mysql" },
];

export default function TechStack({ searchQuery = "" }) {
  const [showAll, setShowAll] = useState(false);

  const allSkills = [...skills, ...(showAll ? moreSkills : [])];

  const filteredSkills = searchQuery
    ? allSkills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.search.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allSkills;

  // If searching and more skills match in hidden section, show all
  const moreMatches = searchQuery
    ? moreSkills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.search.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const displaySkills =
    searchQuery && moreMatches.length > 0
      ? [...skills, ...moreSkills].filter(
          (s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.search.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : filteredSkills;

  return (
    <ClayCard id="skills" hover={false} className="!p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-sage/20 dark:bg-sage/15 flex items-center justify-center shadow-clay-sm dark:shadow-clay-dark-sm">
            <IconLayers className="w-5 h-5 text-sage-dark dark:text-sage-light" />
          </span>
          <div>
            <h2 className="text-base font-extrabold text-charcoal dark:text-dark-text">
              My Tech Stack
            </h2>
            <p className="text-[11px] text-olive dark:text-dark-muted">
              Project-backed tools & technologies
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 text-xs font-semibold text-olive dark:text-dark-muted hover:text-charcoal dark:hover:text-dark-text bg-cream dark:bg-dark-card-hover px-3 py-1.5 rounded-full shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover transition-all cursor-pointer"
        >
          {showAll ? "Show less" : "See all"}
          <IconArrow
            className={`w-3.5 h-3.5 transition-transform ${showAll ? "rotate-90" : ""}`}
          />
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {displaySkills.map((skill) => (
          <span
            key={skill.name}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl bg-sand dark:bg-dark-card-hover shadow-clay-sm dark:shadow-clay-dark-sm hover:shadow-clay-hover hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            <span className="w-7 h-7 rounded-xl bg-cream dark:bg-dark-card flex items-center justify-center shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),inset_-1px_-1px_2px_rgba(165,150,135,0.15)] dark:shadow-[inset_1px_1px_2px_rgba(255,255,255,0.03),inset_-1px_-1px_2px_rgba(0,0,0,0.2)]">
              <Image
                src={skill.icon}
                alt=""
                width={24}
                height={24}
                className={`${skill.wide ? "w-6 h-4 object-contain" : "w-5 h-5"}`}
              />
            </span>
            <span className="text-xs font-semibold text-charcoal dark:text-dark-text truncate">
              {skill.name}
            </span>
          </span>
        ))}
      </div>

      {displaySkills.length === 0 && (
        <p className="text-center text-sm text-olive dark:text-dark-muted py-6">
          No skills match that search.
        </p>
      )}

      <p className="text-[10px] text-olive/50 dark:text-dark-muted/50 mt-4 text-center">
        Skills are listed without proficiency ratings; experience varies by project.
      </p>
    </ClayCard>
  );
}
