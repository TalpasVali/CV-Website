import React, { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: mockData.personal.email,
      link: `mailto:${mockData.personal.email}`
    },
    {
      icon: '📱',
      label: 'Telefon',
      value: mockData.personal.phone,
      link: `tel:${mockData.personal.phone}`
    },
    {
      icon: '📍',
      label: 'Locație',
      value: mockData.personal.location,
      link: '#'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: `https://${mockData.personal.linkedin}`
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Să colaborăm
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Hai să discutăm despre următorul tău proiect
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'animate-fadeInLeft' : ''}`}>
            <div className="info-header">
              <h3 className="info-title">Informații de contact</h3>
              <p className="info-description">
                Sunt mereu deschisă la noi oportunități și colaborări. 
                Nu ezita să mă contactezi!
              </p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <div className="method-label">{method.label}</div>
                    <div className="method-value">{method.value}</div>
                  </div>
                  <div className="method-arrow">→</div>
                </a>
              ))}
            </div>

            {/* <div className="social-links">
              <h4 className="social-title">Urmărește-mă pe</h4>
              <div className="social-grid">
                <a href={`https://${mockData.personal.linkedin}`} className="social-link linkedin">
                  <div className="social-icon">💼</div>
                  <span>LinkedIn</span>
                </a>
                <a href={`https://${mockData.personal.github}`} className="social-link github">
                  <div className="social-icon">🔗</div>
                  <span>GitHub</span>
                </a>
                <a href={`https://${mockData.personal.website}`} className="social-link website">
                  <div className="social-icon">🌐</div>
                  <span>Website</span>
                </a>
              </div>
            </div> */}
          </div>

          <div className={`contact-form-container ${isVisible ? 'animate-fadeInRight' : ''}`}>
            <div className="form-header">
              <h3 className="form-title">Trimite un mesaj</h3>
              <p className="form-description">
                Completează formularul și îți voi răspunde în cel mai scurt timp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nume complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Introduceti numele dvs."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Adresa de email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="email@exemplu.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subiect
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Despre ce vrei să discutăm?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Spune-mi mai multe despre proiectul tău..."
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Se trimite...</span>
                  </>
                ) : (
                  <>
                    <span>Trimite mesajul</span>
                    <div className="button-icon">📤</div>
                  </>
                )}
              </button>

              {showSuccess && (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <div className="success-text">
                    <strong>Mesaj trimis cu succes!</strong>
                    <p>Îți voi răspunde în cel mai scurt timp.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 {mockData.personal.name}. Toate drepturile rezervate.</p>
            <p>Creat cu ❤️ în {mockData.personal.location}</p>
          </div>
          <div className="footer-links">
            <a href="#hero" className="footer-link">Acasă</a>
            <a href="#about" className="footer-link">Despre</a>
            <a href="#projects" className="footer-link">Proiecte</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          padding: 100px 0 0;
          background: linear-gradient(135deg, #868F96 0%, #596164 100%);
          position: relative;
        }
        
        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="contact-pattern" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.1)"/><path d="M0 25h50M25 0v50" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23contact-pattern)"/></svg>');
          opacity: 0.3;
        }
        
        .contact-container {
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
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .contact-info {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          padding: 40px;
        }
        
        .info-header {
          margin-bottom: 40px;
        }
        
        .info-title {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .info-description {
          font-size: 1.1rem;
          color: white;
          opacity: 0.9;
          line-height: 1.6;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 40px;
        }
        
        .contact-method {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
        }
        
        .contact-method:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(10px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .method-icon {
          font-size: 1.5rem;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .method-content {
          flex: 1;
        }
        
        .method-label {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-bottom: 2px;
        }
        
        .method-value {
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .method-arrow {
          font-size: 1.2rem;
          opacity: 0.7;
          transition: transform 0.3s ease;
        }
        
        .contact-method:hover .method-arrow {
          transform: translateX(5px);
        }
        
        .social-links {
          margin-top: 40px;
        }
        
        .social-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        
        .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .social-icon {
          font-size: 1.5rem;
        }
        
        .contact-form-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .form-header {
          margin-bottom: 30px;
        }
        
        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 10px;
        }
        
        .form-description {
          font-size: 1rem;
          color: #4a5568;
          opacity: 0.8;
          line-height: 1.5;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .form-input,
        .form-textarea {
          padding: 15px;
          border: 2px solid rgba(102, 126, 234, 0.2);
          border-radius: 12px;
          font-size: 1rem;
          background: white;
          color: #2d3748;
          transition: all 0.3s ease;
          resize: vertical;
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-textarea {
          min-height: 120px;
          font-family: inherit;
        }
        
        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 30px;
          background: linear-gradient(135deg, #868F96, #596164);
          color: white;
          border: none;
          border-radius: 15px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        
        .submit-button:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
        
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .success-message {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 15px;
          margin-top: 20px;
          animation: slideIn 0.5s ease-out;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .success-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .success-text {
          flex: 1;
        }
        
        .success-text strong {
          color: #22c55e;
          font-weight: 700;
        }
        
        .success-text p {
          color: #4a5568;
          margin: 5px 0 0;
          font-size: 0.9rem;
        }
        
        .site-footer {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px 0;
          margin-top: 80px;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }
        
        .footer-text {
          color: white;
          opacity: 0.8;
        }
        
        .footer-text p {
          margin: 0;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        
        .footer-links {
          display: flex;
          gap: 25px;
        }
        
        .footer-link {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          opacity: 1;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .contact-info,
          .contact-form-container {
            padding: 30px 20px;
          }
          
          .social-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;