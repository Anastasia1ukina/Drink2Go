var navMain = document.querySelector('.main-nav');
var map = document.querySelector('.location');
var navToggle = document.querySelector('.main-nav__toggle');

if (document.querySelector('.main-nav--no-js')) {
  navMain.classList.remove('main-nav--no-js');
}

if (document.querySelector('.location--no-js')) {
  map.classList.remove('location--no-js');
}

navToggle.addEventListener('click', function () {
  if (navMain) {
    navMain.classList.toggle('main-nav--opened');
  }
});
