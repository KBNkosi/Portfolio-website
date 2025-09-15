import React from 'react'
import styles from '../styles/Projects.module.css'
import ProjectCard from '../components/ProjectCard'
import {projects} from '../data/projectsData'
import PageTransition from '../components/PageTransition'
const Projects = () => {
  return (
    
     <section className='section'>
      <div className='container'>
               <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">
          Explore my latest projects and creative solutions
        </p>
        
        <div className={styles.portfolioGrid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
        
      
    </section>
  
    
  )
}

export default Projects