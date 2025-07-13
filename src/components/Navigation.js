import React, { useState, useEffect } from 'react';

const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Acasă' },
    { id: 'about', label: 'Despre' },
    { id: 'experience', label: 'Experiență' },
    { id: 'education', label: 'Educație' },
    { id: 'skills', label: 'Competențe' },
    { id: 'projects', label: 'Proiecte' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-logo">
              <div className="logo-circle">
                <div className="logo-inner">TGV</div>
              </div>
            </div>
            <span className="brand-text">Talpaș Gabriel-Valeriu</span>
          </div>
          
          <div className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        
        <div className="scroll-indicator">
          <div 
            className="scroll-progress"
            style={{
              width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
            }}
          ></div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .navigation.scrolled {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .brand-logo {
          position: relative;
        }
        
        .logo-circle {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #868F96  , #596164);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
        }
        
        .logo-circle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }
        
        .logo-inner {
          color: white;
          font-weight: 700;
          font-size: 18px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .brand-text {
          color: white;
          font-size: 18px;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .nav-menu {
          display: flex;
          gap: 30px;
        }
        
        .nav-link {
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 10px 15px;
          border-radius: 25px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .nav-link:hover::before {
          left: 100%;
        }
        
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .nav-link.active {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }
        
        .hamburger {
          display: flex;
          flex-direction: column;
          width: 25px;
          height: 20px;
          position: relative;
        }
        
        .hamburger span {
          width: 100%;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        
        .hamburger span:nth-child(1) {
          margin-bottom: 4px;
        }
        
        .hamburger span:nth-child(2) {
          margin-bottom: 4px;
        }
        
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
        }
        
        .scroll-progress {
          height: 100%;
          background: linear-gradient(90deg, #868F96, #596164);
          transition: width 0.3s ease;
        }
        
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          height: calc(100vh - 80px);
          background: rgba(102, 126, 234, 0.95);
          backdrop-filter: blur(20px);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 999;
        }
        
        .mobile-menu.open {
          transform: translateX(0);
        }
        
        .mobile-menu-content {
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .mobile-nav-link {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          padding: 15px;
          text-align: left;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }
        
        .mobile-nav-link.active {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
          }
          
          .brand-text {
            font-size: 16px;
          }
          
          .nav-container {
            padding: 0 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;