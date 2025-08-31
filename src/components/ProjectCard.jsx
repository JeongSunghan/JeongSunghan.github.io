import React, { useState } from 'react';
import '../styles/ProjectCard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, style, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 텍스트가 너무 길면 자르는 함수
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div
      className={`project-card-glass ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-thumbnail-glass">
        <img 
          src={project.img} 
          alt={project.title} 
          loading="lazy"
          className="project-image-glass"
        />
        {project.tags && (
          <div className="project-tags-glass">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-tag-glass">{tag}</span>
            ))}
          </div>
        )}
      </div>

      <div className={`project-info-glass ${isActive ? 'expanded' : ''}`}>        
        <h3 className="project-title-glass">{project.title}</h3>
        <div className="project-divider-glass" />
        <p className="project-description-glass">
          {isActive ? project.description : truncateText(project.description, 80)}
        </p>
        {isActive && project.techStack && (
          <div className="tech-stack-glass">
            <h4>Technologies</h4>
            <div className="tech-items-glass">
              {project.techStack.split(',').map((tech, index) => (
                <span key={index} className="tech-item-glass">{tech.trim()}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={`action-buttons-glass ${isActive || isHovered ? 'visible' : ''}`}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button-glass github-button-glass"
            onClick={(e) => e.stopPropagation()}
            aria-label="View on GitHub"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button-glass demo-button-glass"
            onClick={(e) => e.stopPropagation()}
            aria-label="View Live Demo"
          >
            <FaExternalLinkAlt />
            <span>Demo</span>
          </a>
        )}
      </div>
      {isActive && (
        <div className="card-footer-glass">
          <div className="project-date-glass">{project.date}</div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;