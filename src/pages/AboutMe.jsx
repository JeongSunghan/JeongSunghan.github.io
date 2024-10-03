import React, { useEffect, useRef } from "react";
import "../styles/AboutMe.css";

import Footer from "../components/Footer";
import aboutMeImage from "../assets/image/about-me-home2.jpg";

const AboutMe = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="about-me-container">
      {/* 첫번째 스크롤 섹션 */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="about-me-section about-me-first-section"
      >
        <div className="about-me-content">
          <div className="about-me-text">
            <blockquote>
              밥도 골고루 먹듯이
              <br />
              개발도 골고루 하자
            </blockquote>
            <p>______ About me</p>
          </div>
          <div className="about-me-image">
            <img src={aboutMeImage} alt="About Me" />
          </div>
        </div>
      </section>

      {/* 두번째 스크롤 섹션 */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="about-me-section about-me-second-section"
      >
        <div className="about-me-introduction-content">
          <h2>나를 소개합니다</h2>
          <p>
            안녕하세요, 저는 프론트엔드 개발자로서 사용자 경험을 중시하며 다양한
            기술을 골고루 활용하여 최적의 솔루션을 찾는 것을 좋아합니다.
          </p>
        </div>
      </section>

      {/* 세번째 스크롤 섹션 */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="about-me-section about-me-third-section"
      >
        <div className="about-me-strengths-content">
          <h2>나의 장점과 취미</h2>
          <p>장점: 문제 해결 능력, 빠른 학습 속도, 협업 능력</p>
          <p>취미: 음악 감상, 코딩, 여행</p>
        </div>
      </section>

      {/* 네번째 스크롤 섹션 */}
      <Footer />
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="about-me-section about-me-footer-section"
      >
      </section>
    </div>
  );
};

export default AboutMe;
