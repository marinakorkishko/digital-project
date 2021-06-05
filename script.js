const flkty = new Flickity('.main-carousel', {
  wrapAround: false,
  autoPlay: false,
  draggable: true,
  groupCells: 0,
  adaptiveHeight: true,
});

const currentYearSpan = document.getElementById('current-year');
currentYearSpan.innerHTML = new Date().getFullYear();

const menuBtn = document.querySelector('.menu__btn');
if (menuBtn) {
  const menuList = document.querySelector('.menu__list');
  menuBtn.addEventListener("click", function () {
    document.body.classList.toggle('lock');
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
    const header = document.querySelector('.header');
    header.classList.toggle('active');
  });
}