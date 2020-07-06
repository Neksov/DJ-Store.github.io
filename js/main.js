$(document).ready(function () {
  $('.menu__burger').click(function (event) {
    $('.menu__burger, .menu__list, .menu__mail, .menu__btn').toggleClass('active');
    $('body').toggleClass('lock');
  });
});