import React, { useEffect, useRef, useState } from "react";
import "../styles/AboutMe.css";

// 아이콘
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaGithub,} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJira } from "react-icons/si";

import Footer from "../components/Footer";
import aboutMeImage from "../assets/image/about-me-home2.jpg";
import myBlurredImage from "../assets/image/about-me-home3.jpg";

const AboutMe = () => {
  const sectionRefs = useRef([]);
  const [isOriginalText, setIsOriginalText] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAboutMeClick = () => {
    if (isAnimating) return; // 애니메이션 중복 실행 방지
    setIsAnimating(true);

    setTimeout(() => {
      setIsOriginalText(!isOriginalText);
      setIsAnimating(false);
    }, 500);
  };

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
      {/* 첫 번째 섹션 */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="about-me-section about-me-first-section"
      >
        <div className="about-me-content">
          <div className="about-me-text">
            <blockquote>
              "밥도 골고루 잘 먹어야 하듯
              <br />
              개발도 골고루 잘하자"
            </blockquote>
            <p
              onClick={handleAboutMeClick}
              className={isAnimating ? "hidden" : ""}
              role="button"
              aria-pressed={!isOriginalText}
            >
              {isOriginalText ? (
                ": Click me!"
              ) : (
                <>
                  안녕하세요, 저는 도전적인 개발자 정성한입니다.
                  <br />
                  군 복무를 하면서 개발에 관심을 가지게 되었고,
                  <br />
                  천천히 개발 교육을 들으며 개발을 시작하게 되었습니다.
                  <br />
                  늦게 시작했지만 누구보다 개발에 열정적이고 싶으며,
                  <br />
                  다양한 분야에서 개발할 수 있는
                  <br />
                  팀에게 항상 도움이 되는 멋진 개발자가 되고 싶습니다.
                </>
              )}
            </p>
          </div>
          <div className="about-me-image">
            <img src={aboutMeImage} alt="About Me" />
          </div>
        </div>
      </section>

      {/* 두 번째 섹션 */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="about-me-section about-me-second-section"
      >
        <div className="keyword-content-wrapper">
          <div className="keyword-left">
            <h1>My Keywords</h1>
            <p>: "These three words represent who I am."</p>
          </div>
          <div className="keyword-right">
            <div className="keyword-item">
              <div className="keyword-number">01</div>
              <div className="keyword-content">
                <h3>Challenging & Persevering</h3>
                <p>
                  도전하는 것을 정말 좋아합니다.
                  <br />
                  새로운 무언가가 있다면 도전하고자 하며, 어려움이 닥쳐도 목표를
                  이룰 때까지 끈기 있게 끝까지 도전합니다.
                </p>
              </div>
            </div>

            <div className="keyword-item">
              <div className="keyword-number">02</div>
              <div className="keyword-content">
                <h3>Empathy and Care</h3>
                <p>
                  타인의 말에 잘 공감하고 이야기를 듣는 것을 좋아하며, 허투로
                  듣지 않고 경청하여 상대방을 이해하려고 합니다.
                  <br />
                  나와 의견이 달라 논쟁이 있더라도 타인과 최대한 합의점을 찾아
                  이야기하려고 합니다.
                </p>
              </div>
            </div>

            <div className="keyword-item">
              <div className="keyword-number">03</div>
              <div className="keyword-content">
                <h3>Positive Attitude</h3>
                <p>
                  긍정적이고 열정적인 모습이 저의 강점이자 저를 표현하기 좋은
                  것 같습니다.
                  <br />
                  어떤 문제나 상황에서도 긍정적으로 해결책을 찾기 위해 노력합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="keyword-image">
            <img src={myBlurredImage} alt="Blurred Background" />
          </div>
        </div>
      </section>

      {/* 세 번째 섹션 */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="about-me-section about-me-third-section"
      >
        <div className="about-me-skills-content">
          <h2>MY SKILLS</h2>
          <div className="skills-category">
            <h3>Front-End</h3>
            <ul className="skills-list">
              <li>
                <FaHtml5 className="skill-icon" />
                <span>HTML</span>
              </li>
              <li>
                <FaCss3Alt className="skill-icon" />
                <span>CSS</span>
              </li>
              <li>
                <FaJsSquare className="skill-icon" />
                <span>JavaScript</span>
              </li>
              <li>
                <FaReact className="skill-icon" />
                <span>React</span>
              </li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Back-End</h3>
            <ul className="skills-list">
              <li>
                <FaJava className="skill-icon" />
                <span>Java</span>
              </li>
              <li>
                <SiSpringboot className="skill-icon" />
                <span>Spring Boot</span>
              </li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Database</h3>
            <ul className="skills-list">
              <li>
                <SiMysql className="skill-icon" />
                <span>MySQL</span>
              </li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Other</h3>
            <ul className="skills-list">
              <li>
                <SiJira className="skill-icon" />
                <span>Jira</span>
              </li>
              <li>
                <FaGithub className="skill-icon" />
                <span>GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 네 번째 섹션 */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="about-me-section about-me-footer-section"
      >
        <Footer />
      </section>
    </div>
  );
};

export default AboutMe;
