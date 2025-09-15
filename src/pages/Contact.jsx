import React from 'react'
import styles from '../styles/Contact.module.css'
import PageTransition from '../components/PageTransition'

const Contact = () => {
  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            I'm open for collaborations and new opportunities
          </p>

          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className={styles.contactContent}>
                    <h4>Email</h4>
                    <a href="mailto:nkosikenny9@gmail.com">nkosikenny9@gmail.com</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className={styles.contactContent}>
                    <h4>Phone</h4>
                    <a href="tel:+27672812905">+27 67 281 2905</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className={styles.contactContent}>
                    <h4>Location</h4>
                    <span>Johannesburg, South Africa</span>
                  </div>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <h4>Follow Me</h4>
                <div className={styles.socialIcons}>
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
            </div>

            {/* Contact Form */}
            <form className={styles.contactForm}>
              <h3>Send Me a Message</h3>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="john.doe@example.com"
                />
                <span className={styles.formLine} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Service Needed</label>
                <select name="subject" id="subject" required>
                  <option value="">Select a Service</option>
                  <option value="responsive-website">
                    Responsive Website Development
                  </option>
                  <option value="web-app">Interactive Web Application</option>
                  <option value="react-prototype">
                    Frontend Prototyping with React
                  </option>
                  <option value="consultation">General Consultation</option>
                </select>
                <span className={styles.formLine} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hi Kenny, I'd like to discuss a project with you..."
                  defaultValue={""}
                />
                <span className={styles.formLine} />
              </div>
              <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>
                <span>Send Message</span>
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact