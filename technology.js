'use strict';

const dotsTechnologyContainer = document.querySelector('.dots--technology');
const dotsTechnology = document.querySelectorAll('.dots--technology div');
const technologyTitle = document.querySelector('.technology-title');
// const technologySup = document.querySelector('.home__suptitle--technology');
const technologyName = document.querySelector('.home__title--technology');
const technologyDescription = document.querySelector(
  '.home__subtitle--technology'
);
const technologyImg = document.querySelectorAll('.technology img');
// const crewImgWebp = document.querySelector('.technology source');

dotsTechnologyContainer.addEventListener('click', e => {
  //   const clickedSpan = e.target.getAttribute('data-num');
  //   clickedSpan.setAttribute('data-num', false);

  //   if (clickedSpan === 'true') {

  //     let res = e.target.closest('.dots--technology div');
  //     res.setAttribute('data-active', true);

  //     console.log(res);
  //   }
  dotsTechnology.forEach(dot => dot.classList.remove('active'));
  const dotId = e.target.getAttribute('tabindex');
  // const clicked = e.target;
  const clicked = e.target.closest('.dots--technology div');

  clicked.classList.add('active');

  const item = pages.technology[dotId];
  //   crewTitle.textContent = item.role;
  technologyName.textContent = item.name;
  technologyDescription.textContent = item.description;
  technologyImg.forEach(img => {
    img.src = item.images.portrait;
    img.src = item.images.landscape;
  });
  // technologyImg.src = item.images.portrait;
  //   crewImgWebp.srcset = item.images.landscape;

  animation();
});

function animation() {
  technologyImg.forEach(img => img.classList.add('opacity'));
  // technologyImg.classList.add('opacity');
  technologyTitle.classList.add('destinationMove');
  technologyName.classList.add('destinationMove');
  technologyDescription.classList.add('destinationMove');

  setTimeout(function () {
    technologyImg.forEach(img => img.classList.remove('opacity'));
    // technologyImg.classList.remove('opacity');
    technologyTitle.classList.remove('destinationMove');
    technologyName.classList.remove('destinationMove');
    technologyDescription.classList.remove('destinationMove');
  }, 2600);
}
