$(document).ready(function () {
  //бургер меню
  $(".menu__burger").click(function (event) {
    $(
      ".menu__burger, .menu__list, .menu__mail, .menu__btn"
    ).toggleClass("active");
    $("body").toggleClass("lock");
    $(
      ".nav"
    ).toggleClass("active2");
  });
  $(".nav__item").click(function (event) {
    $(".menu__list, .menu__burger, .menu__mail, .menu__btn").removeClass(
      "active"
    );
    $(
      ".nav"
    ).removeClass("active2");
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

  //callback
  let callback = $(".callback"); //помещаем модальное окно 
  CallbackBtn = $("[data-toggle = callback]");
  closeBtnCallback = $(".callback__close");

  //согласие
  let consent = $(".consent");
  modalСonsent = $("[data-toggle = consent]");
  closeСonsent = $(".consent__close");

  //callback
  CallbackBtn.on("click", function () {
    //присваееваем класс
    callback.toggleClass("callback--visible");
  });

  closeBtnCallback.on("click", function () {
    //присваееваем класс
    callback.toggleClass("callback--visible");
  });
  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".callback").removeClass("callback--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".callback")) {
      callback.toggleClass("callback--visible");
    }
  });

  //согласие
  modalСonsent.on("click", function () {
    //присваееваем класс
    consent.toggleClass("consent--visible");
  });

  //закрытие по esc
  $(document).keyup("click", function (event) {
    if (event.which == "27") {
      $(".consent").removeClass("consent--visible");
    }
  });
  // закрытие по клику вне окна
  $(document).click(function (e) {
    if ($(e.target).is(".consent")) {
      consent.toggleClass("consent--visible");
    }
  });
  closeСonsent.on("click", function () {
    //присваееваем класс
    consent.toggleClass("consent--visible");
  });

  //валидация форм
  $(".callback__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        maxlength: 16,
      },
      checkBoxModal: "required",
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиньше 15 символов",
      },
      userPhone: "Телефон обязателен",
      checkBoxModal: "Подтвердите свое согласие",
    },
    //отправка формы через аякс
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "callback.php",
        data: $(".callback__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
        success: function (response) {
          $(form)[0].reset(); // чистит поля после отправки формы
          $(".callback").fadeIn();
        },
      });
    },
  });

  //маска для номера телефона
  $("[type=tel]").mask("+7(000)000-00-00", {
    placeholder: "Телефон*",
  });
});