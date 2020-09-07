const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const playSound = (e) => {
  audio = this.document.querySelector(`audio[data-key="${e['keyCode']}"]`);
  key = this.document.querySelector(`.drum-key[data-key="${e['keyCode']}"]`);
  if (!audio) { return }
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const keys = document.querySelectorAll('.drum-key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)