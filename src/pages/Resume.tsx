import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-page">
      <div className="resume-images">
          <img
            src= "resume-pages/resume.png"
            alt="Resume"
            className="resume-page-image"
            loading="lazy"
          />
      </div>

      <div className="download-section">
        <a 
          href="/RESUME(NikhilBoura).pdf" 
          download="Nikhil_Boura_Resume.pdf"
          className="download-button"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;