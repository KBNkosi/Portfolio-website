import React from 'react';
import styles from '../styles/Hero.module.css';

// Capitalize component name (React convention)
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroDescription}>
          <small className={styles.heroSmallText}>Hello There!</small>
          <h1 className={styles.title}>
            I'm Kenny Nkosi<span>Frontend Developer</span>Based in SA
          </h1>
          <p className={styles.heroText}>
            I'm an experienced Frontend Developer with 3+ years in the field,
            crafting intuitive, responsive, and user-friendly web experiences that
            bring ideas to life.
          </p>
          <div className={styles.btnContainer}>
            <a href="#projects" className={`${styles.btn} ${styles.btnColor2}`}>
              <i className="fa-solid fa-play" />
              View My Portfolio
            </a>
            <a href="/contact" className={`${styles.btn} ${styles.btnColor1}`}>
              Hire Me
            </a>
          </div>
        </div>

        <div className={styles.heroImgContainer}>
          <div className={styles.heroImgBg} />
          <div className={styles.badgeContainer}>
            <span className={`${styles.badge} ${styles.badge1}`}>UI/UX Designer</span>
            <span className={`${styles.badge} ${styles.badge2}`}>Frontend Developer</span>
          </div>
          <img
            src="/images/graduate-photo.png"
            className={styles.heroImg}
            alt="Kenny Nkosi profile picture"
          />
        </div>
      </div>

      <div className={styles.skills}>
        <div className={styles.skillsGrid}>
          {[
            { icon: 'fa-brands fa-html5', name: 'HTML5' },
            { icon: 'fa-brands fa-css3-alt', name: 'CSS3' },
            { icon: 'fa-brands fa-js', name: 'JavaScript' },
            { icon: 'fa-brands fa-react', name: 'React' },
            { icon: 'fa-solid fa-mobile-alt', name: 'FlutterFlow' },
            { icon: 'fa-brands fa-node-js', name: 'Node.js' },
            { icon: 'fa-brands fa-git-alt', name: 'Git' },
            { icon: 'fa-brands fa-figma', name: 'Figma' }
          ].map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <i className={skill.icon} />
              {skill.name}
            </div>
          )).concat(
            // Duplicate items for seamless loop
            [
              { icon: 'fa-brands fa-html5', name: 'HTML5' },
              { icon: 'fa-brands fa-css3-alt', name: 'CSS3' },
              { icon: 'fa-brands fa-js', name: 'JavaScript' },
              { icon: 'fa-brands fa-react', name: 'React' },
              { icon: 'fa-brands fa-node-js', name: 'Node.js' },
              { icon: 'fa-brands fa-git-alt', name: 'Git' },
              { icon: 'fa-brands fa-figma', name: 'Figma' }
            ].map((skill, index) => (
              <div key={`dup-${index}`} className={styles.skillItem}>
                <i className={skill.icon} />
                {skill.name}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;