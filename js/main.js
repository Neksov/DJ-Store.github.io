//бургер меню
$(document).ready(function () {
  $(".menu__burger").click(function (event) {
    $(
      ".menu__burger, .menu__list, .menu__mail, .menu__btn, .nav__item"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".nav__item").click(function (event) {
    $(".menu__list, .menu__burger, .menu__mail, .menu__btn").removeClass(
      "active"
    );
  });
  //слайдер__1
  var swiper = new Swiper(".swiper-container__First", {
    spaceBetween: 30,

    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //слайдер__2
  var swiper = new Swiper(".swiper-container__Second", {
    slidesPerView: 2,
    speed: 900,
    loop: true,
    cssMode: true,
    spaceBetween: 200,
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },

  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

    return direction;
  }
});