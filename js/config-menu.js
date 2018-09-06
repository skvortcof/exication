(function ($) {
	$(function () {


    let btn_toggle_screen = $('#btn_toggle_screen');
    let storage = $.jStorage;

    /**
     * Toggle Screen
     */
    btn_toggle_screen.on('click', function(e) {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    });


    /**
     * Sound On / Off
     */
    const btnSoundOn = $('#btn_sound_on');
    const btnSoundOff = $('#btn_sound_off');
    const sound = $('#audio')[0];

    // Check Sound Status
    const soundStatus = storage.get('sound');

    if (soundStatus == 'true') {
      sound.play();
      btnSoundOff.hide();
      btnSoundOn.show();
    } else {
      sound.pause();
      btnSoundOff.show();
      btnSoundOn.hide();
    }

    btnSoundOn.on('click', function () {
      sound.pause();
      //sound.currentTime = 0;
      storage.set('sound', false);

      btnSoundOff.show();
      btnSoundOn.hide();
    })

    btnSoundOff.on('click', function () {
      storage.set  ('sound', true);
      sound.play();

      btnSoundOff.hide();
      btnSoundOn.show();
    })





	});
})(jQuery);