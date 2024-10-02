import React, { useState } from 'react';
import '../styles/Home.css';
import profileImage from '../assets/image/about-me-home.jpg';
import { useNavigate } from 'react-router-dom'; // useNavigate를 사용한 라우팅

const Home = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  const handleAboutMeClick = () => {
    setIsLoading(true); // 로딩 화면을 표시
    setTimeout(() => {
      navigate('/about'); // 일정 시간 후 About 페이지로 이동
    }, 1500); // 1.5초 후에 페이지 이동
  };

  return (
    <div className="home-container">
      {isLoading ? ( // 로딩 중일 때 로딩 화면 표시
        <div className="loading-screen">
          <p>Loading About Me page...</p>
        </div>
      ) : (
        <>
          <div className="left-section">
            <div className="image-container">
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
              />
              <div className="text-overlay">
                <h1>안녕하세요</h1>
                <h2>JEONG SUNGHAN</h2>
                <p>JUNIOR Developer 입니다</p>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div 
              onClick={handleAboutMeClick}
              className="about-me-section"
            >
              <h2>About me</h2>
            </div>
            <div className="projects-section">
              <h2>Project</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
