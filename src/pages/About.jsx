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
} from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import myPhoto from "../assets/image/MyPhoto.jpg";
import "../styles/About.css";

const skills = {
  Frontend: [
    { icon: <FaReact />, name: "React", level: "핵심 사용" },
    { icon: <SiJavascript />, name: "JavaScript", level: "핵심 사용" },
    { icon: <SiTypescript />, name: "TypeScript", level: "학습 중" },
    { icon: <FaHtml5 />, name: "HTML5", level: "핵심 사용" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "핵심 사용" },
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
    { icon: <FaGitAlt />, name: "Git / GitHub", level: "핵심 사용" },
    { icon: <SiJira />, name: "Jira", level: "사용 가능" },
    { icon: <SiNotion />, name: "Notion", level: "사용 가능" },
  ],
  "Game / Learning": [
    { icon: <SiGodotengine />, name: "Godot", level: "프로토타이핑" },
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
    title: "문서화 · 정리",
    body: "Jira · Notion으로 프로젝트 문맥과 이슈를 잃지 않도록 정리해왔습니다. 작은 팀일수록 기록이 팀의 속도가 된다고 생각합니다.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "인디 게임 프로토타이핑",
    body: "Godot, Phaser3, PixiJS로 룰렛형 · 로그라이크 게임 메커닉 실험.",
  },
  {
    year: "2025",
    title: "Three.js · 모바일 최적화",
    body: "3D 웹 그래픽과 모바일 퍼포먼스 최적화 학습을 병행.",
  },
  {
    year: "2024",
    title: "FlowNary 팀 프로젝트 완주",
    body: "React + Spring Boot SNS 프로젝트. 풀스택 워크플로우 실전 경험.",
  },
  {
    year: "2023",
    title: "웹 개발 기초 다지기",
    body: "HTML/CSS/JS 바닐라 토이 프로젝트와 교육 플랫폼 개발 참여.",
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
            <span className="grad-text">풀스택 주니어 개발자</span>입니다.
          </h1>
          <p className="about-intro__lede">
            React와 Spring Boot로 웹을 만들고, 여가에는 Godot과 Phaser로 엉뚱한
            게임을 만듭니다. 1인 개발자를 꿈꾸며, 기획부터 배포까지 스스로
            완주할 수 있는 개발자가 되는 것을 목표로 합니다.
          </p>
          <div className="about-intro__facts">
            <div>
              <span className="about-intro__fact-label">기반</span>
              <span className="about-intro__fact-value">Seoul, KR</span>
            </div>
            <div>
              <span className="about-intro__fact-label">직군</span>
              <span className="about-intro__fact-value">Full-stack · Web</span>
            </div>
            <div>
              <span className="about-intro__fact-label">관심사</span>
              <span className="about-intro__fact-value">
                Game · UI · AI 협업
              </span>
            </div>
          </div>
        </div>
        <div className="about-intro__right">
          <div className="about-photo">
            <img src={myPhoto} alt="정성한 프로필 사진" loading="lazy" />
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
