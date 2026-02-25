export const generateStars = (container: HTMLElement) => {
  const numberOfStars = 150;

  container.innerHTML = '';
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = Math.random() > 0.5 ? 'star' : 'star small';

    star.style.left = `${Math.random() * width}px`;
    star.style.top = `${Math.random() * height}px`;

    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    
    container.appendChild(star);
  }
};