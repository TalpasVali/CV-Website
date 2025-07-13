import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills bars after component becomes visible
          setTimeout(() => {
            setAnimatedSkills(mockData.skills.map(skill => skill.name));
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['all', ...new Set(mockData.skills.map(skill => skill.category))];
  const filteredSkills = activeCategory === 'all' 
    ? mockData.skills 
    : mockData.skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Competențe
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Tehnologii și instrumente cu care lucrez
          </p>
        </div>

        <div className="skills-content">
          <div className={`skills-categories ${isVisible ? 'animate-fadeInUp' : ''}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              >
                {category === 'all' ? 'Toate' : category}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card ${isVisible ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-category">{skill.category}</div>
                  </div>
                  <div className="skill-percentage">
                    {skill.level}%
                  </div>
                </div>
                
                <div className="skill-bar">
                  <div className="skill-progress">
                    <div 
                      className="skill-fill"
                      style={{ 
                        width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                        transition: 'width 2s ease-out'
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="skill-glow"></div>
              </div>
            ))}
          </div>

          <div className={`skills-summary ${isVisible ? 'animate-fadeInUp' : ''}`}>
            <div className="summary-card">
              <div className="summary-icon">🚀</div>
              <h3 className="summary-title">Dezvoltare Continuă</h3>
              <p className="summary-description">
                Învăț constant tehnologii noi și îmi perfecționez abilitățile existente. 
                Particip la cursuri online, conferințe și proiecte personale pentru a rămâne 
                la curent cu ultimele tendințe din industrie.
              </p>
            </div>
            
            <div className="summary-card">
              <div className="summary-icon">🎯</div>
              <h3 className="summary-title">Expertiza Practică</h3>
              <p className="summary-description">
                Toate competențele listate au fost dezvoltate prin proiecte reale și experiență 
                profesională. Fiecare tehnologie a fost folosită în contexte comerciale 
                cu rezultate măsurabile.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          min-height: 100vh;
          padding: 100px 0;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          position: relative;
        }
        
        .skills-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M10 10h20v20h-20z M30 30h20v20h-20z M70 10h20v20h-20z M50 50h20v20h-20z" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="40" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="60" cy="60" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23circuit)"/></svg>');
          opacity: 0.2;
        }
        
        .skills-container {
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
          opacity: 0.9;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .skills-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        
        .skills-categories {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .category-btn {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: capitalize;
        }
        
        .category-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }
        
        .category-btn.active {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }
        
        .skill-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          padding: 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #4facfe, #00f2fe);
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
        }
        
        .skill-info {
          flex: 1;
        }
        
        .skill-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0 0 5px 0;
        }
        
        .skill-category {
          font-size: 0.85rem;
          color: #4facfe;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .skill-percentage {
          font-size: 1.5rem;
          font-weight: 800;
          color: #4facfe;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .skill-bar {
          margin-bottom: 10px;
        }
        
        .skill-progress {
          width: 100%;
          height: 8px;
          background: rgba(79, 172, 254, 0.2);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        
        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, #4facfe, #00f2fe);
          border-radius: 10px;
          position: relative;
          box-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
        }
        
        .skill-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: -50px;
          width: 50px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { left: -50px; }
          100% { left: 100%; }
        }
        
        .skill-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .skill-card:hover .skill-glow {
          opacity: 1;
        }
        
        .skills-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .summary-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .summary-card:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .summary-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }
        
        .summary-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .summary-description {
          font-size: 1rem;
          color: white;
          opacity: 0.9;
          line-height: 1.6;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .skill-card {
            padding: 20px;
          }
          
          .skills-categories {
            gap: 5px;
          }
          
          .category-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .summary-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;