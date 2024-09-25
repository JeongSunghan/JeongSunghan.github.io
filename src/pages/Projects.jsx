import React, { useState } from "react";
import "../styles/Projects.css";

const projectsData = [
  {
    id: 1,
    category: "Team",
    title: "FlowNary",
    img: "image/project1.png",
    link: "https://github.com/JeongSunghan/FinalProject-flowNay",
    description: "이 프로젝트는 모던 세대의 소통을 위한 SNS 및 웹 서버 프로젝트입니다.",
  },
  {
    id: 2,
    category: "Team",
    title: "맛Zip",
    img: "image/project2.png",
    link: "https://github.com/JeongSunghan/FoodProject",
    description: "맛집 정보 제공 웹사이트 프로젝트로, 사용자들이 다양한 맛집을 공유할 수 있습니다.",
  },
  {
    id: 3,
    category: "Team",
    title: "스키 대여/판매 및 경매",
    img: "image/project3.png",
    link: "https://github.com/JeongSunghan/miniProject",
    description: "스키 장비 대여 및 판매 경매 기능을 제공하는 웹 개발 프로젝트입니다.",
  },
  {
    id: 4,
    category: "Side",
    title: "조커뽑기",
    img: "image/project4.png",
    link: "https://github.com/your-username/project4",
    description: "React를 활용한 로스트아크 초월과 같은 아이템을 사용해, 조커를 피해서 부수는 게임입니다.",
  },
  {
    id: 5,
    category: "Side",
    title: "Worlde 게임",
    img: "image/project5.png",
    link: "https://github.com/JeongSunghan/wordle-game",
    description: "React를 활용한 Wordle 게임을 모방한 단어 맞추기 게임 프로젝트입니다.",
  },
  {
    id: 6,
    category: "Side",
    title: "포트폴리오",
    img: "image/project6.png",
    link: "https://github.com/JeongSunghan/developerfolio",
    description: "React로 만든 포트폴리오 입니다.",
  },
];

const categories = ["All", "Team", "Side"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-section">
      <h2 className="project-section-title">Projects</h2>
      <div className="categories">
        {categories.map((category) => (
          <span
            key={category}
            className={`category-item ${
              category === selectedCategory ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => window.open(project.link, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img src={project.img} alt={project.title} />
            <div className="project-details">
              <span className="category">{project.category}</span>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p> {/* 설명 추가 */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
