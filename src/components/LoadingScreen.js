import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Inițializare...');
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const texts = [
          'Inițializare...',
          'Încărcare componente...',
          'Pregătire animații...',
          'Aproape gata...'
        ];
        const currentIndex = texts.indexOf(prev);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-logo">
          <div className="logo-circle animate-pulse">
            <div className="logo-inner animate-rotate">
              <div className="logo-dot"></div>
            </div>
          </div>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {progress}%
          </div>
        </div>
        
        <div className="loading-text animate-fadeInUp">
          {loadingText}
        </div>
        
        <div className="loading-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>
      
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #868F96  , #596164 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          overflow: hidden;
        }
        
        .loading-screen::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        .loading-container {
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .loading-logo {
          margin-bottom: 40px;
        }
        
        .logo-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .logo-inner {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(45deg, #868F96  , #596164);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .logo-dot {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        .loading-progress {
          margin-bottom: 30px;
        }
        
        .progress-bar {
          width: 300px;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          overflow: hidden;
          margin: 0 auto 10px;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #868F96, #596164);
          border-radius: 10px;
          transition: width 0.3s ease;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
        }
        
        .progress-text {
          color: white;
          font-size: 18px;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .loading-text {
          color: white;
          font-size: 16px;
          margin-bottom: 40px;
          opacity: 0.8;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
          opacity: 0.6;
        }
        
        .dot-1 {
          animation: dotBounce 1.4s infinite ease-in-out both;
        }
        
        .dot-2 {
          animation: dotBounce 1.4s infinite ease-in-out both;
          animation-delay: -0.32s;
        }
        
        .dot-3 {
          animation: dotBounce 1.4s infinite ease-in-out both;
          animation-delay: -0.16s;
        }
        
        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .progress-bar {
            width: 250px;
          }
          
          .logo-circle {
            width: 80px;
            height: 80px;
          }
          
          .logo-inner {
            width: 50px;
            height: 50px;
          }
          
          .logo-dot {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;