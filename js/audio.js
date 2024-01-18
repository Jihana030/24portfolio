(function () {
    'use strict';
    const prfAudio = document.querySelector('#prf_audio');
    const playBtn = document.querySelector('#play_btn');
    const audioWrap = document.querySelector('.audio_wrap');
    const audioChild = audioWrap.lastElementChild;
    console.log(audioChild)
    if (audioChild.classList.contains('st_opacity')) {
        // audio pause
        audioChild.addEventListener('click', e => {
            prfAudio.pause();
            audioChild.classList.remove('st_opacity');
            console.log('pause');
        })
    } else {
        // audio play
        audioChild.addEventListener('click', e => {
            prfAudio.play();
            audioChild.classList.add('st_opacity');
            console.log('play');
        })
    }
})();