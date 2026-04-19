import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiSpring, SiJavascript, SiTypescript } from "react-icons/si";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import profile from "../assets/image/about-me-home.png";
import "../styles/Home.css";

const stack = [
  { icon: <FaReact />, label: "React" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaJava />, label: "Java" },
  { icon: <SiSpring />, label: "Spring" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaDatabase />, label: "MySQL" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Seoul",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(d)
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero__grid">
          {/* Left column: identity */}
          <motion.div
            className="hero__identity"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div className="hero__badge" variants={fadeUp}>
              <span className="hero__badge-dot" />
              <span>Available for opportunities · 2026</span>
            </motion.div>

            <motion.h1 className="hero__title" variants={fadeUp}>
              <span className="hero__hi">안녕하세요,</span>
              <span className="hero__name">정성한</span>
              <span className="hero__role">
                <span className="grad-text">Full-stack</span>
                <span> Developer.</span>
              </span>
            </motion.h1>

            <motion.p className="hero__desc" variants={fadeUp}>
              React와 Spring Boot로 웹을 만들고, 여가에는 Godot과 Phaser로
              엉뚱한 게임을 만듭니다. 좋은 개발자는 좋은 팀플레이어라고 믿는
              주니어 개발자입니다.
            </motion.p>

            <motion.div className="hero__cta" variants={fadeUp}>
              <Link to="/projects" className="btn btn--primary">
                프로젝트 보기 <HiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                연락하기
              </Link>
            </motion.div>

            <motion.div className="hero__meta" variants={fadeUp}>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Location</span>
                <span className="hero__meta-value">Seoul, KR</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Local time</span>
                <span className="hero__meta-value mono">{time} KST</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Focus</span>
                <span className="hero__meta-value">Web · Game</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: visual + bento mini */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="hero__portrait">
              <img src={profile} alt="정성한 프로필 아바타" />
              <div className="hero__portrait-glow" />
              <div className="hero__portrait-tag">
                <HiSparkles /> JUNIOR DEV
              </div>
            </div>

            <div className="hero__stack-strip">
              {stack.map((s, i) => (
                <motion.span
                  key={s.label}
                  className="hero__stack-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  title={s.label}
                >
                  {s.icon}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll-hint mono">scroll</div>
      </section>

      {/* Bento Grid — 2026 trend */}
      <section className="bento">
        <motion.div
          className="bento__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">02 — Quick Look</span>
          <h2>A snapshot of who I am.</h2>
        </motion.div>

        <div className="bento__grid">
          <motion.div
            className="bento__card bento__card--wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bento__card-eye">About me</div>
            <h3>
              팀플레이와 학습 속도를 무기로,<br />
              빠르게 적응하는 풀스택 주니어.
            </h3>
            <p>
              3개의 팀 프로젝트와 다수의 개인 프로젝트를 완주하며 프론트와
              백엔드를 모두 경험했습니다.
            </p>
            <Link to="/about" className="bento__link">
              About 더 보기 <HiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="bento__card bento__card--projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bento__card-eye">Projects</div>
            <div className="bento__count">
              <span className="bento__count-num">4+</span>
              <span className="bento__count-label">완주</span>
            </div>
            <Link to="/projects" className="bento__link">
              작업물 보기 <HiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="bento__card bento__card--accent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bento__card-eye">Currently</div>
            <ul className="bento__list">
              <li>
                <span className="dot" /> Godot & Phaser3로 인디 게임 프로토타이핑
              </li>
              <li>
                <span className="dot" /> Three.js · 모바일 최적화 학습 중
              </li>
              <li>
                <span className="dot" /> AI 협업 기반 개발 워크플로우 실험
              </li>
            </ul>
          </motion.div>

          <motion.a
            href="https://github.com/JeongSunghan"
            target="_blank"
            rel="noopener noreferrer"
            className="bento__card bento__card--github"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bento__card-eye">GitHub</div>
            <FaGithub className="bento__github-icon" />
            <div className="bento__github-handle mono">@JeongSunghan</div>
            <span className="bento__link">
              프로필 열기 <HiArrowRight />
            </span>
          </motion.a>

          <motion.div
            className="bento__card bento__card--contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="bento__card-eye">Contact</div>
            <h4>함께 만들어 볼까요?</h4>
            <p className="mono">sh2683@naver.com</p>
            <Link to="/contact" className="bento__link">
              연락하기 <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
