/* code goes here */
document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener('keydown', playSound);
function playSound(e) {

    
const keyPressed = e.key;
const audio = document.querySelector(
`audio[data-key="${keyPressed}"]`);

    
audio.currentTime = 0;
if(!audio) return;
const div = document.querySelector(`div.key[data-key="${keyPressed}"]`);
div.classList.add('playing');
audio.play();
}
    
    const keys = document.querySelectorAll('.key');
for (let key of keys) {
key.addEventListener('transitionend', removeTransition)
}
function removeTransition(e) {
// skip if not a transform transition
if (e.propertyName !== 'transform') return;
// right transition so remove the .playing class from .key
this.classList.remove('playing');
}
});
