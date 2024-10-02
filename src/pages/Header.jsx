import React from "react";
import "../styles/Header.css"; // 헤더 스타일 추가

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="gitLink">
          <a href="https://github.com/JeongSunghan">HAN</a>
        </div>
      </div>
      <div className="contact-info">
        <a href="mailto:sh2683@naver.com">sh2683@naver.com</a>
        <span>+82 2407 5930</span>
      </div>
    </header>
  );
};

export default Header;
