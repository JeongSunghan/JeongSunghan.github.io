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
         
          <h3>운동에 대한 열정</h3>
          <p>
            복잡한 생각이 많을 때 운동을 통해 마음을 정리하고, 머리를 맑게 합니다.
            또한, 새로운 도전과 목표 설정을 통해 지속적으로 성장할 수 있는 동기를 부여받습니다.
          </p>

          <h3>추구하는 목표</h3>
          <p>
            개발에 더 익숙해지고 성장함으로써, 과거에 진행했던 프로젝트를 리팩토링하고 싶습니다.
            초기에는 기능이 미흡했지만, 지속적인 학습과 노력을 통해 더 완성도 높은 웹 애플리케이션을
            만들고자 합니다.
          </p>

          <h3>나의 강점</h3>
          <p>
            항상 밝고 긍정적인 성격으로 사람들과의 소통을 즐깁니다. 한 번 설정한 목표는 완벽을 기할 때까지
            지속적으로 도전합니다.
          </p>

          <h3>실수와 극복</h3>
          <p>
            새로운 것을 시도할 때 가끔 실수를 하지만, 이를 극복하기 위해 꾸준히 학습하고 문제를 해결해 나갑니다.
            이러한 경험을 통해 지속적으로 성장하고자 합니다.
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
