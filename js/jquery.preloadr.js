(function ($) {


    const preloader = $('#preloader');
    const preloader_progress = $('#preloader_progress');
    const preloader_status = $('#preloader_status');

    $('body').addClass('loading');

    let calcPercent;

    /**
     * Get Images
     */
    function getImages() {
      let items = [];

      $('body').find('*:not(script)').each(function () {
        var url = "";

        if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof ($(this).attr('src')) != 'undefined') {
          url = $(this).attr('src');
        }

        if (url.length > 0) {
          items.push(url);
        }
      });

      return items;
    }

    /**
     * Preloading Status
     */
    function loadImages(images) {
      let increment = Math.floor(100 / images.length);
      $(images).each(function () {
        $('<img>').attr('src', this).on('load', function () {
          preloader_progress.animate({
            height: "+=" + increment + "%"
          }, 100);
        });
      });

      calcPercent = setInterval(function () {
        //loop through the items
        preloader_status.html(Math.floor((preloader_progress.height() / preloader.height()) * 100) + '%');
      });
    }

    const images = getImages();
    loadImages(images);

    /**
     * Launch Preloader
     */
    $(window).on('load', function () {
      preloader_progress.animate({
        height: '100%'
      }, 100, function () {
        preloader_status.html('100%');
        clearInterval(calcPercent);
        preloader.delay(800).fadeOut('slow', function () {
          $('body').removeClass('loading');
        });
      });

    });


})(jQuery);


