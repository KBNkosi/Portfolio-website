import React from 'react'
import styles from '../styles/Services.module.css'
import services from '../data/services'

// ServiceCard component for each service
const ServiceCard = ({ icon, title, description, features }) => (
  <div className={styles.serviceCard}>
    <div className={styles.serviceIcon}>
      <i className={icon} />
    </div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDesc}>{description}</p>
    <div className={styles.serviceFeatures}>
      {features.split(',').map((feature, index) => (
        <span key={index}>{feature.trim()}</span>
      ))}
    </div>
  </div>
)

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.light}`}>
          Services I Provide
        </h2>
        <p className={`${styles.sectionSubTitle} ${styles.light}`}>
          Comprehensive web development solutions tailored to your needs
        </p>
        
        <div className={styles.servicesGrid}>
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services