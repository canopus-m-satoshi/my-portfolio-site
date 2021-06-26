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
const scrollElements = document.querySelectorAll('.js-scroll'); //ターゲット指定

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top; //ページの上部から要素の距離を取得

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight) //ビューポートの高さを取得
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled'); //スクロールで表示されたら要素にクラス名を割り当てる
};

const hideScrollElement = (element) => {
  element.classList.remove('scrolled'); //スクロールで非表示になったら要素からクラス名を除去する
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
