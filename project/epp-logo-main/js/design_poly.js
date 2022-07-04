const swiperPrev = new Swiper(".prev-swiper-container", {
  slidesPerView: 7,
  slidesPerColumn: 2,
  spaceBetween: 20,
  breakpoints: {
    1000: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});
const swiper = new Swiper(".swiper-container-work", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 600,
  thumbs: {
    swiper: swiperPrev,
  },
  breakpoints: {
    320: {
      spaceBetween: 5,
    },
  },
});

$(".modal").each(function () {
  $(this).wrap('<div class="overlay"></div>');
});

$(".open-modal").on("click", function (e) {
  e.preventDefault();
  e.stopImmediatePropagation;
  var $this = $(this),
    modal = $($this).data("modal");
  $("body").addClass("lock");
  $(modal).parents(".overlay").addClass("open");
  setTimeout(function () {
    $(modal).addClass("open");
  }, 350);

  $(document).on("click", function (e) {
    var target = $(e.target);

    if ($(target).hasClass("overlay")) {
      $(target)
        .find(".modal")
        .each(function () {
          $(this).removeClass("open");
          $("body").removeClass("lock");
        });
      setTimeout(function () {
        $(target).removeClass("open");
        $("body").removeClass("lock");
      }, 350);
    }
  });
});

$(".close-modal").on("click", function (e) {
  e.preventDefault();
  e.stopImmediatePropagation;

  var $this = $(this),
    modal = $($this).data("modal");

  $(modal).removeClass("open");
  $("body").removeClass("lock");
  setTimeout(function () {
    $(modal).parents(".overlay").removeClass("open");
  }, 350);
});
