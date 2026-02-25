import React from 'react';
import './Certifications.css';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'November 2025',
      url: 'https://learn.microsoft.com/en-us/users/nikhilboura-3687/transcript/7oj18tlg88roqjx',
    },
    {
      id: 2,
      name: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic',
      date: 'December 2025',
      url: 'https://verify.skilljar.com/c/znaiedib4emk',
    },
    {
      id: 3,
      name: 'Building with the Claude API',
      issuer: 'Anthropic',
      date: 'January 2026',
      url: 'https://verify.skilljar.com/c/nmo22m9xzcyx',
    },
    {
      id: 4,
      name: 'Data Analysis with Python And Pandas',
      issuer: 'Udemy',
      date: 'Aug 2022',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-106335a2-0a91-432d-8c9a-8b04a4268624.jpg?v=1',
    },
    {
      id: 5,
      name: ' The Complete Python MasterClass',
      issuer: 'Udemy',
      date: 'Aug 2021',
      url: 'https://www.udemy.com/certificate/UC-3a609afc-d50b-4cb9-8d9f-53e08e186250/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email',
    },
  ];

  return (
    <div className="certifications-page">
      <div className="certifications-content">
        <h1 className="page-title">Certifications</h1>
        <p className="page-subtitle">
          Professional certifications and achievements
        </p>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-badge">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              <a 
    href={cert.url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="cert-link"
  >
    View Certificate →
  </a>
            </div>
            
          ))}

        </div>
      </div>
    </div>
  );
};

export default Certifications;
