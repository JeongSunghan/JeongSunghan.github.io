import React, { useState, useEffect } from "react";

import "../styles/Responsive.css";
import "../styles/Skills.css";

const Skills = () => {
  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    setAnimateClass("animate__animated animate__backInRight");
  }, []);

  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  }, []);

  return (
    <div className={`skills-experience-container ${animateClass}`}>
      {/* 경험 */}
      <div className="experience">
        <h2 className="section-title">경험</h2>
        <div className="experience-item">
          <span className="year">2023.12 - 24.06</span>
          <span className="company">휴먼교육센터 - 교육</span>

          {/* 설명 */}
          <h3 className="position">HTML/CSS/JS 및 프론트엔드 개발 학습</h3>
          <p className="description">
            - HTML, CSS를 통한 기본적인 웹 디자인 및 레이아웃 구현 <br />
            - JavaScript로 동적 콘텐츠 및 사용자 상호작용 구현 <br />
            - 반응형 웹에 대한 개념 학습 및 기초적인 실습 <br />
          </p>
          <h3 className="position">Java / MySQL을 이용한 백엔드 개발 학습</h3>
          <p className="description">
            - Java의 기본적인 변수, 연산자, 조건/반복문, 배열 등 기본 학습{" "}
            <br />
            - 객체지향, 예외처리, 자바 클래스를 이용한 백엔드 개발 학습 <br />-
            MySQL 구문 및 정규화 학습 - 데이터베이스 연동 및 기본 CRUD 구현{" "}
            <br />
          </p>

          <h3 className="position">Spring Boot를 이용한 웹 개발 학습</h3>
          <p className="description">
            - 레이어드 아키텍쳐 학습 <br />
            - Spring Boot로 RESTful API 설계 및 구현 <br />
            - 어노테이션 사용 학습 <br />
          </p>

          <h3 className="position">React를 활용한 웹 개발 학습 및 프로젝트</h3>
          <p className="description">
            - SPA, jsx, 컴포넌트, useEffect 등 기본 개념 학습 <br />
            - 간단한 React Native 앱 개발 학습 <br />
            - Material-ui를 이용한 UI 개발 <br />
            - 상태 관리 기초 이해 <br />
            - 비동기 데이터 처리 및 React-query 학습 <br />
          </p>
        </div>
      </div>
      {/* 스킬 섹션 */}
      <div className="skills">
        <h2 className="section-title">My Skill</h2>

        <div className="skill-item">
          <span className="skill-name">HTML/CSS</span>
          <div className="progress">
            <div className="progress-bar" data-width="95%"></div>
            <span className="nav-progress-text">95%</span> {/* 퍼센트 텍스트 */}
          </div>
        </div>

        <div className="skill-item">
          <span className="skill-name">JavaScript</span>
          <div className="progress">
            <div className="progress-bar" data-width="75%"></div>
            <span className="nav-progress-text">75%</span>
          </div>
        </div>

        <div className="skill-item">
          <span className="skill-name">UI / UX</span>
          <div className="progress">
            <div className="progress-bar" data-width="80%"></div>
            <span className="nav-progress-text">80%</span>
          </div>
        </div>

        <div className="skill-item">
          <span className="skill-name">Java</span>
          <div className="progress">
            <div className="progress-bar" data-width="85%"></div>
            <span className="nav-progress-text">85%</span>
          </div>
        </div>

        <div className="skill-item">
          <span className="skill-name">Spring Boot</span>
          <div className="progress">
            <div className="progress-bar" data-width="65%"></div>
            <span className="nav-progress-text">65%</span>
          </div>
        </div>

        <div className="skill-item">
          <span className="skill-name">React</span>
          <div className="progress">
            <div className="progress-bar" data-width="55%"></div>
            <span className="nav-progress-text">55%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
