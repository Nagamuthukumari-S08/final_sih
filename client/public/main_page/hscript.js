// script.js
document.querySelectorAll('.timeline-event').forEach(event => {
    event.addEventListener('mouseover', () => {
      event.style.backgroundColor = '#e6f7ff';
    });
  
    event.addEventListener('mouseout', () => {
      event.style.backgroundColor = 'white';
    });
  });
  