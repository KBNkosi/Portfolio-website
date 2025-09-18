import React, { useState, useRef } from 'react';
import styles from '../styles/Projects.module.css';


const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.classList.add(styles.visible);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.classList.remove(styles.visible);
    }
  };

  return (
    <div 
    className={styles.projectCard}
    onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <div className={styles.projectMedia}>
        {/* Thumbnail image */}
        <div className={styles.projectImage}>
          <img 
            src={project.img} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        {/* Hover Video */} 
        {project.videoUrl && (
          <video 
          ref={videoRef}
          className={`${styles.projectVideo}`}
          muted
          loop
          playsInline
          >
            <source src={project.videoUrl} type='video/webm' />
            <source 
             src={project.videoUrl.replace(".webm", ".mp4")}
             type="video/mp4"
            />

            Your browser does not support video playback

          </video>
        )}
      </div>

      <div className={`${styles.projectDescription} ${isExpanded ? styles.expanded : ''}`}>
        <div 
          className={styles.expandBtn}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <i className="fas fa-chevron-up" />
        </div>

        <div className={styles.projectContent}>
          <div className={styles.projectSummary}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.projectTech}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.projectDetails}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.projectFeatures}>
              <h4>Key Learnings:</h4>
              <ul>
                {project.reflections.map((reflection, index) => (
                  <li key={index}>{reflection}</li>
                ))}
              </ul>
            </div>
            <div className={styles.projectTech}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a href={project.demo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt" />
                Live Demo
              </a>
              <a href={project.code} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;