const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const moveHands = (degrees) => {
  hourHand.style.transform = `rotate(${degrees["hoursDegrees"]}deg)`;
  minuteHand.style.transform = `rotate(${degrees["minutesDegrees"]}deg)`;
  secondHand.style.transform = `rotate(${degrees["secondsDegrees"]}deg)`;
}

const removeSmoothness = (degrees) => {
  if (degrees["hoursDegrees"] == 330) {
    hourHand.classList.remove('smooth-movement');
  }
  if (degrees["minutesDegrees"] == 354) {
    minuteHand.classList.remove('smooth-movement');
  }
  if (degrees["secondsDegrees"] == 354) {
    secondHand.classList.remove('smooth-movement');
  }
}

const addSmoothness = (degrees) => {
  if (degrees["hoursDegrees"] == 30) {
    hourHand.classList.add('smooth-movement');
  }
  if (degrees["minutesDegrees"] == 6) {
    minuteHand.classList.add('smooth-movement');
  }
  if (degrees["secondsDegrees"] == 6) {
    secondHand.classList.add('smooth-movement');
  }
}

const getTimes = () => {
  const date = new Date();
  const times = {};
  times["hours"] = date.getHours();
  times["minutes"] = date.getMinutes();
  times["seconds"] = date.getSeconds();
  return times;
}

const getDegrees = (times) => {
  const degrees = {};
  degrees["hoursDegrees"] = ((((times["hours"] % 12) / 12) * 360) + 90) % 360;
  degrees["minutesDegrees"] = (((times["minutes"] / 60) * 360) + 90) % 360;
  degrees["secondsDegrees"] = (((times["seconds"] / 60) * 360) + 90) % 360;
  return degrees;
}

const findTime = () => {
  const times = getTimes();
  const degrees = getDegrees(times);

  moveHands(degrees);
  removeSmoothness(degrees)
  addSmoothness(degrees)
}

setInterval(findTime, 1000);
