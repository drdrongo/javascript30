console.log("hello!");

const removePlaying = (key) => {
  key.classList.remove('playing');
}

const playSound = (e) => {
  audio = this.document.querySelector(`audio[data-key="${e['keyCode']}"]`);
  key = this.document.querySelector(`.drum-key[data-key="${e['keyCode']}"]`);
  if (!audio) { return }
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  setTimeout(1000);
  key.classList.remove('playing');
};

window.addEventListener('keydown', playSound)