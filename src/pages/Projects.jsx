import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import projectsData from "../data/projectsData";
import "../styles/Projects.css";

const FILTERS = [
  { label: "All", count: projectsData.length },
  {
    label: "Solo",
    count: projectsData.filter((p) => p.role === "Solo").length,
  },
  {
    label: "Game",
    count: projectsData.filter((p) =>
      p.tags?.some((t) => t.toLowerCase().includes("game"))
    ).length,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    if (filter === "All") return projectsData;
    if (filter === "Solo")
      return projectsData.filter((p) => p.role === "Solo");
    if (filter === "Game")
      return projectsData.filter((p) =>
        p.tags?.some((t) => t.toLowerCase().includes("game"))
      );
    return projectsData;
  }, [filter]);

  return (
    <div className="projects-page">
      <motion.header
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">02 — Work</span>
        <h1>
          <span className="grad-text">Projects</span> I've shipped.
        </h1>
        <p>
          완주한 프로젝트들을 모아둔 아카이브입니다. 각 카드에서 기술 스택과
          소스코드, 데모를 확인할 수 있습니다.
        </p>

        <div className="projects-filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map(({ label, count }) => (
            <button
              key={label}
              className={`projects-filter ${filter === label ? "is-active" : ""}`}
              onClick={() => setFilter(label)}
              role="tab"
              aria-selected={filter === label}
            >
              {label}
              <span className="projects-filter__count">{count}</span>
            </button>
          ))}
        </div>
      </motion.header>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              className={`project-card ${p.featured ? "is-featured" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="project-card__media">
                <img src={p.img} alt={`${p.title} 스크린샷`} loading="lazy" />
                <div className="project-card__media-overlay" />
                <div className="project-card__tags">
                  {p.tags?.map((t) => (
                    <span key={t} className="project-card__tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card__body">
                <div className="project-card__meta mono">
                  <span>{p.year}</span>
                  <span>·</span>
                  <span>{p.role}</span>
                </div>
                <h3 className="project-card__title">
                  {p.title}
                  <span className="project-card__subtitle"> — {p.subtitle}</span>
                </h3>
                <p className="project-card__desc">{p.description}</p>

                <div className="project-card__tech">
                  {p.techStack?.map((t) => (
                    <span key={t} className="project-card__tech-item">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__btn"
                      aria-label={`${p.title} GitHub 저장소`}
                    >
                      <FaGithub /> <span>Code</span>
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__btn project-card__btn--primary"
                      aria-label={`${p.title} 라이브 데모`}
                    >
                      <HiArrowUpRight /> <span>Visit</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <div className="projects-empty">
          <p>해당 조건의 프로젝트가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
