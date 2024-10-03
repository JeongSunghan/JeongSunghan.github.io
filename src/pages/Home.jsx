import React, { useState } from "react";
import "../styles/Home.css";
import profileImage from "../assets/image/about-me-home.jpg";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  const handleAboutMeClick = () => {
    setIsLoading(true); // 로딩 화면을 표시
    setTimeout(() => {
      navigate("/about"); // 일정 시간 후 About 페이지로 이동
    }, 2500); // n초 후에 페이지 이동 (애니메이션을 충분히 보여줌)
  };

  const handleProjectsClick = () => {
    setIsLoading(true); // 로딩 화면을 표시
    setTimeout(() => {
      navigate("/projects"); // 일정 시간 후 About 페이지로 이동
    }, 2500); // n초 후에 페이지 이동 (애니메이션을 충분히 보여줌)
  };

  return (
    <div className="home-container">
      {isLoading ? ( // 로딩 중일 때 로딩 화면 표시
        <Loading /> // Loading 컴포넌트를 표시
      ) : (
        <>
          <div className="left-section">
            <div className="image-container">
              <img src={profileImage} alt="Profile" className="profile-image" />
              <div className="text-overlay">
                <h1>반갑습니다!</h1>
                <h2>JEONG SUNGHAN</h2>
                <p>JUNIOR Web Developer 입니다</p>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div onClick={handleAboutMeClick} className="home-about-me-section">
              <h2>About me</h2>
            </div>
            <div onClick={handleProjectsClick} className="home-projects-section">
              <h2>Project</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
