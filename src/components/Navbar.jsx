import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Close menu when route changes
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navContainer}>
      <nav className={styles.navbar} ref={navRef}>
        <div className={styles.logo}>
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
          Kenny Nkosi
        </div>
        <button 
          className={styles.navToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
        <div className={`${styles.navMenu} ${isOpen ? styles.show : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <NavLink 
                to="/"
                className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects"
                className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1XnV4ZZele5MagM00jiB3FmqnwOZiboaQ/view?usp=sharing"
            className={styles.navBtn}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar