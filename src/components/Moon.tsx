import React, { useState } from 'react';
import './Moon.css';

const Moon: React.FC = () => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentRotation(prev => prev + 180);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  return (
    <div className="moon-flip-container" onClick={handleClick}>
      <div 
        className="moon-flip-inner"
        style={{ transform: `rotateY(${currentRotation}deg)` }}
      >
        <div className="moon-flip-front">
          <div className="flat-moon">
            <div className="crater crater-1"></div>
            <div className="crater crater-2"></div>
            <div className="crater crater-3"></div>
            <div className="crater crater-4"></div>
            <div className="crater crater-5"></div>
            <div className="crater crater-6"></div>
            <div className="crater crater-7"></div>
            <div className="crater crater-8"></div>
            <div className="crater crater-9"></div>
            <div className="crater crater-10"></div>
            <div className="crater crater-small crater-11"></div>
            <div className="crater crater-small crater-12"></div>
            <div className="crater crater-small crater-13"></div>
          </div>
        </div>
        
        <div className="moon-flip-back">
          <div className="quote-text">Think<br/>Different</div>
          <div className="quote-author">Steve Jobs</div>
        </div>
      </div>
    </div>
  );
};

export default Moon;