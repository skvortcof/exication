(function ($) {
  $(function () {

  });
})(jQuery);


$( window ).on( "load", function() {
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();
  });
});
