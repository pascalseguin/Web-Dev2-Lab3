const symbolPlay = '⯈';
const symbolPause = '❚ ❚';

document.addEventListener("DOMContentLoaded", function() {

const video = document.querySelector('#vidPlayer');
const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', playOrPause);
video.addEventListener('click', playOrPause);
    video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
function updateButton() {
const icon = video.paused ? symbolPlay : symbolPause;
playBtn.textContent = icon;
}
function playOrPause() {
if (video.paused) {
video.play();
} else {
video.pause();
}
}
const vol = document.querySelector('#volume');
volume.addEventListener('input', changeVolume);
function changeVolume() {
video.volume = vol.value;
}
    
    const progressBar = document.querySelector('#progressFilled');
volume.addEventListener('input', changeVolume);
function handleProgress() {
const percent = (video.currentTime / video.duration) * 100;
progressBar.style.flexBasis = `${percent}%`;
}
});
