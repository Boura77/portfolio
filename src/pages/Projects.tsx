import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'BTC Whale Movement Tracker',
      description: 'Tracks whale movements, presents on a frontend dashboard, sends message on Telegram. Real-time monitoring of large Bitcoin transactions with automated alerting system.',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Python 3.10',
        'FastAPI',
        'Uvicorn',
        'PostgreSQL 15',
        'Docker',
        'Kubernetes',
        'Oracle Cloud',
        'Blockchain.com API',
        'CoinGecko API',
        'Telegram API'
      ],
      githubUrl: 'https://github.com/Boura77/btc-whale-tracker', // Replace with actual URL
    },
    {
      id: 2,
      title: 'Football Match Prediction Engine',
      description: 'An AI-powered football match prediction system for Premier League. Built to demonstrate proficiency in prompt engineering, prompt evaluation, MCP (Model Context Protocol), RAG (Retrieval Augmented Generation), and agent workflows.',
      technologies: [
        'Python 3.11+',
        'Claude API (Anthropic)',
        'ChromaDB',
        'Football-Data.org API',
        'Streamlit',
        'SQLite'
      ],
      githubUrl: 'https://github.com/Boura77/Football-Match-Prediction-System-RAG-AI', // Replace with actual URL
    },
    {
      id: 3,
      title: 'Custom Wordle Application',
      description: 'Built a Wordle web application to deep dive into the logic and write it and customize it on my own. Features custom word lists, difficulty levels, and game statistics tracking.',
      technologies: [
        'Python',
        'Streamlit'
      ],
      githubUrl: 'https://github.com/Boura77/my-wordle', // Replace with actual URL
    },
    {
      id: 4,
      title: 'UAE F&B Company Web Scraper',
      description: 'Scrapes data of all Food & Beverage companies in UAE and stores in Excel. Automated data collection tool for market research and business intelligence.',
      technologies: [
        'Python',
        'BeautifulSoup',
        'Selenium',
        'Insomnia',
        'Excel (openpyxl/pandas)'
      ],
      githubUrl: 'https://github.com/Boura77/Webscraping-FNB-companies-in-UAE', // Replace with actual URL
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-content">
        <h1 className="page-title">
          My <span className="highlight">Projects</span>
        </h1>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack-section">
                <span className="tech-label">Technologies:</span>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;