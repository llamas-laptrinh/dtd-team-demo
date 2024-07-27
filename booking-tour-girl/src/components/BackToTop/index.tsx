import React, { useEffect, useState } from 'react';
import './styles.css';
import airplaneIcon from '../../assets/icons/backtotop.png'; 

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <div className="back-to-top-button" onClick={scrollToTop}>
          <img src={airplaneIcon} alt="back to top" className="back-to-top-icon" />
        </div>
      )}
    </div>
  );
};

export default BackToTopButton;
