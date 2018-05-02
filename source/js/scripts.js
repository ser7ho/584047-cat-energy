var navMain = document.querySelector('.main-nav');
var menuButton = document.querySelector('.menu-button--nojs');

menuButton.classList.remove('menu-button--nojs');
menuButton.classList.add('menu-button');

menuButton.addEventListener('click', function() {
  if (menuButton.classList.contains('menu-button')) {
    menuButton.classList.remove('menu-button');
    menuButton.classList.add('menu-button--close');
  } else {
    menuButton.classList.add('menu-button');
    menuButton.classList.remove('menu-button--close');
  }
});
