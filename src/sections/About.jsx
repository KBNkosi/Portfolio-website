import React, { useState, useEffect } from 'react';
import { aboutData } from '../data/about';
import styles from '../styles/About.module.css'

const About = () => {
  const [activeTab, setActiveTab] = useState('summary');
 
  useEffect(()=>{
    const defaultTab=aboutData.tabs[0].id;
    setActiveTab(defaultTab);
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const TabButton = ({ tab, isActive, onClick }) => (
    <button 
      className={`${styles.tabBtn} ${isActive ? styles.active : ''}`}
      onClick={() => onClick(tab.id)}
    >
      {tab.label}
    </button>
  );

  const SummaryTab = ({ data }) => (
    <div>
      <h3>{data.title}</h3>
      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );

  const ExperienceTab = ({ experiences }) => (
    <div>
      <h3>Work Experience</h3>
      {experiences.map((exp) => (
        <div key={exp.id} className={styles.achievementItem}>
          <h4>
            <i className={exp.icon}></i> {exp.title}
          </h4>
          <p className={styles.achievementMeta}>
            {exp.location} | {exp.duration}
          </p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );

  const EducationTab = ({ education }) => (
    <div>
      <h3>Educational Background</h3>
      {education.map((edu) => (
        <div key={edu.id} className={styles.educationItem}>
          <h4>{edu.degree}</h4>
          <p><strong>Institute:</strong> {edu.institute}</p>
          <p><strong>Duration:</strong> {edu.duration}</p>
          <p><strong>Result:</strong> {edu.result}</p>
        </div>
      ))}
    </div>
  );

  const AchievementsTab = ({ achievements }) => (
    <div>
      <h3>Key Achievements</h3>
      {achievements.map((achievement) => (
        <div key={achievement.id} className={styles.achievementItem}>
          <h4>
            <i className={achievement.icon}></i> {achievement.title}
          </h4>
          <p className={styles.achievementMeta}>{achievement.meta}</p>
          <p>{achievement.description}</p>
        </div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'summary':
        return <SummaryTab data={aboutData.summary} />;
      case 'experience':
        return <ExperienceTab experiences={aboutData.experience} />;
      case 'education':
        return <EducationTab education={aboutData.education} />;
      case 'achievements':
        return <AchievementsTab achievements={aboutData.achievements} />;
      default:
        return <AchievementsTab achievements={aboutData.achievements} />;
    }
  };

  return (
    <section className={styles.about}>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>

        <div className={styles.tabsContainer}>
          <div className={styles.tabButtons}>
            {aboutData.tabs.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={handleTabClick}
              />
            ))}
          </div>

          <div className={styles.tabContent}>
          {aboutData.tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${styles.tabContentInner} ${
                activeTab === tab.id ? styles.active : ''
              }`}
            >
              {activeTab === tab.id && renderTabContent()}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;