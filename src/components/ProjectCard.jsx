import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project, style, onClick }) => {
  return (
    <div
      className="project-card"
      style={style}
      onClick={onClick}
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
};

export default ProjectCard;
