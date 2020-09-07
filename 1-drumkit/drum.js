console.log("hello!");

const playSound = (e) => {
  audio = this.document.querySelector(`audio[data-key="${e['keyCode']}"]`);
  key = this.document.querySelector(`.drum-key[data-key="${e['keyCode']}"]`);
  key.classList.add('playing');
  console.log(audio);
};

window.addEventListener('keydown', playSound)