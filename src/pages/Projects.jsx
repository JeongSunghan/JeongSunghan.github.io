import React, { useRef, useEffect, useState } from "react";

import "../styles/Projects.css";
import projectsData from "../data/projectsData";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  // 카드 위치, 스타일 계산
  const calculateCardStyle = (index, currentIndex) => {
    if (index === currentIndex) {
      return {
        opacity: 1,
        zIndex: 2,
        pointerEvents: "auto",
        transform: "none",
        transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "absolute",
        left: 0,
        right: 0,
        margin: "0 auto",
      };
    } else {
      return {
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none",
        transform: "none",
        transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "absolute",
        left: 0,
        right: 0,
        margin: "0 auto",
      };
    }
  };

  // 마우스 휠 감지 및 스크롤 처리
  useEffect(() => {
    const handleWheel = (event) => {
      if (isAnimating) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isMouseOverContainer =
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom &&
        event.clientX >= rect.left &&
        event.clientX <= rect.right;

      if (isMouseOverContainer) {
        // 수평 스크롤이 더 크면 페이지 스크롤 막기
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
          event.preventDefault();
        }

        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);

        // 스크롤 방향에 따라 카드 변경
        if (event.deltaY > 0 || event.deltaX > 0) {
          setCurrentIndex((prev) => (prev + 1) % projectsData.length);
        } else {
          setCurrentIndex(
            (prev) => (prev - 1 + projectsData.length) % projectsData.length
          );
        }
  
      }
    };

    // 터치 이벤트 처리
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      touchEndX = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (isAnimating) return;

      const touchDiff = touchStartX - touchEndX;
      if (Math.abs(touchDiff) > 50) {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);

        if (touchDiff > 0) {
          setCurrentIndex((prev) => (prev + 1) % projectsData.length);
        } else {
          setCurrentIndex(
            (prev) => (prev - 1 + projectsData.length) % projectsData.length
          );
        }
      }
    };

    const container = containerRef.current;
    if (container) {      
      container.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: true,
      });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [isAnimating, projectsData.length]);

  const handleClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    setCurrentIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  // 프로젝트 인디케이터 렌더링
  const renderIndicators = () => {
    return (
      <div className="project-indicators">
        {projectsData.map((_, index) => (
          <span
            key={`indicator-${index}`}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
  };

  // 현재 프로젝트 정보 표시
  const currentProject = projectsData[currentIndex];

  return (
    <div
      className="projects-page"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <h2 className="projects-title">Projects</h2>
      {/* <p className="projects-description">평소 만들어 왔던 프로젝트들..</p> */}
      <div
        className="projects-container"
        ref={containerRef}
        style={{ position: "relative", minHeight: "420px", flex: "1 0 auto" }}
        onMouseEnter={() => setIsInteractive(true)}
        onMouseLeave={() => setIsInteractive(false)}
      >
        <button
          className={`project-arrow left-arrow ${
            isInteractive ? "visible" : ""
          }`}
          onClick={handlePrev}
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        {projectsData.map((project, index) => {
          const style = calculateCardStyle(index, currentIndex);
          return (
            <ProjectCard
              key={project.id}
              project={project}
              style={style}
              onClick={() => handleClick(index)}
              isActive={index === currentIndex}
            />
          );
        })}
        <button
          className={`project-arrow right-arrow ${
            isInteractive ? "visible" : ""
          }`}
          onClick={handleNext}
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {renderIndicators()}

      <div className="current-project-info">
        <p className="project-tech-stack">{currentProject.techStack}</p>
      </div>

      <div style={{ flex: "0 0 auto" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
