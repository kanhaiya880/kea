$(document).ready(function() {
    // Initially hide the audio player
    $(".custom-audio").addClass("audio-visible");

    // Toggle audio player visibility when clicking the button
    $("#showAudioButton").click(function() {
        $(".custom-audio").toggleClass("audio-visible");
    });
});

// Audio control using JavaScript
const audio = document.getElementById('myAudio');
const playPauseButton = document.getElementById('playPauseButton');

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

audio.addEventListener('ended', function() {
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
});