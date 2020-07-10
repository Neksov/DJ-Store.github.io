$(document).ready(function () {
  $('.menu__burger').click(function (event) {
    $('.menu__burger, .menu__list, .menu__mail, .menu__btn, .nav__item').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.nav__item').click(function (event) {
    $('.menu__list, .menu__burger, .menu__mail, .menu__btn').removeClass("active");
  });
});