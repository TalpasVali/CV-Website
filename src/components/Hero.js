import { useState, useEffect } from "react";
import { mockData } from "../data/mockData";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Full Stack Developer",
    "Frontend Specialist",
    "Creative Coder",
  ];

  useEffect(() => {
    let timeout;
    const currentWord = roles[currentRole];

    if (isTyping) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="background-animation">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
          <div className="floating-shape shape-5"></div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting animate-fadeInUp">
              <span className="greeting-text">Salut, sunt </span>
              <div className="greeting-wave">👋</div>
            </div>

            <h1 className="hero-name animate-fadeInUp">
              {mockData.personal.name}
            </h1>

            <div className="hero-role animate-fadeInUp">
              <span className="role-prefix">și sunt </span>
              <br />
              <span className="role-text">
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </div>

            <p className="hero-description animate-fadeInUp">
              {mockData.personal.bio}
            </p>

            <div className="hero-buttons animate-fadeInUp">
              <button onClick={scrollToContact} className="btn btn-primary">
                <span>Să colaborăm</span>
                <div className="btn-shine"></div>
              </button>
              <button onClick={scrollToWork} className="btn btn-secondary">
                <span>Vezi lucrările</span>
                <div className="btn-shine"></div>
              </button>
            </div>

            <div className="hero-social animate-fadeInUp">
              <a
                href={`mailto:${mockData.personal.email}`}
                className="social-link"
              >
                <div className="social-icon">✉️</div>
              </a>
              <a
                href={`https://${mockData.personal.linkedin}`}
                className="social-link"
              >
                <div className="social-icon">💼</div>
              </a>
              <a
                href={`https://${mockData.personal.github}`}
                className="social-link"
              >
                <div className="social-icon">🔗</div>
              </a>
            </div>
          </div>

          <div className="hero-image animate-fadeInRight">
            <div className="image-container">
              <div className="image-glow"></div>
              <div className="profile-image">
                <div className="image-placeholder">
                  <div className="placeholder-icon">👨‍🎓</div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="float-element element-1">⚡</div>
                <div className="float-element element-2">🎨</div>
                <div className="float-element element-3">💻</div>
                <div className="float-element element-4">🚀</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="mouse-wheel"></div>
          </div>
          <span className="scroll-text">Scroll pentru a explora</span>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #868f96 0%, #596164 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .background-animation {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          animation: float 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 20%;
          right: 15%;
          animation-delay: -2s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 5%;
          animation-delay: -4s;
        }

        .shape-4 {
          width: 120px;
          height: 120px;
          bottom: 30%;
          right: 10%;
          animation-delay: -6s;
        }

        .shape-5 {
          width: 60px;
          height: 60px;
          top: 50%;
          left: 50%;
          animation-delay: -8s;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 80vh;
        }

        .hero-text {
          color: white;
        }

        .hero-greeting {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 500;
          opacity: 0.9;
        }

        .greeting-wave {
          font-size: 24px;
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }

        .hero-name {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 20px;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          line-height: 1.1;
        }

        .hero-role {
          font-size: 1.5rem;
          margin-bottom: 30px;
          height: 50px;
          display: flex;
          align-items: center;
        }

        .role-prefix {
          opacity: 0.8;
          font-weight: 400;
        }

        .role-text {
          margin-left: 10px;
          font-weight: 600;
          background: linear-gradient(45deg, #ffffff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          min-width: 200px;
        }

        .typing-cursor {
          color: white;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.9;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
        }

        .btn {
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: none;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary {
          background: linear-gradient(45deg, #868f96, #596164);
          color: white;
          box-shadow: 0 4px 15px rgba(29, 33, 53, 0.6);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(29, 33, 53, 0.6);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .btn:hover .btn-shine {
          left: 100%;
        }

        .hero-social {
          display: flex;
          gap: 20px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .social-icon {
          font-size: 20px;
        }

        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(102, 126, 234, 0.3) 0%,
            transparent 70%
          );
          border-radius: 50%;
          animation: pulse 4s ease-in-out infinite;
        }

        .profile-image {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(45deg, #868f96, #596164);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          margin: 0 auto;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(45deg, #868f96, #596164);
        }

        .placeholder-icon {
          font-size: 120px;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .float-element {
          position: absolute;
          font-size: 24px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 6s ease-in-out infinite;
        }

        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          top: 20%;
          right: 10%;
          animation-delay: -1.5s;
        }

        .element-3 {
          bottom: 20%;
          left: 5%;
          animation-delay: -3s;
        }

        .element-4 {
          bottom: 10%;
          right: 15%;
          animation-delay: -4.5s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: white;
          opacity: 0.7;
        }

        .scroll-mouse {
          width: 25px;
          height: 40px;
          border: 2px solid white;
          border-radius: 15px;
          position: relative;
          animation: bounce 2s infinite;
        }

        .mouse-wheel {
          width: 3px;
          height: 10px;
          background: white;
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% {
            opacity: 0;
            top: 8px;
          }
          50% {
            opacity: 1;
            top: 15px;
          }
          100% {
            opacity: 0;
            top: 22px;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .scroll-text {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-name {
            font-size: 2.5rem;
          }

          .hero-role {
            font-size: 1.2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }

          .image-container {
            width: 300px;
            height: 300px;
          }

          .profile-image {
            width: 250px;
            height: 250px;
          }

          .placeholder-icon {
            font-size: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
