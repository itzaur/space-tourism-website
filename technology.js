'use strict';

const dotsTechnologyContainer = document.querySelector('.dots--technology');
const dotsTechnology = document.querySelectorAll('.dots--technology div');
const technologyTitle = document.querySelector('.technology-title');

const technologyName = document.querySelector('.home__title--technology');
const technologyDescription = document.querySelector(
  '.home__subtitle--technology'
);
// const technologyImg = document.querySelectorAll('.technology img');
const technologyImgPortrait = document.querySelector('.img-portrait');
const technologyImgLandscape = document.querySelector('.img-landscape');

dotsTechnologyContainer.addEventListener('click', e => {
  dotsTechnology.forEach(dot => dot.classList.remove('active'));
  const dotId = e.target.getAttribute('tabindex');
  const clicked = e.target.closest('.dots--technology div');
  const item = pages.technology[dotId];

  clicked.classList.add('active');

  technologyName.textContent = item.name;
  technologyDescription.textContent = item.description;
  // console.log(dotId);
  // if (dotId === '0') {
  //   console.log('yes');
  // } else {
  //   console.log('no');
  // }
  technologyImgPortrait.src = item.images.portrait;
  technologyImgLandscape.src = item.images.landscape;
  // technologyImg.forEach(img => {
  //   img.src = item.images.portrait;
  //   img.src = item.images.landscape;
  // });

  animation();
});

function animation() {
  technologyImgPortrait.classList.add('opacity');
  technologyImgLandscape.classList.add('opacity');
  // technologyImg.forEach(img => img.classList.add('opacity'));
  technologyTitle.classList.add('destinationMove');
  technologyName.classList.add('destinationMove');
  technologyDescription.classList.add('destinationMove');

  setTimeout(function () {
    technologyImgPortrait.classList.remove('opacity');
    technologyImgLandscape.classList.remove('opacity');
    // technologyImg.forEach(img => img.classList.remove('opacity'));
    technologyTitle.classList.remove('destinationMove');
    technologyName.classList.remove('destinationMove');
    technologyDescription.classList.remove('destinationMove');
  }, 2600);
}
