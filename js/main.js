(function ($) {
  $(function () {


    /*

    https://www.htmlgoodies.com/tutorials/web_graphics/article.php/3480001/So-You-Want-To-Pre-Load-Huh.htm
    Image Preloading

    */

    /**
     * Tooltips
     */
    const btnTooltip = $('[data-toggle="tooltip"]');
    btnTooltip.tooltip({
      placement: 'bottom',
      delay: {
        "show": "100",
        "hide": "100"
      },
      trigger: 'hover'
    });


    /**
     * Cash
     */

    // Pages Cash
    const pages = $('.page');
    const page1 = $('#page1');
    const page2 = $('#page2');
    const page3 = $('#page3');
    const page4 = $('#page4');
    const p3wall = $('#p3wall');

    // System Cash
    const body = $('body');
    const wnd = $(window);

    // Parallax scene for Page 1
    const sceneObj = $('#scene');
    const sceneImg = $('#p1_scene_img');
    const fireVideo = $('#fire_video');


    /**
     * Page 3 predefined variables
     */
    let wheelTwist = 1;
    let p3wallHeight = p3wall.outerHeight();

    /**
     * Navigation Link Click
     */
    var navLink = $('.nav-link');
    navLink.on('click', function (e) {
      e.preventDefault();

      let link = $(this);
      let linkActive = link.hasClass('active');

      if (!linkActive) {
        let href = link.attr("name");
        changePage(href);
      }
    })

    /**
     * Change Page
     * @param {*} pageId
     */
    function changePage(pageId) {
      let page = '#page' + pageId;
      let pageObj = $(page);
      let link = navLink.eq(pageId - 1);

      navLink.removeClass('active');
      link.addClass('active');

      pages.removeClass('active');
      pages.fadeOut();
      pageObj.addClass('active');
      pageObj.fadeIn();

      // resize for page 1
      if (pageId == 1) {
        p1SceneResize();
      }

      let bodyClass = 'body-page-' + pageId;
      body.removeClass();
      body.addClass(bodyClass);

      body.data('page', pageId);

      p3Reset();
    }

    /**
     *  Init Page
     */
    changePage(1);

    /**
     * Next Page
     */
    const btnContinue = $('#btnContinue');
    const pagesCount = 4;
    btnContinue.on('click', function () {
      let currentPage = parseInt(body.data('page'));
      if (currentPage < pagesCount) {
        changePage(currentPage + 1);
      } else {
        changePage(1);
      }
    });

    /**
     * Key Space: Next Page
     */
    body.keyup(function (e) {
      if (e.keyCode == 32) {
        btnContinue.click();
      }
    });

    /**
     * Init Effects for Page 1
     */

    let wWidth = wnd.width();
    let wHeight = wnd.height();

    function p1SceneResize() {

      if (body.hasClass('body-page-1')) {
        let sceneWidth = wWidth + (wWidth / 2);
        let sceneHeight = wHeight + (wHeight / 2);

        let sceneOffsetLeft = (wWidth / 2) / 2;
        let sceneOffsetTop = (wHeight / 2) / 2;

        sceneObj.innerWidth(sceneWidth);
        sceneObj.innerHeight(sceneHeight);

        sceneImg.innerWidth(sceneWidth);
        sceneImg.innerHeight(sceneHeight);

        fireVideo.innerWidth(sceneWidth);
        fireVideo.innerHeight(sceneHeight);

        sceneObj.offset({
          left: -sceneOffsetLeft,
          top: -sceneOffsetTop
        });
      }

    }

    p1SceneResize();


    /**
     * Resize Event
     */
    wnd.on('resize', function () {
      wWidth = wnd.width();
      wHeight = wnd.height();
      p1SceneResize();
      p3Reset();
    });

    /**
     * Deep Parallax
     */
    const scene = sceneObj.get(0);
    const parallaxInstance = new Parallax(scene);


    /**
     * Wheel Event
     */
    addWheelListener(document, function (e) {
      let delta = e.deltaY;

      scrollPage3Background(delta);

      e.preventDefault();
    });

    /**
     * Scroll Background
     */
    function scrollPage3Background(delta) {
      if (body.hasClass('body-page-3')) {
        const delay = 50;
        const steps = 100;
        const up = -3;
        const down = 3;

        p3wallHeight = p3wall.outerHeight();
        let wallStep = (p3wallHeight - wHeight) / steps;

        if (delta == down) {
          if (wheelTwist < steps) {

            p3wall.animate({
              top: '-=' + wallStep + 'px'
            }, delay);

            wheelTwist += 1;
          }
        } else if (delta == up) {
          if (wheelTwist > 1) {
            p3wall.animate({
              top: '+=' + wallStep + 'px'
            }, delay);
            wheelTwist -= 1;
          }
        }
      }

      switch (true) {
        case (wheelTwist < 10): {
          $('.poem-part').hide();
          $('.poem-part-0').show();
          break;
        }
        case (wheelTwist < 20): {
          $('.poem-part').hide();
          $('.poem-part-1').show();
          break;
        }
        case (wheelTwist < 30): {
          $('.poem-part').hide();
          $('.poem-part-2').show();
          break;
        }
        case (wheelTwist < 40): {
          $('.poem-part').hide();
          $('.poem-part-3').show();
          break;
        }
        case (wheelTwist < 50): {
          $('.poem-part').hide();
          $('.poem-part-4').show();
          break;
        }
        case (wheelTwist < 60): {
          $('.poem-part').hide();
          $('.poem-part-5').show();
          break;
        }
        case (wheelTwist < 70): {
          $('.poem-part').hide();
          $('.poem-part-6').show();
          break;
        }
        case (wheelTwist < 80): {
          $('.poem-part').hide();
          $('.poem-part-7').show();
          break;
        }
        case (wheelTwist < 90): {
          $('.poem-part').hide();
          $('.poem-part-8').show();
          break;
        }
        case (wheelTwist < 100): {
          $('.poem-part').hide();
          $('.poem-part-9').show();
          break;
        }
      }

    }

    /**
     * Page 3 Reset
     */
    function p3Reset() {
      if (body.hasClass('body-page-3')) {
        wheelTwist = 1;
        $('.poem-part').hide();
        $('.poem-part-0').show();
        p3wallHeight = p3wall.outerHeight();
        p3wall.animate({
          top: 0
        }, 0);
      }
    }

  });
})(jQuery);