import React from 'react';
import { Link } from 'react-router-dom'; // Home 및 Contact로 이동하기 위해 Link 사용
import '../styles/AboutMe.css';
import aboutMeImage from '../assets/image/about-me-home2.jpg'; // 이미지 경로를 맞춰주세요

const AboutMe = () => {
  return (
    <div className="about-me-sections">
      {/* 첫번째 스크롤 섹션: 간단한 about me */}
      <section className="about-me-section first-section">
        <div className="about-me-content">
          <div className="about-me-text">
            <blockquote>밥도 골고루 먹듯이<br />개발도 골고루 하자</blockquote>
            <p>______ About me</p>
          </div>
          <div className="about-me-image">
            <img src={aboutMeImage} alt="About Me" />
          </div>
        </div>
      </section>

      {/* 두번째 스크롤 섹션: 나를 소개하는 글귀 */}
      <section className="about-me-section second-section">
        <div className="section-content">
          <h2>나를 소개합니다</h2>
          <p>안녕하세요, 저는 프론트엔드 개발자로서 사용자 경험을 중시하며, 다양한 기술을 골고루 활용하여 최적의 솔루션을 찾는 것을 좋아합니다.</p>
        </div>
      </section>

      {/* 세번째 스크롤 섹션: 나의 장점과 취미 */}
      <section className="about-me-section third-section">
        <div className="section-content">
          <h2>나의 장점과 취미</h2>
          <p>장점: 문제 해결 능력, 빠른 학습 속도, 협업 능력</p>
          <p>취미: 음악 감상, 코딩, 여행</p>
        </div>
      </section>

      {/* 네번째 스크롤 섹션: Footer (높이를 작게 설정) */}
      <section className="about-me-section fourth-section">
        <footer className="footer-content">
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <p>© 2024 Your Name. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default AboutMe;
