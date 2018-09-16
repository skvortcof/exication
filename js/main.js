document.body.classList.add('js');


(function ($) {
  $(function () {

    if ($(window).width() < 700) {
      $('body').removeClass('js');
    }

  });
})(jQuery);

$( window ).on('load', function() {
  /*
  $('#preloader').fadeOut('fast', function () {
    $(this).remove();
  });
  */
});