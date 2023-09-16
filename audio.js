const audio = document.getElementById('myAudio');
const playPauseButton = document.getElementById('playPauseButton');
const showAudioButton = document.getElementById('showAudioButton');
const customAudio = document.querySelector('.custom-audio');

playPauseButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('pause');
    } else {
        audio.pause();
        
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
        
        setTimeout(function () {
    $("#showAudioButton").click();
     }, 500);
        
    }
});

showAudioButton.addEventListener('click', function() {
    customAudio.classList.toggle('audio-visible');
});

audio.addEventListener('ended', function() {
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
});