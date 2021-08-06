'use strict';

// Scroll to sections
const sections = document.querySelectorAll('.nav a');

sections.forEach((section) => {
    section.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = section.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
