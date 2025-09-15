import React from 'react'
import styles from '../styles/Contact.module.css'
import PageTransition from '../components/PageTransition'

const Contact = () => {
  return (
    <PageTransition>
       <section className={styles.contact}>
      <div className='container'>
        <div className={styles.contactInfo}>
          <h2 className='section-title'>Let's Work Together</h2>
          <p className={styles.contactIntro}>
            I'm open to freelance opportunities and junior positions.
            <br />
            Feel free to reach out directly or use the form below.
          </p>
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
        <form className={styles.contactForm} id="myForm" method="POST" autoComplete="on">
          <div className={styles.formHeader}>
            <h3>Send Me a Message</h3>
            <p>I'll get back to you within 24 hours</p>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="John Doe"
            />
            <span className={styles.formLine} />
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
    </section>
    </PageTransition>
    
  )
}

export default Contact