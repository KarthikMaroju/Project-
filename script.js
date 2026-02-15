// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Enhanced animation for cards on scroll
  const cards = document.querySelectorAll('.card');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'perspective(3000px) rotateY(0deg) rotateX(0deg) translateY(0) translateZ(0)';
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = 'perspective(3000px) rotateY(15deg) rotateX(10deg) translateY(50px) translateZ(-50px)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'perspective(3000px) rotateY(15deg) rotateX(10deg) translateY(50px) translateZ(-50px)';
    card.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(card);
  });

  // Add mouse move 3D tilt effect to cards
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(3000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(3000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });

  // Parallax effect on mouse move for background
  document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.parallax__layer--background');
    const moveX = (e.clientX / window.innerWidth) * 10 - 5;
    const moveY = (e.clientY / window.innerHeight) * 10 - 5;
    background.style.transform = `translate(${moveX}px, ${moveY}px) scaleY(calc(1 / (1 - var(--parallax-scale))))`;
  });
});

