(function ($) {
  $(function () {

    $('body').addClass('js');

  });
})(jQuery);

$( window ).on('load', function() {
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();
  });
});