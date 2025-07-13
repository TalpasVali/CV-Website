import { useState, useEffect } from "react";
import { mockData } from "../data/mockData";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
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

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (index) => {
    setActiveProject(index);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2
            className={`section-title ${isVisible ? "animate-fadeInUp" : ""}`}
          >
            Proiecte
          </h2>
          <p
            className={`section-subtitle ${
              isVisible ? "animate-fadeInUp" : ""
            }`}
          >
            Lucrări care demonstrează expertiza mea tehnică
          </p>
        </div>

        <div className="projects-content">
          <div
            className={`projects-grid ${isVisible ? "animate-fadeInUp" : ""}`}
          >
            {mockData.projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${
                  activeProject === index ? "active" : ""
                }`}
                onClick={() => handleProjectClick(index)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    {project.image ? (
                      <img
                        className="project-thumbnail"
                        srcSet={`${project.image} 2x, ${project.image} 1x`}
                        src={project.image}
                        alt={project.title}
                      />
                    ) : (
                      <div className="placeholder-icon">🖥️</div>
                    )}
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <div className="overlay-title">{project.title}</div>
                      <div className="overlay-description">
                        {project.description}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-status">
                      <span
                        className={`status-badge ${
                          project.status === "Completed"
                            ? "completed"
                            : "progress"
                        }`}
                      >
                        {project.status === "Completed"
                          ? "✅ Finalizat"
                          : "🚧 În progres"}
                      </span>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4 className="features-title">🎯 Funcționalități:</h4>
                    <ul className="features-list">
                      {project.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-bullet">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.liveUrl}
                      className="project-link live-link"
                    >
                      <span className="link-icon">🔗</span>
                      <span>Vezi demo</span>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.githubUrl}
                      className="project-link github-link"
                    >
                      <span className="link-icon">📂</span>
                      <span>Cod sursă</span>
                    </a>
                  </div>
                </div>

                <div className="project-glow"></div>
              </div>
            ))}
          </div>

          <div
            className={`project-details ${isVisible ? "animate-fadeInUp" : ""}`}
          >
            <div className="details-card">
              <div className="details-header">
                <h3 className="details-title">
                  {mockData.projects[activeProject].title}
                </h3>
                <div className="details-links">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={mockData.projects[activeProject].liveUrl}
                    className="details-link"
                  >
                    <span className="link-icon">🚀</span>
                    Demo Live
                  </a>
                  <a
                    target="_blank"
                    href={mockData.projects[activeProject].githubUrl}
                    className="details-link"
                  >
                    <span className="link-icon">⚡</span>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="details-content">
                <p className="details-description">
                  {mockData.projects[activeProject].description}
                </p>

                <div className="details-features">
                  <h4 className="section-title">🎯 Toate funcționalitățile:</h4>
                  <div className="features-grid">
                    {mockData.projects[activeProject].features.map(
                      (feature, index) => (
                        <div key={index} className="feature-badge">
                          <span className="feature-icon">✨</span>
                          <span className="feature-text">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="details-tech">
                  <h4 className="section-title">🛠️ Stack tehnologic:</h4>
                  <div className="tech-grid">
                    {mockData.projects[activeProject].technologies.map(
                      (tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          min-height: 100vh;
          padding: 100px 0;
          background: linear-gradient(135deg, #868f96, #596164 100%);
          position: relative;
        }

        .projects-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.3;
        }

        .projects-container {
          max-width: 1400px;
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

        .projects-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 40px;
          align-items: start;
        }

        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .project-card.active {
          border: 2px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          transition: height 0.5s ease;
        }
        .project-card:hover .project-image {
          height: 400px;
        }
        .project-thumbnail {
          width: 100%;
          height: auto;
          transition: transform 0.9s ease;
        }

        // .project-card:hover .project-thumbnail {
        
        // }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #868f96, #596164);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 4rem;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: white;
          padding: 20px;
        }

        .overlay-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .overlay-description {
          font-size: 1rem;
          opacity: 0.9;
          line-height: 1.4;
        }

        .project-content {
          padding: 30px;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
          gap: 15px;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0;
          flex: 1;
        }

        .project-status {
          flex-shrink: 0;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .status-badge.completed {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .status-badge.progress {
          background: rgba(249, 115, 22, 0.1);
          color: #f97316;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }

        .project-description {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-features {
          margin-bottom: 20px;
        }

        .features-title {
          font-size: 1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 10px;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #4a5568;
          margin-bottom: 5px;
        }

        .feature-bullet {
          color: #667eea;
          font-weight: bold;
        }

        .more-features {
          color: #667eea;
          font-weight: 600;
        }

        .project-tech {
          margin-bottom: 20px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-tag {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .more-tech {
          background: rgba(102, 126, 234, 0.2);
        }

        .project-links {
          display: flex;
          gap: 10px;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 15px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .live-link {
          background: linear-gradient(135deg, #868f96, #596164);
          color: white;
        }

        .github-link {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border: 1px solid rgba(102, 126, 234, 0.3);
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .project-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            rgba(102, 126, 234, 0.1) 0%,
            transparent 70%
          );
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-glow {
          opacity: 1;
        }

        .project-details {
          position: sticky;
          top: 100px;
        }

        .details-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .details-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
          gap: 15px;
        }

        .details-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d3748;
          margin: 0;
          flex: 1;
        }

        .details-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .details-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 15px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          background: linear-gradient(135deg, #868f96, #596164);
          color: white;
          transition: all 0.3s ease;
        }

        .details-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .details-description {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .details-features,
        .details-tech {
          margin-bottom: 25px;
        }

        .details-features .section-title,
        .details-tech .section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 15px;
        }

        .features-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .feature-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          background: rgba(102, 126, 234, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(102, 126, 234, 0.1);
        }

        .feature-icon {
          font-size: 1rem;
        }

        .feature-text {
          font-size: 0.9rem;
          color: #4a5568;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          background: linear-gradient(135deg, #868f96, #596164);
          color: white;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .projects-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .project-details {
            position: static;
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .project-content {
            padding: 20px;
          }

          .project-header {
            flex-direction: column;
            gap: 10px;
          }

          .project-links {
            flex-direction: column;
          }

          .details-header {
            flex-direction: column;
            gap: 15px;
          }

          .details-links {
            flex-direction: row;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
