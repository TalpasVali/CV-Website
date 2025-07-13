import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Experiență Profesională
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Călătoria mea profesională în tehnologie
          </p>
        </div>

        <div className="experience-content">
          <div className={`experience-timeline ${isVisible ? 'animate-fadeInLeft' : ''}`}>
            {mockData.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item ${activeExperience === index ? 'active' : ''}`}
                onClick={() => setActiveExperience(index)}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-position">{exp.position}</div>
                <div className="timeline-period">{exp.startDate} - {exp.endDate}</div>
              </div>
            ))}
          </div>

          <div className={`experience-details ${isVisible ? 'animate-fadeInRight' : ''}`}>
            <div className="experience-card">
              <div className="experience-header">
                <h3 className="experience-position">
                  {mockData.experience[activeExperience].position}
                </h3>
                <div className="experience-company">
                  {mockData.experience[activeExperience].company}
                </div>
                <div className="experience-meta">
                  <span className="experience-location">
                    📍 {mockData.experience[activeExperience].location}
                  </span>
                  <span className="experience-period">
                    📅 {mockData.experience[activeExperience].startDate} - {mockData.experience[activeExperience].endDate}
                  </span>
                </div>
              </div>

              <div className="experience-body">
                <p className="experience-description">
                  {mockData.experience[activeExperience].description}
                </p>

                <div className="experience-achievements">
                  <h4 className="achievements-title">🏆 Realizări cheie:</h4>
                  <ul className="achievements-list">
                    {mockData.experience[activeExperience].achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">
                        <div className="achievement-bullet">✨</div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h4 className="tech-title">🛠️ Tehnologii utilizate:</h4>
                  <div className="tech-tags">
                    {mockData.experience[activeExperience].technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          min-height: 100vh;
          padding: 100px 0;
          background: linear-gradient(135deg, #868F96 0%, #596164 100%);
          position: relative;
        }
        
        .experience-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="hexagon" width="50" height="43.4" patternUnits="userSpaceOnUse"><polygon points="25,0 50,14.4 50,28.9 25,43.4 0,28.9 0,14.4" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23hexagon)"/></svg>');
          opacity: 0.3;
        }
        
        .experience-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: white;
          opacity: 0.8;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .experience-content {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .experience-timeline {
          position: relative;
          padding: 20px 0;
        }
        
        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));
        }
        
        .timeline-item {
          position: relative;
          padding: 20px 0 20px 70px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 15px;
          margin-bottom: 10px;
        }
        
        .timeline-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }
        
        .timeline-item.active {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .timeline-dot {
          position: absolute;
          left: 20px;
          top: 30px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          border: 3px solid #667eea;
          transition: all 0.3s ease;
        }
        
        .timeline-item.active .timeline-dot {
          background: #667eea;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
          transform: scale(1.2);
        }
        
        .timeline-company {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 5px;
        }
        
        .timeline-position {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 5px;
        }
        
        .timeline-period {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
        }
        
        .experience-details {
          position: sticky;
          top: 100px;
        }
        
        .experience-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
        }
        
        .experience-header {
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid rgba(102, 126, 234, 0.1);
        }
        
        .experience-position {
          font-size: 1.8rem;
          font-weight: 800;
          color: #2d3748;
          margin-bottom: 10px;
        }
        
        .experience-company {
          font-size: 1.3rem;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 15px;
        }
        
        .experience-meta {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }
        
        .experience-location,
        .experience-period {
          font-size: 0.95rem;
          color: #4a5568;
          font-weight: 500;
        }
        
        .experience-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 30px;
        }
        
        .experience-achievements {
          margin-bottom: 30px;
        }
        
        .achievements-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
        }
        
        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          padding: 10px;
          background: rgba(102, 126, 234, 0.05);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .achievement-item:hover {
          background: rgba(102, 126, 234, 0.1);
          transform: translateX(5px);
        }
        
        .achievement-bullet {
          font-size: 1rem;
          margin-top: 2px;
        }
        
        .achievement-item span {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.5;
        }
        
        .experience-technologies {
          margin-top: 30px;
        }
        
        .tech-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tech-tag {
          background: linear-gradient(135deg, #868F96, #596164);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        @media (max-width: 768px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .experience-timeline {
            order: 2;
          }
          
          .experience-details {
            order: 1;
            position: static;
          }
          
          .timeline-item {
            padding: 15px 0 15px 50px;
          }
          
          .timeline-dot {
            left: 10px;
          }
          
          .experience-timeline::before {
            left: 20px;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .experience-card {
            padding: 30px 20px;
          }
          
          .experience-meta {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;