(function () {
    'use strict';
    const prfAudio = document.querySelector('#prf_audio');
    const playBtn = document.querySelector('#play_btn');
    
    // audio pause
    playBtn.addEventListener('click', e => {
        if (playBtn.classList.contains('st_opacity')) {
            prfAudio.pause();
            playBtn.classList.remove('st_opacity');
            console.log('pause');
        } else {
            // audio play
            prfAudio.play();
            playBtn.classList.add('st_opacity');
            console.log('play');
        }
    })

})();