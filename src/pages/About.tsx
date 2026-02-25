import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = {
    languages: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',needsWhiteBg: false },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',needsWhiteBg: false },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',needsWhiteBg: false },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',needsWhiteBg: false },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',needsWhiteBg: false },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',needsWhiteBg: false },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',needsWhiteBg: false },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',needsWhiteBg: true },
    ],
    frameworks: [
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', needsWhiteBg: true },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', needsWhiteBg: true },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', needsWhiteBg: true },
      { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',needsWhiteBg: false },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',needsWhiteBg: false },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',needsWhiteBg: true },
      { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',needsWhiteBg: false },
      { name: 'BeautifulSoup', icon: 'https://scribbleghost.net/wp-content/uploads/2020/07/Beautiful-Soup-4-Pot-1.svg',needsWhiteBg: false }, 
    ],
    databases: [
      { name: 'MSSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',needsWhiteBg: false },
      { name: 'ChromaDB', icon: 'https://files.brandlogos.net/svg/aqOfS52Rxn/chroma-logo-brandlogos.net_k7cayrasq.svg',needsWhiteBg: false }, 
    ],
    cloud: [
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',needsWhiteBg: false },
      { name: 'Manhattan SCALE', icon: 'https://cdn.worldvectorlogo.com/logos/manhattan-associates.svg',needsWhiteBg: false },
      { name: 'Boomi Atom', icon: 'https://cdn.worldvectorlogo.com/logos/boomi-1.svg',needsWhiteBg: false },
    ],
    tools: [
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',needsWhiteBg: false },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',needsWhiteBg: false },
      { name: 'Insomnia', icon: 'https://www.svgrepo.com/show/353904/insomnia.svg',needsWhiteBg: false },
      { name: 'PowerBI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg', needsWhiteBg: true },
      { name: 'Chrome', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',needsWhiteBg: false },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',needsWhiteBg: false },
    ],
  };

  return (

    
    <div className="about-page">
      <div className="about-content">
        
        <section className="about-section">
          <div className="bio-section">
          <h1 className="section-title">About Me</h1>
          <div className="about-text">
            <p>
              <p>
  Born and raised in <span className="highlight-word">Mumbai and Navi Mumbai</span>, I completed my early education in India. 
  I relocated to <span className="highlight-word">Dubai</span> to pursue my Bachelor's in <span className="highlight-word">Computer Science and Engineering</span> at
   <span className="highlight-word"> BITS Pilani</span>, and have been building my career here ever since.
</p>
             </p>
             <p>
I have experience in <span className="highlight-word">Data Engineering, full-stack development, maintaining enterprise software and AI</span>. I have worked on <span className="highlight-word">building web applications, automating data pipelines, creating dashboards, and developing AI-powered solutions</span>.
Outside work I enjoy playing padel, watching FC Barcelona win and regularly keep up with all sports and the global financial market.
            </p>
            </div>
          </div>
        </section>
        <section className="skills-section">
          <h2 className="section-title">
            Professional <span className="highlight">Skillset</span>
          </h2>

          <div className="skills-category">
            <h3 className="category-title">Languages</h3>
            <div className="skills-grid">
              {skills.languages.map((skill) => (
                <div key={skill.name} className="skill-badge">
  <img 
    src={skill.icon} 
    alt={skill.name}
    className={`skill-icon-img ${skill.needsWhiteBg ? 'white-bg' : ''}`}
  />
  {skill.name}
</div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Frameworks & Libraries</h3>
            <div className="skills-grid">
              {skills.frameworks.map((skill) => (
                <div key={skill.name} className="skill-badge">
  <img 
    src={skill.icon} 
    alt={skill.name}
    className={`skill-icon-img ${skill.needsWhiteBg ? 'white-bg' : ''}`}
  />
  {skill.name}
</div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Databases</h3>
            <div className="skills-grid">
              {skills.databases.map((skill) => (
                <div key={skill.name} className="skill-badge">
  <img 
    src={skill.icon} 
    alt={skill.name}
    className={`skill-icon-img ${skill.needsWhiteBg ? 'white-bg' : ''}`}
  />
  {skill.name}
</div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Cloud & Platforms</h3>
            <div className="skills-grid">
              {skills.cloud.map((skill) => (
                <div key={skill.name} className="skill-badge">
  <img 
    src={skill.icon} 
    alt={skill.name}
    className={`skill-icon-img ${skill.needsWhiteBg ? 'white-bg' : ''}`}
  />
  {skill.name}
</div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Tools</h3>
            <div className="skills-grid">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="skill-badge">
  <img 
  src={skill.icon} 
  alt={skill.name}
  className={`skill-icon-img ${skill.needsWhiteBg ? 'white-bg' : ''}`}
/>
  {skill.name}
</div>
              ))}
            </div>
          </div>
        </section>
        </div>
      </div>
  );
};

export default About;
