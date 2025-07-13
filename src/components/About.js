import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'story', label: 'Povestea mea', icon: '📖' },
    { id: 'values', label: 'Valori', icon: '💎' },
    { id: 'achievements', label: 'Realizări', icon: '🏆' }
  ];

  const values = [
    {
      title: 'Inovație',
      description: 'Caut mereu să implementez tehnologii noi și să găsesc soluții creative la provocări complexe.',
      icon: '🚀'
    },
    {
      title: 'Calitate',
      description: 'Fiecare linie de cod pe care o scriu este gandită pentru a fi eficientă, scalabilă și maintainabilă.',
      icon: '✨'
    },
    {
      title: 'Colaborare',
      description: 'Cred că cele mai bune produse se nasc din colaborarea strânsă între echipe diverse.',
      icon: '🤝'
    },
    {
      title: 'Învățare continuă',
      description: 'Tehnologia evoluează rapid, iar eu mă adaptez constant pentru a fi mereu la curent.',
      icon: '📚'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Despre mine
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Descoperiți povestea din spatele codului
          </p>
        </div>

        <div className="about-content">
          <div className={`about-tabs ${isVisible ? 'animate-fadeInLeft' : ''}`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className={`about-main ${isVisible ? 'animate-fadeInRight' : ''}`}>
            {activeTab === 'story' && (
              <div className="tab-content story-content">
                <div className="story-text">
                  <p>
                    Sunt un dezvoltator web pasionat cu peste 3 ani de experiență în crearea de aplicații web moderne și interactive. Călătoria mea în tehnologie a început în facultate, unde am descoperit magia programării.
                  </p>
                  <p>
                    De-a lungul anilor, am lucrat cu diverse tehnologii și am contribuit la proiecte de diferite mărimi - de la startup-uri locale la corporații. Fiecare proiect m-a învățat ceva nou și m-a ajutat să îmi perfecționez abilitățile.
                  </p>
                  <p>
                    Ceea ce mă motivează cel mai mult este să creez experiențe digitale care nu doar funcționează perfect, ci și inspiră și aduc valoare utilizatorilor. Combinez expertiza tehnică cu o înțelegere profundă a designului pentru a livra soluții complete.
                  </p>
                </div>
                <div className="story-stats">
                  <div className="stat-item">
                    <div className="stat-number">3+</div>
                    <div className="stat-label">Ani experiență</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">8+</div>
                    <div className="stat-label">Tehnologii utilizate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">3+</div>
                    <div className="stat-label">Proiecte personale finalizate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">300+</div>
                    <div className="stat-label">Taskuri în echipă</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="tab-content values-content">
                <div className="values-grid">
                  {values.map((value, index) => (
                    <div key={index} className="value-card">
                      <div className="value-icon">{value.icon}</div>
                      <h3 className="value-title">{value.title}</h3>
                      <p className="value-description">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="tab-content achievements-content">
                <div className="achievements-list">
                  {mockData.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <div className="achievement-year">{achievement.year}</div>
                      <div className="achievement-content">
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p className="achievement-org">{achievement.organization}</p>
                        <p className="achievement-description">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          min-height: 100vh;
          padding: 100px 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
        }
        
        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="2" height="2" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.5" fill="rgba(0,0,0,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.5;
        }
        
        .about-container {
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
          color: #2d3748;
          margin-bottom: 20px;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #868F96  , #596164);
          border-radius: 2px;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #4a5568;
          opacity: 0.8;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .about-tabs {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .tab-button {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px 25px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
          text-align: left;
        }
        
        .tab-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateX(5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .tab-button.active {
          background: linear-gradient(135deg, #868F96  , #596164);
          color: white;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }
        
        .tab-icon {
          font-size: 20px;
        }
        
        .tab-label {
          font-weight: 600;
        }
        
        .about-main {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          padding: 40px;
          min-height: 500px;
        }
        
        .tab-content {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .story-content .story-text {
          margin-bottom: 40px;
        }
        
        .story-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 20px;
        }
        
        .story-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        
        .stat-item {
          text-align: center;
          padding: 18px;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 15px;
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #667eea;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #4a5568;
          font-weight: 600;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        
        .value-card {
          padding: 30px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.8);
        }
        
        .value-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .value-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
        }
        
        .value-description {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
        }
        
        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .achievement-item {
          display: flex;
          gap: 30px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 15px;
          border-left: 4px solid #667eea;
          transition: all 0.3s ease;
        }
        
        .achievement-item:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .achievement-year {
          font-size: 1.5rem;
          font-weight: 800;
          color: #667eea;
          min-width: 80px;
        }
        
        .achievement-content {
          flex: 1;
        }
        
        .achievement-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 5px;
        }
        
        .achievement-org {
          font-size: 1rem;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .achievement-description {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .about-tabs {
            flex-direction: row;
            overflow-x: auto;
            gap: 10px;
          }
          
          .tab-button {
            flex: none;
            min-width: 150px;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .story-stats {
            grid-template-columns: 1fr;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .achievement-item {
            flex-direction: column;
            gap: 15px;
          }
          
          .achievement-year {
            min-width: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;