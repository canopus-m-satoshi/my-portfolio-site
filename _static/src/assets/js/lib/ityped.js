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
  startDelay: 1000,
  backDelay: 500,
  loop: true,
  showCursor: true,
  cursorChar: '|',
  onFinished: function () {},
});
