import React from 'react'
import styles from "../styles/Navbar.module.css"
const Navbar = () => {
  return (
     <header className={styles.navContainer}>
  <nav className={styles.navbar}>
    <div className="logo">
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
    <button className={styles.navToggle}>
      <i className="fa-solid fa-bars" />
    </button>
    <ul className={styles.navLinks}>
      <li>
        <a href="index.html" className={styles.active}>
          Home
        </a>
      </li>
      <li>
        <a href="projects.html">Projects</a>
      </li>
      <li>
        <a href="Contact.html">Contact</a>
      </li>
    </ul>
    <a
      href="https://drive.google.com/file/d/1XnV4ZZele5MagM00jiB3FmqnwOZiboaQ/view?usp=sharing"
      className={styles.navBtn}
    >
      Download CV
    </a>
  </nav>
</header>
  )
}

export default Navbar