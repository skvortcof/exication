(function ($) {
  $(function () {

    if ($(window).width() > 700) {
      $('body').addClass('js');
    }

  });
})(jQuery);

$( window ).on('load', function() {
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();
  });
});