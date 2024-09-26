import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 


import "../styles/Home.css";
import "animate.css";
import "../styles/Responsive.css";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // 마우스를 올리면 상태가 변경
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // 마우스를 내리면 상태가 초기화
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleClick = () => {
    if (isHovered) {
      navigate("/about");
    }
  };

  return (
    <div className="home-section">
      <div
        className="home-section2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} 
      >
        {!isHovered ? (
          <div className="animate__animated animate__bounce">
            <h1 className="home-name">Jeong Sunghan</h1>
            <h3 className="home-tag">Junior Developer</h3>
          </div>
        ) : (
          <div className="animate__animated animate__fadeIn">
            <h1 className="home-message">
              Portfolio Open?
              <p className="home-message2">Yes!</p>
            </h1>            
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
