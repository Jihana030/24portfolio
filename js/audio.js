(function () {
    'use strict';
    const prfAudio = document.querySelector('#prf_audio');
    const playBtn = document.querySelector('#play_btn');
    const prfImg = document.querySelector('#prf_img');

    playBtn.addEventListener('click', e => {
        prfAudio.play();
        playBtn.classList.add('st_opacity');
        prfImg.classList.add('cursor_p');
        console.log(playBtn.classList.contains('st_opacity'));
    })
    if (playBtn.classList.contains('st_opacity')) {
        prfImg.addEventListener('click', e=>{
            prfAudio.pause();
            playBtn.classList.remove('st_opacity');
        })
    }
})();