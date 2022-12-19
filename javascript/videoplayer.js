// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = '<img src="./images/buttons/pause-512.png" alt="">';
    } else {
        video.pause();
        btn.innerHTML = '<img src="./images/buttons/play-512.png" alt="">';
    }
}