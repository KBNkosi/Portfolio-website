import React from 'react'

const projects = () => {
  return (
    <section id="portfolio" className="portfolio">
  <div className="container">
    <h2 className="section-title">My Portfolio</h2>
    <p className="section-subtitle">
      Explore my latest projects and creative solutions
    </p>
    <div className="portfolio-grid">
      {/* Project Card 1 */}
      <div className="project-card">
        <div className="project-media">
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
              alt="E-commerce Dashboard"
            />
          </div>
          <video className="project-video" muted="" loop="">
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="project-description">
          <div className="expand-btn">
            <i className="fas fa-chevron-up" />
          </div>
          <div className="project-content">
            <div className="project-summary">
              <h3>E-commerce Dashboard</h3>
              <p>
                Modern admin dashboard for managing online stores with real-time
                analytics.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Chart.js</span>
              </div>
            </div>
            <div className="project-details">
              <h3>E-commerce Dashboard</h3>
              <p>
                A comprehensive admin dashboard built for modern e-commerce
                businesses. Features include real-time sales analytics,
                inventory management, customer insights, and revenue tracking.
              </p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Real-time sales and revenue tracking</li>
                  <li>Interactive data visualizations</li>
                  <li>Inventory management system</li>
                  <li>Customer analytics and insights</li>
                  <li>Responsive design for all devices</li>
                </ul>
              </div>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Chart.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt" />
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  <i className="fab fa-github" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Card 2 */}
      <div className="project-card">
        <div className="project-media">
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
              alt="Task Management App"
            />
          </div>
          <video className="project-video" muted="" loop="">
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="project-description">
          <div className="expand-btn">
            <i className="fas fa-chevron-up" />
          </div>
          <div className="project-content">
            <div className="project-summary">
              <h3>Task Management App</h3>
              <p>
                Collaborative task management platform with real-time updates
                and team features.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Material-UI</span>
              </div>
            </div>
            <div className="project-details">
              <h3>Task Management App</h3>
              <p>
                A powerful collaboration platform that helps teams organize,
                track, and complete projects efficiently. Built with modern web
                technologies and real-time synchronization.
              </p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Real-time collaboration and updates</li>
                  <li>Kanban board interface</li>
                  <li>Team member assignments</li>
                  <li>Progress tracking and reporting</li>
                  <li>Mobile-responsive design</li>
                </ul>
              </div>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Material-UI</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">WebSocket</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt" />
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  <i className="fab fa-github" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Card 3 */}
      <div className="project-card">
        <div className="project-media">
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
              alt="Restaurant Website"
            />
          </div>
          <video className="project-video" muted="" loop="">
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="project-description">
          <div className="expand-btn">
            <i className="fas fa-chevron-up" />
          </div>
          <div className="project-content">
            <div className="project-summary">
              <h3>Restaurant Website</h3>
              <p>
                Modern restaurant website with online ordering and reservation
                system.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">PHP</span>
              </div>
            </div>
            <div className="project-details">
              <h3>Restaurant Website</h3>
              <p>
                A beautiful and functional restaurant website featuring online
                ordering, table reservations, and an elegant showcase of the
                menu and ambiance.
              </p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Online ordering system</li>
                  <li>Table reservation booking</li>
                  <li>Interactive menu display</li>
                  <li>Gallery and virtual tour</li>
                  <li>Customer review system</li>
                </ul>
              </div>
              <div className="project-tech">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Bootstrap</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt" />
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  <i className="fab fa-github" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Card 4 */}
      <div className="project-card">
        <div className="project-media">
          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
              alt="Data Analytics Platform"
            />
          </div>
          <video className="project-video" muted="" loop="">
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="project-description">
          <div className="expand-btn">
            <i className="fas fa-chevron-up" />
          </div>
          <div className="project-content">
            <div className="project-summary">
              <h3>Data Analytics Platform</h3>
              <p>
                Comprehensive analytics dashboard for business intelligence and
                data visualization.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">D3.js</span>
                <span className="tech-tag">Python</span>
              </div>
            </div>
            <div className="project-details">
              <h3>Data Analytics Platform</h3>
              <p>
                An advanced analytics platform that transforms raw data into
                actionable insights through interactive visualizations and
                comprehensive reporting tools.
              </p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Interactive data visualizations</li>
                  <li>Custom dashboard creation</li>
                  <li>Real-time data processing</li>
                  <li>Export and sharing capabilities</li>
                  <li>Multi-source data integration</li>
                </ul>
              </div>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">D3.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Docker</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt" />
                  Live Demo
                </a>
                <a href="#" className="project-link">
                  <i className="fab fa-github" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default projects