import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiSpring,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiFirebase,
  SiGodotengine,
  SiNotion,
  SiJira,
  SiSupabase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import myPhoto from "../assets/image/MyPhoto.jpg";
import "../styles/About.css";

const skills = {
  Frontend: [
    { icon: <FaReact />, name: "React", level: "핵심 사용" },
    { icon: <SiNextdotjs />, name: "Next.js", level: "핵심 사용" },
    { icon: <SiJavascript />, name: "JavaScript", level: "핵심 사용" },
    { icon: <SiTypescript />, name: "TypeScript", level: "사용 가능" },
    { icon: <FaHtml5 />, name: "HTML5", level: "핵심 사용" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "핵심 사용" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "사용 가능" },
  ],
  Backend: [
    { icon: <FaJava />, name: "Java", level: "핵심 사용" },
    { icon: <SiSpring />, name: "Spring Boot", level: "핵심 사용" },
    { icon: <FaPython />, name: "Python", level: "자동화" },
    { icon: <FaNodeJs />, name: "Node.js", level: "사용 가능" },
  ],
  "Data / Tools": [
    { icon: <SiMysql />, name: "MySQL", level: "사용 가능" },
    { icon: <SiFirebase />, name: "Firebase", level: "사용 가능" },
    { icon: <SiSupabase />, name: "Supabase", level: "사용 가능" },
    { icon: <FaGitAlt />, name: "Git / GitHub", level: "핵심 사용" },
    { icon: <SiJira />, name: "Jira", level: "사용 가능" },
    { icon: <SiNotion />, name: "Notion", level: "사용 가능" },
  ],
  "Game / Learning": [
    { icon: <SiGodotengine />, name: "Godot", level: "학습 중" },
    { icon: <FaDatabase />, name: "Three.js", level: "학습 중" },
  ],
};

const values = [
  {
    title: "팀 플레이",
    body: "좋은 개발자는 좋은 팀 플레이어라고 믿습니다. 의견을 경청하고 내 생각도 명확히 전달하여 함께 만드는 결과물을 추구합니다.",
  },
  {
    title: "빠른 학습",
    body: "새 기술을 만나면 공식 문서·레퍼런스·소스를 빠르게 훑고 곧바로 프로토타이핑합니다. 학습 속도와 완주력을 무기로 삼습니다.",
  },
  {
    title: "사용자 관점",
    body: "기술보다 사용자의 경험을 먼저 생각합니다. 가독성과 반응성, 모바일 사용성을 항상 체크합니다.",
  },
  {
    title: "서비스 지향형",
    body: "아이디어보다 실행을 중시하며, 실제 사용자 문제를 빠르게 제품으로 검증하는 방식을 선호합니다.",
  },
];

const timeline = [
  {
    year: "~ing",
    title: "DEATHON · PromptCraft",
    body: "Three.js + Socket.IO 멀티플레이 게임, AI 콘텐츠 SaaS MVP 등 프로젝트를 병행하며 풀스택 확장.",
  },
  {
    year: "2025 - 2026",
    title: "KVCA 자동화 개발 & 머니캐쳐 게임",
    body: "HTML5 아케이드 게임 '머니캐쳐'로 토스·넵튠 연습 토이프로젝트 개발 및 한국벤처캐피탈협회 업무 자동화 프로젝트.",
  },
  {
    year: "2024",
    title: "Wordle · React Music Player",
    body: "바닐라 JS 워들 클론으로 DOM API 기본기, YouTube API 뮤직 플레이어로 React 훅·상태 관리 연습.",
  },
];

const section = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <div className="about-page">
      {/* Intro */}
      <motion.section
        className="about-intro"
        initial="hidden"
        animate="show"
        variants={section}
      >
        <div className="about-intro__left">
          <span className="eyebrow">01 — About</span>
          <h1>
            디자인 감각을 잃지 않는<br />
            <span className="grad-text">주니어 개발자</span>입니다.
          </h1>
          <p className="about-intro__lede">
            React,Next.js를 기반으로 웹을 만들고, Wasy1, KVCA 두 곳에  <br />
            근무하면서 반복적인 업무 혹은 개선이 필여한 사항을 자동화하고, <br />
            기획부터 배포까지 스스로 완주할 수 있는 개발자가 되는 것을 목표로 합니다.
          </p>
          <div className="about-intro__facts">
            <div>
              <span className="about-intro__fact-label">위치</span>
              <span className="about-intro__fact-value">Suwon, KR</span>
            </div>
            <div>
              <span className="about-intro__fact-label">직군</span>
              <span className="about-intro__fact-value">Full-stack · Dev</span>
            </div>
            <div>
              <span className="about-intro__fact-label">관심사</span>
              <span className="about-intro__fact-value">
                Web/App · UI · AI 협업
              </span>
            </div>
          </div>
        </div>
        <div className="about-intro__right">
          <div className="about-photo">
            {/* <img src={myPhoto} alt="정성한 프로필 사진" loading="lazy" /> */}
            <div className="about-photo__frame" />
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <section className="about-section">
        <motion.div
          className="about-section__head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={section}
        >
          <span className="eyebrow">02 — Values</span>
          <h2>내가 일하는 방식.</h2>
        </motion.div>
        <div className="about-values">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              className="about-value"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="about-value__num mono">0{i + 1}</div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="about-section">
        <motion.div
          className="about-section__head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={section}
        >
          <span className="eyebrow">03 — Stack</span>
          <h2>실무와 학습에서 쓰는 도구들.</h2>
        </motion.div>

        <div className="skills-groups">
          {Object.entries(skills).map(([group, items], gi) => (
            <motion.div
              key={group}
              className="skills-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <div className="skills-group__label">
                <span className="mono">{String(gi + 1).padStart(2, "0")}</span>
                {group}
              </div>
              <div className="skills-group__items">
                {items.map((item) => (
                  <div key={item.name} className="skill-chip">
                    <span className="skill-chip__icon">{item.icon}</span>
                    <span className="skill-chip__name">{item.name}</span>
                    <span className="skill-chip__level">{item.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="about-section">
        <motion.div
          className="about-section__head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={section}
        >
          <span className="eyebrow">04 — Journey</span>
          <h2>지금까지, 그리고 지금.</h2>
        </motion.div>
        <ol className="about-timeline">
          {timeline.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="about-timeline__year mono">{t.year}</div>
              <div className="about-timeline__content">
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <motion.section
        className="about-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        <h2>작업물이 궁금하신가요?</h2>
        <p>실제로 만든 프로젝트들을 확인해보세요.</p>
        <div className="about-cta__actions">
          <Link to="/projects" className="btn btn--primary">
            프로젝트 보기 <HiArrowRight />
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            연락하기
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
