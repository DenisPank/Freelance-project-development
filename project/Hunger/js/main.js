new Swiper(".specialties-container", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".specialties-pagination",
  },
});

new Swiper(".gallery-container", {
  loop: true,
  breakpoints: {
    1920: {
      slidesPerView: 8,
    },
    1400: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 4,
    },
    425: {
      slidesPerView: 4,
    },
    375: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 4,
    },
  },
});

let burger = document.getElementsByClassName("burger");
let menu = document.getElementsByClassName("header__nav");
burger[0].onclick = function () {
  menu[0].classList.toggle("active");
};
