import React, { useRef, useEffect, useState } from "react";

import "../styles/Projects.css";
import projectsData from "../data/projectsData"; 
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard"; 

const Projects = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 카드 위치 및 스타일 계산 로직(GPT 도움받은 로직)
  const calculateCardStyle = (index, currentIndex, totalProjects) => {
    const position = (index - currentIndex + totalProjects) % totalProjects;

    const scale = 1 - position * 0.1; // 각 카드의 크기 비율
    const translateX = position * -150; // 카드의 x축 이동값
    const translateZ = position * -50; // 카드의 z축 이동값
    const opacity = 1 - position * 0.2; // 카드의 투명도

    return {
      transform: `translateX(${translateX}px) scale(${scale}) translateZ(${translateZ}px)`,
      opacity: opacity,
      zIndex: totalProjects - position, // z-index로 카드 레이어 순서 지정
      transition: "transform 0.5s ease, opacity 0.5s ease", // 애니메이션 설정
    };
  };

  // 마우스 휠로 좌우 스크롤 가능
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
      } else {
        setCurrentIndex(
          (prev) => (prev - 1 + projectsData.length) % projectsData.length
        );
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  // 좌우 화살표 클릭 핸들러
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <div className="projects-page">
      <h2 className="projects-title">Projects</h2>            
      <div className="projects-container" ref={containerRef}>
        <button className="project-arrow left-arrow" onClick={handlePrev}>
          ◀
        </button>
        {projectsData.map((project, index) => {
          const style = calculateCardStyle(
            index,
            currentIndex,
            projectsData.length
          );
          return (
            <ProjectCard
              key={project.id}
              project={project}
              style={style} 
              onClick={() => handleClick(index)} 
            />
          );
        })}
        <button className="project-arrow right-arrow" onClick={handleNext}>
          ▶
        </button>
      </div>
      {/* Footer 섹션으로 감싸기 */}
      <section className="projects-footer-section">
        <Footer />
      </section>
    </div>
  );
};
export default Projects;
