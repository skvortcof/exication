document.body.classList.add('js');

(function ($) {
  $(function () {


    /**
     * Mobile
     */
    let wnd = $(window);
    let wndWidth = wnd.width();

    if (wndWidth < 700) {
      $('body').removeClass('js');
    }

    /**
     * Audio
     */
    let a = audiojs;

    let promiseAudio = new Promise(function (resolve, reject) {
      a.events.ready(function () {
        a.createAll();
        resolve();
      });
    });

    promiseAudio.then(function (value) {
      let play = $('.play');

      play.on('click', function (e) {
        for (let prop in a.instances) {
          a.instances[prop].pause();
        }

        return true;
      });

    });

    document.getElementsByTagName('video')[1].volume = 0.3;

  });
})(jQuery);