'use strict';
const destinationNav = document.querySelector('.destination-nav');
const destinationStats = document.querySelector('.stats');
const planets = document.querySelectorAll('.destination-nav__list');
const planetName = document.querySelector('.home__title--destination');
const img = document.querySelector('.moon img');
const imgWebp = document.querySelector('.moon source');
const description = document.querySelector('.home__subtitle--destination');
const distance = document.querySelector('.stats__distance h3');
const travel = document.querySelector('.stats__time h3');

destinationNav.addEventListener('click', function (e) {
  const clicked = e.target.closest('.destination-nav__list');
  if (!clicked) return;
  planets.forEach(planet => planet.classList.remove('active'));

  clicked.classList.add('active');
});

planets.forEach(planet => {
  planet.addEventListener('click', e => {
    const tabID = e.target.parentNode.getAttribute('tabindex');
    const item = pages.destinations[tabID];

    if (!tabID) return;

    img.src = item.images.png;
    imgWebp.srcset = item.images.webp;
    description.textContent = item.description;
    distance.textContent = item.distance;
    travel.textContent = item.travel;
    planetName.textContent = item.name;

    animation();
  });
});

function animation() {
  img.classList.add('opacity');
  planetName.classList.add('destinationMove');
  description.classList.add('destinationMove');
  destinationStats.classList.add('destinationTravelMove');

  setTimeout(function () {
    img.classList.remove('opacity');
    planetName.classList.remove('destinationMove');
    description.classList.remove('destinationMove');
    destinationStats.classList.remove('destinationTravelMove');
  }, 2500);
}
