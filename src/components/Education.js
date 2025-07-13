import React, { useState, useEffect } from "react";
import { mockData } from "../data/mockData";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    const element = document.getElementById("education");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <h2
            className={`section-title ${isVisible ? "animate-fadeInUp" : ""}`}
          >
            Educație
          </h2>
          <p
            className={`section-subtitle ${
              isVisible ? "animate-fadeInUp" : ""
            }`}
          >
            Fundația academică care a modelat cariera mea
          </p>
        </div>

        <div className="education-content">
          {mockData.education.map((edu, index) => (
            <div
              key={edu.id}
              className={`education-card ${
                isVisible ? "animate-fadeInUp" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="education-icon">🎓</div>

              <div className="education-info">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-period">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>

                <div className="education-institution">
                  <div className="institution-name">{edu.institution}</div>
                  <div className="institution-location">📍 {edu.location}</div>
                </div>

                <p className="education-description">{edu.description}</p>

                <div className="education-achievements">
                  <h4 className="achievements-title">🏆 Realizări:</h4>
                  <div className="achievements-grid">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="achievement-badge">
                        <div className="badge-icon">✨</div>
                        <span className="badge-text">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="education-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          min-height: 100vh;
          padding: 100px 0;
          background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
          position: relative;
        }

        .education-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><defs><pattern id="books" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="none"/><circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.08)"/><circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.08)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23books)"/></svg>');
          opacity: 0.4;
        }

        .education-container {
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

        .education-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .education-card {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 30px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .education-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #f093fb, #f5576c);
        }

        .education-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .education-icon {
          font-size: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          border-radius: 20px;
          width: 80px;
          height: 80px;
          box-shadow: 0 8px 25px rgba(240, 147, 251, 0.3);
          animation: float 6s ease-in-out infinite;
        }

        .education-info {
          flex: 1;
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .education-degree {
          font-size: 1.5rem;
          font-weight: 800;
          color: #2d3748;
          margin: 0;
        }

        .education-period {
          background: linear-gradient(135deg, #f093fb, #f5576c);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(240, 147, 251, 0.3);
        }

        .education-institution {
          margin-bottom: 20px;
        }

        .institution-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 5px;
        }

        .institution-location {
          font-size: 1rem;
          color: #4a5568;
          opacity: 0.8;
        }

        .education-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 25px;
        }

        .education-achievements {
          margin-top: 25px;
        }

        .achievements-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .achievement-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(240, 147, 251, 0.1);
          border: 1px solid rgba(240, 147, 251, 0.2);
          border-radius: 15px;
          padding: 12px 16px;
          transition: all 0.3s ease;
        }

        .achievement-badge:hover {
          background: rgba(240, 147, 251, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(240, 147, 251, 0.2);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .badge-text {
          font-size: 0.95rem;
          color: #4a5568;
          font-weight: 500;
        }

        .education-decoration {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          opacity: 0.1;
        }

        .circle-1 {
          width: 20px;
          height: 20px;
          top: 0;
          right: 0;
          animation: float 4s ease-in-out infinite;
        }

        .circle-2 {
          width: 15px;
          height: 15px;
          top: 25px;
          right: 15px;
          animation: float 4s ease-in-out infinite;
          animation-delay: -1.5s;
        }

        .circle-3 {
          width: 10px;
          height: 10px;
          top: 45px;
          right: 30px;
          animation: float 4s ease-in-out infinite;
          animation-delay: -3s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          .education-card {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 30px 20px;
          }

          .education-icon {
            width: 60px;
            height: 60px;
            font-size: 2.5rem;
            margin: 0 auto;
          }

          .education-header {
            flex-direction: column;
            gap: 15px;
          }

          .education-degree {
            font-size: 1.3rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .education-decoration {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
