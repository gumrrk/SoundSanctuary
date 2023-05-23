function fadeIn(audio) {
    const fadeDuration = 3000;
    const fadeSteps = 100;
    const fadeIncrement = 0.10 / fadeSteps;

    let fadeInterval = setInterval(() => {
        if (audio.volume < 1) {
            audio.volume += fadeIncrement;
        } else {
            clearInterval(fadeInterval);
        }
    }, fadeDuration / fadeSteps);
}

function fadeOut(audio) {
    const fadeDuration = 3000; 
    const fadeSteps = 100;
    const fadeDecrement = 1 / fadeSteps;
    const fadeStart = 17; 
    const fadeEnd = 20; 

    let fadeInterval = setInterval(() => {
        const currentTime = audio.currentTime;
        if (currentTime >= fadeStart && currentTime <= fadeEnd) {
            if (audio.volume > 0) {
                audio.volume -= fadeDecrement;
            } else {
                clearInterval(fadeInterval);
                audio.pause();
                audio.currentTime = 0;
            }
        }
    }, fadeDuration / fadeSteps);
}

function avoidConflict() {
    const audioPlayButtons = document.querySelectorAll('.audio__div__div-2__div-3');
    audioPlayButtons.forEach((button) => {
        button.addEventListener('click', () => {
            audioPlayButtons.forEach((btn) => {
                if (btn !== button) {
                    const audio = btn.parentNode.querySelector('audio')
                    if (!audio.paused) {
                        audio.pause();
                    }
                }
            });
        })
    })
}