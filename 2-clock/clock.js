setInterval(console.log('farts'), 1000);
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const changeHands = (hoursDegrees, minutesDegrees, secondsDegrees) => {
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

const removeSmoothness = (hoursDegrees, minutesDegrees, secondsDegrees) => {
  if (hoursDegrees == 330) {
    hourHand.classList.remove('smooth-movement');
  }
  if (minutesDegrees == 354) {
    minuteHand.classList.remove('smooth-movement');
  }
  if (secondsDegrees == 354) {
    secondHand.classList.remove('smooth-movement');
  }
}

const findTime = () => {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondsDegrees = (((seconds / 60) * 360) + 90) % 360;

  const hours = date.getHours();
  const hoursDegrees = ((((hours % 12) / 12) * 360) + 90) % 360;

  const minutes = date.getMinutes();
  const minutesDegrees = (((minutes / 60) * 360) + 90) % 360;

  changeHands(hoursDegrees, minutesDegrees, secondsDegrees);
  removeSmoothness(hoursDegrees, minutesDegrees, secondsDegrees)

  
  
  if (secondsDegrees == 6) {
    secondHand.classList.add('smooth-movement');
  }
  if (minutesDegrees == 6) {
    minuteHand.classList.add('smooth-movement');
  }
  if (hoursDegrees == 30) {
    hourHand.classList.add('smooth-movement');
  }
}

setInterval(findTime, 1000);
