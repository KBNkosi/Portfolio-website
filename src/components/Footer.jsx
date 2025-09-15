
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerContent}`}>
        {/* Brand Column */}
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <svg
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={24} cy={24} r={24} fill="#ff6002" />
              <text
                x="50%"
                y="56%"
                textAnchor="middle"
                fill="#fff"
                fontFamily="Montserrat, Arial, sans-serif"
                fontSize={22}
                fontWeight="bold"
                dy=".3em"
              >
                KN
              </text>
            </svg>
            <span>Kenny Nkosi</span>
          </div>
          <p className={styles.footerDesc}>
            Frontend developer crafting intuitive web experiences with modern
            technologies.
          </p>
          <div className={styles.footerSocial}>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-github" />
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerContact}>
          <h3>Contact Info</h3>
          <div className={styles.contactInfo}>
            <p>
              <i className="fas fa-map-marker-alt" />
              Johannesburg, South Africa
            </p>
            <p>
              <i className="fas fa-phone" />
              <a href="tel:+27672812905">+27 67 281 2905</a>
            </p>
            <p>
              <i className="fas fa-envelope" />
              <a href="mailto:nkosikenny9@gmail.com">nkosikenny9@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Kenny Nkosi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer