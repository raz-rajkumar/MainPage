setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour]"),
  minuteHand = document.querySelector("[data-minute]"),
  secondHand = document.querySelector("[data-second]");

function setClock() {
  const currentDate = new Date(),
    secondsRatio = currentDate.getSeconds() / 60,
    minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60,
    hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}
function setRotation(element, rotation) {
  element.style.setProperty("--rotation", rotation * 360);
}
setClock();
