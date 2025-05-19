// animations.js


// Animate elements on scroll using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animation');

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const animationType = el.getAttribute('data-animation') || 'fade-in';

        // Add classes for animation and trigger the CSS
        el.classList.add('aos-animate', animationType);
        obs.unobserve(el);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

// Optional: show/hide elements based on window height condition
function handleAnimationDisplay() {
  const elements = document.querySelectorAll('.animationhtnlicon');
  elements.forEach(el => {
    if (window.innerHeight === 0) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}

// Attach event listeners for resize and load
window.addEventListener('resize', handleAnimationDisplay);
window.addEventListener('load', handleAnimationDisplay);