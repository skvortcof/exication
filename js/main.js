(function ($) {
  $(function () {

    $( document ).ready(function() {
      $('#preloader').fadeOut('slow', function () {
        $(this).remove();
      });
    });

  });
})(jQuery);


$( window ).on( "load", function() {
  console.log( "window loaded" );
});
