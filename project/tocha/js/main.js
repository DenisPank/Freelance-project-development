$(document).ready(function () {
  $(".reviews__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
