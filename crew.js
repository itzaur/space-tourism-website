'use strict';
const dotsContainer = document.querySelector('.dots');
const dots = document.querySelectorAll('.dots div');
const crewTitle = document.querySelector('.crew-title');
const crewName = document.querySelector('.home__title--crew');
const crewBio = document.querySelector('.home__subtitle--crew');
const crewImgPng = document.querySelector('.commander img');
const crewImgWebp = document.querySelector('.commander source');

dotsContainer.addEventListener('click', e => {
  // console.log(e.target);
  dots.forEach(dot => dot.classList.remove('active'));
  const dotId = e.target.getAttribute('tabindex');
  const clicked = e.target;
  clicked.classList.add('active');

  const item = pages.crew[dotId];

  crewTitle.textContent = item.role;
  crewName.textContent = item.name;
  crewBio.textContent = item.bio;
  crewImgPng.src = item.images.png;
  crewImgWebp.srcset = item.images.webp;

  animation();
});

function animation() {
  crewImgPng.classList.add('opacity');
  crewTitle.classList.add('destinationMove');
  crewName.classList.add('destinationMove');
  crewBio.classList.add('destinationMove');

  setTimeout(function () {
    crewImgPng.classList.remove('opacity');
    crewTitle.classList.remove('destinationMove');
    crewName.classList.remove('destinationMove');
    crewBio.classList.remove('destinationMove');
  }, 2600);
}
