$(document).ready(function () {

  // Мобильное меню
  $('.mobile-menu-icon').click(function () {
    $('.tm-nav').slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 767) {
      $('.tm-nav').show();
    } else {
      $('.tm-nav').hide();
    }
  });


  $('body').bind('touchstart', function () {});

  // Гладкая прокрутка
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

$(window).load(function () {
  // Убрать прелоудер
  $('body').addClass('loaded');
});