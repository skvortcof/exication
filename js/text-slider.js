(function ($) {
  $(function () {

    var quotes = $(".quote");
    var quotesLength = quotes.length;
    var quoteIndex = 0;

    quotes.eq(quoteIndex).show();
    quoteIndex++;

    function show() {
      quotes.hide();
      quotes.eq(quoteIndex).fadeIn();
      quoteIndex++;

      if (quoteIndex >= quotesLength) {
        quoteIndex = 0;
      }
    }

    setInterval(show, 5000);

  });
})(jQuery);