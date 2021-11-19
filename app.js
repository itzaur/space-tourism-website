'use strict';
const nav = document.querySelector('.navigation');
const navContainer = document.querySelector('.navigation__list');
const navItems = document.querySelectorAll('.navigation__item');
// const navItemActive = document.querySelector('.active');
// const navLinks = document.querySelectorAll('.navigation__link');
const btnMenu = document.querySelector('.btn-toggle');

navContainer.addEventListener('click', function (e) {
  // console.log(e.target.closest('.navigation__item'));
  const clicked = e.target.closest('.navigation__item');

  navItems.forEach(item => item.classList.remove('active'));

  clicked.classList.add('active');
});

btnMenu.addEventListener('click', () => {
  const visual = nav.getAttribute('data-visual');

  if (visual === 'false') {
    nav.setAttribute('data-visual', true);
    btnMenu.style.background = `no-repeat center/cover url('../assets/shared/icon-close.svg')`;
    nav.style.visibility = 'visible';
    nav.style.opacity = 1;
  } else if (visual === 'true') {
    nav.setAttribute('data-visual', false);
    btnMenu.style.background = `no-repeat center/cover url('../assets/shared/icon-hamburger.svg')`;
    // setTimeout(function () {
    //   nav.style.visibility = 'hidden';
    //   nav.style.opacity = 0;
    // }, 1000);
  }
});
