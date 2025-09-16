import React from 'react'
import styles from '../styles/Services.module.css'
import services from '../data/services'

// ServiceCard component for each service
const ServiceCard = ({ icon, title, description}) => (
  <div className={styles.serviceCard}>
    <div className={styles.serviceIcon}>
      <i className={icon} />
    </div>
    <h3 className={styles.serviceTitle}>{title}</h3>
    <p className={styles.serviceDesc}>{description}</p>
  </div>
)

const Services = () => {
  return (
    <section className='section'>
      <div className={styles.container}>
        <h2 className='section-title'>
          Services I Provide
        </h2>
        <p className='section-subtitle'>
          Comprehensive web development solutions tailored to your needs
        </p>
        <div className={styles.services}>
<div className={styles.servicesGrid}>
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              {...service}
            />
          ))}
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Services