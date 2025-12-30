const pointers = {
  second: document.querySelector(".second"),
  minute: document.querySelector(".minute"),
  hour: document.querySelector(".hour"),
};
const pointsContainer = document.querySelector(".points");
const digitalDisplay = document.querySelector(".display");

const createPoint = (deg, hour) => {
  const point = document.createElement("span");
  point.className = "point";
  point.style.transform = `rotate(${deg}deg) translateY(-150px)`;

  if (deg % 30 === 0) {
    point.classList.add("big");
    const text = document.createElement("span");
    text.className = "text";
    text.textContent = hour === 0 ? 12 : hour;
    text.style.transform = `rotate(${-deg}deg) translateY(2px)`;
    point.appendChild(text);
  }

  return point;
};
for (let deg = 0; deg < 360; deg += 6) {
  pointsContainer.appendChild(createPoint(deg, deg / 30));
}

const rotateHand = (hand, deg) => {
  hand.style.transition = deg === 0 ? "none" : "0.25s";
  hand.style.transform = `rotate(${deg - 180}deg)`;
};

const updateAnalogTime = (now) => {
  rotateHand(pointers.second, now.getSeconds() * 6);
  rotateHand(pointers.minute, now.getMinutes() * 6);
  rotateHand(pointers.hour, now.getHours() * 30 + now.getMinutes() * 0.5);
};

const updateDigitalTime = (now) => {
  digitalDisplay.textContent = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

const updateClock = () => {
  const now = new Date();
  updateAnalogTime(now);
  updateDigitalTime(now);
};

updateClock();
setInterval(updateClock, 1000);
