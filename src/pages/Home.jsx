import React, { useState } from "react";
import "../styles/Home.css";
import profileImage from "../assets/image/about-me-home.jpg";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleAboutMeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/about");
    }, 1500); // 로딩 시간을 1.5초로 조정
  };

  const handleProjectsClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/projects");
    }, 1500); // 로딩 시간을 1.5초로 조정
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="home-left-section">
            <div className="home-image-container">
              <img src={profileImage} alt="Profile" className="home-profile-image" />
              <div className="home-text-overlay">
                <h1>반갑습니다!</h1>
                <h2>JEONG SUNGHAN</h2>
                <p>JUNIOR Developer 입니다</p>
              </div>
            </div>
          </div>
          <div className="home-right-section">
            <div onClick={handleAboutMeClick} className="home-section home-about-me-section">
              <h2>About Me</h2>
            </div>
            <div onClick={handleProjectsClick} className="home-section home-projects-section">
              <h2>Projects</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
