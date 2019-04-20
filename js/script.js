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
"use strict";

document.body.classList.add('js');

(function ($) {
  $(function () {
    /**
     * Mobile
     */
    var wnd = $(window);
    var wndWidth = wnd.width();

    if (wndWidth < 700) {
      $('body').removeClass('js');
    }
    /**
     * Audio
     */


    var a = audiojs;
    var promiseAudio = new Promise(function (resolve, reject) {
      a.events.ready(function () {
        a.createAll();
        resolve();
      });
    });
    promiseAudio.then(function (value) {
      var play = $('.play');
      play.on('click', function (e) {
        for (var prop in a.instances) {
          a.instances[prop].pause();
        }

        return true;
      });
    });
    document.getElementsByTagName('video')[1].volume = 0.3;
  });
})(jQuery);
