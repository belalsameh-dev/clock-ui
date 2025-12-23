const points = document.querySelector(".points");

let hourNumber = 12;
for (let i = 0; i < 360; i += 6) {
  const point = document.createElement("span");
  point.classList.add("point");

  if ((i / 6) % 5 === 0) {
    point.classList.add("big");
    const text = document.createElement("span");
    text.className = "text";
    text.textContent = hourNumber;
    text.style.transform = `rotate(${-i}deg) translateY(2px)`;
    hourNumber === 12 ? (hourNumber = 1) : (hourNumber += 1);
    point.appendChild(text);
  }
  point.style.transform = `rotate(${i}deg) translateY(-150px)`;
  points.appendChild(point);
}

const secondsPointer = document.querySelector(".seconds"),
  minutesPointer = document.querySelector(".minutes"),
  hoursPointer = document.querySelector(".hours");

const setPointer = (pointer, position) => {
  pointer.style.transition = position === 0 ? "none" : "0.25s";
  pointer.style.transform = `rotate(${position - 180}deg)`;
};

setInterval(() => {
  const now = new Date();

  const seconds = now.getSeconds(),
    minutes = now.getMinutes(),
    hours = now.getHours() % 12;

  const secDeg = seconds * 6,
    minDeg = minutes * 6,
    hourDeg = hours * 30 + minutes * 0.5;

  setPointer(secondsPointer, secDeg);
  setPointer(minutesPointer, minDeg);
  setPointer(hoursPointer, hourDeg);
}, 1000);
