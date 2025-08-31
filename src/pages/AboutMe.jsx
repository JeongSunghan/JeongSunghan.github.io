import React, { Suspense, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../styles/AboutMe.css";
import myPhoto from "../assets/image/MyPhoto.jpg";

export default function Portfolio2025() {
  const [aboutTilt, setAboutTilt] = useState({ transform: "none" });

  /* 마우스 이동에 따른 3D Tilt */
  const handleTiltMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    const rotateMax = 15;

    const rotateX = ((y / (rect.height / 2)) * rotateMax).toFixed(2);
    const rotateY = (-(x / (rect.width / 2)) * rotateMax).toFixed(2);

    setAboutTilt({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  }, []);

  const handleTiltLeave = useCallback(() => {
    setAboutTilt({ transform: "none", transition: "transform 0.5s ease" });
  }, []);

  return (
    <div className="page-container">
      {/* 헤더 */}
      <header className="header">
        <div className="branding">Sunghan PortFolio</div>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <h1 className="hero-title">Junior Developer</h1>
        <p className="hero-subtitle">
          안녕하세요, 저는 풀스택 개발을 지향하는 정성한입니다. <br />
          사용자 경험을 최우선으로 생각하며, 협업과 웃음으로 개발을 진행하고
          있습니다.
        </p>
        <button
          className="hero-button"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>About Me</span>
        </button>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-wrapper">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              React와 JAVA 및 Spring Boot 로 3개의 팀, 개인 프로젝트를 완주하며
              웹 프론트 및 백엔드 전반을 경험한 주니어 개발자 입니다. <br/>
              <br/>
              Jira와 노션을 이용하여 프로젝트가 혼동되는 일이 없게 정리하여 처리 시간을
              단축했으며, 팀원과의 협업을 중요시하며 의견을 경청하고 존중하는
              자세를 가지면서 프로젝트를 성공적으로 마무리했습니다.<br/>
              <br/>
              
              또한 새 기술 학습 속도가 빠르며 `좋은 개발자는 좋은 팀플레이` 생각으로 문제를
              공유 및 해결해 팀 결과에 기여합니다.
            </p>
          </div>

          <div className="photo-wrapper">
            <div
              className="tilt-card"
              style={aboutTilt}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
              tabIndex="0"
              aria-label="My Photo with 3D Tilt"
            >
              <div className="photo-content">
                <Suspense
                  fallback={<div style={{ color: "#888" }}>사진 로딩중...</div>}
                >
                  <img src={myPhoto} alt="myProfile" />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="skills-wrapper">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <div className="skill-name">HTML / CSS3 / React / JavaScript</div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔥</div>
              <div className="skill-name">Java / Spring Boot / Python</div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📂</div>
              <div className="skill-name">MySQL / Firebase </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 정성한. All rights reserved. |{" "}
        <a
          href="https://github.com/JeongSunghan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
