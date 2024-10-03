import React, { useRef, useEffect, useState } from "react";
import "../styles/Projects.css";
import projectsData from "../data/projectsData"; // 데이터를 불러옴
import Footer from "../components/Footer";

const Projects = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 카드 위치 및 스타일 계산 로직
  const calculateCardStyle = (index, currentIndex, totalProjects) => {
    const position = (index - currentIndex + totalProjects) % totalProjects;

    const scale = 1 - position * 0.1; // 각 카드의 크기 비율
    const translateX = position * -200; // 카드의 x축 이동값
    const translateZ = position * -50; // 카드의 z축 이동값
    const opacity = 1 - position * 0.225; // 카드의 투명도

    return {
      transform: `translateX(${translateX}px) scale(${scale}) translateZ(${translateZ}px)`,
      opacity: opacity,
      zIndex: totalProjects - position, // z-index로 카드 레이어 순서 지정
      transition: "transform 0.5s ease, opacity 0.5s ease", // 애니메이션 설정
    };
  };

  // 마우스 휠로 좌우 스크롤 가능하게
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
      container.addEventListener("wheel", handleWheel);
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

  return (
    <>
      <div className="project-page">
        <h2 className="project-title">Projects</h2>
        <div className="projects-container" ref={containerRef}>
          {projectsData.map((project, index) => {
            const style = calculateCardStyle(
              index,
              currentIndex,
              projectsData.length
            );
            return (
              <div
                key={project.id}
                className="project-card"
                style={style} // 동적으로 계산된 스타일 적용
                onClick={() => handleClick(index)} // 클릭 시 해당 카드로 이동
              >
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-thumbnail">
                  <img src={project.img} alt={project.title} />
                </div>
                {/* View Code 버튼 추가 */}
                <div className="button-container">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="view-code-button">View Code</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
