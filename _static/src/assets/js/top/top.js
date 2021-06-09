// Type Writer

const iTyped = document.querySelector('.ityped');

window.ityped.init(iTyped, {
  strings: [
    'Front-end Developer',
    'Openness',
    'Enthusiastic',
    'Movie Lover',
    'Workaholics',
    'Respectful',
  ],
  typeSpeed: 55,
  backSpeed: 30,
  startDelay: 700,
  backDelay: 500,
  loop: true,
  showCursor: true,
  cursorChar: '|',
  onFinished: function () {},
});

// Fade in Animation
AOS.init({
  offset: 500,
  delay: 100,
  duration: 500,
  easing: 'ease-in',
  once: true,
});
