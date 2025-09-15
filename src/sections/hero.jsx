import React from "react";
import styles from "../styles/Hero.module.css";

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
            crafting intuitive, responsive, and user-friendly web experiences
            that bring ideas to life.
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
            <div className={`${styles.heroBadge} ${styles.badgeTopLeft}`}>
              <i className="fa-solid fa-code"></i>
              <span>Web Development</span>
            </div>

            <div className={`${styles.heroBadge} ${styles.badgeTopRight}`}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>E-commerce</span>
            </div>

            <div className={`${styles.heroBadge} ${styles.badgeBottomLeft}`}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>SEO</span>
            </div>
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
            { icon: "fa-solid fa-laptop-code", name: "Web Development" },
            { icon: "fa-solid fa-cart-shopping", name: "E-commerce Solutions" },
            { icon: "fa-solid fa-magnifying-glass", name: "SEO Optimization" },
            { icon: "fa-solid fa-wrench", name: "Maintenance & Support" },
          ]
            .map((service, index) => (
              <div key={index} className={styles.skillItem}>
                <i className={service.icon} />
                {service.name}
              </div>
            ))
            .concat(
              // Duplicate items for seamless loop
              [
                { icon: "fa-solid fa-laptop-code", name: "Web Development" },
                {
                  icon: "fa-solid fa-cart-shopping",
                  name: "E-commerce Solutions",
                },
                {
                  icon: "fa-solid fa-magnifying-glass",
                  name: "SEO Optimization",
                },
                { icon: "fa-solid fa-wrench", name: "Maintenance & Support" },
              ].map((service, index) => (
                <div key={`dup-${index}`} className={styles.skillItem}>
                  <i className={service.icon} />
                  {service.name}
                </div>
              ))
            )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
