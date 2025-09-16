import React from 'react'
import styles from '../styles/Skills.module.css'

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className='container'>
        <h2 className='section-title'>My Tech Stack</h2>
        <p className='section-subtitle'>Technologies I work with</p>
        <div className={styles.techGrid}>
          {/* Frontend */}
          <div className={styles.techCategory}>
            <h3>Frontend</h3>
            <div className={styles.techIcons}>
              <div className={styles.techIcon} title="HTML5">
                <i className="fa-brands fa-html5" style={{ color: "#E44D26" }} />
                <span>HTML5</span>
              </div>
              <div className={styles.techIcon} title="CSS3">
                <i className="fa-brands fa-css3-alt" style={{ color: "#264DE4" }} />
                <span>CSS3</span>
              </div>
              <div className={styles.techIcon} title="JavaScript">
                <i className="fa-brands fa-js" style={{ color: "#F7DF1E" }} />
                <span>JavaScript</span>
              </div>
              <div className={styles.techIcon} title="React">
                <i className="fa-brands fa-react" style={{ color: "#61DAFB" }} />
                <span>React</span>
              </div>
              <div className={styles.techIcon} title="Sass">
                <i className="fa-brands fa-sass" style={{ color: "#CC6699" }} />
                <span>Sass</span>
              </div>
            </div>
          </div>

         

          {/* Tools */}
          <div className={styles.techCategory}>
            <h3>Tools &amp; Others</h3>
            <div className={styles.techIcons}>
              <div className={styles.techIcon} title="Git">
                <i className="fa-brands fa-git-alt" style={{ color: "#F05032" }} />
                <span>Git</span>
              </div>
              <div className={styles.techIcon} title="GitHub">
                <i className="fa-brands fa-github" style={{ color: "#181717" }} />
                <span>GitHub</span>
              </div>
              <div className={styles.techIcon} title="VS Code">
                <i className="fa-solid fa-code" style={{ color: "#007ACC" }} />
                <span>VS Code</span>
              </div>
              <div className={styles.techIcon} title="Figma">
                <i className="fa-brands fa-figma" style={{ color: "#F24E1E" }} />
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills