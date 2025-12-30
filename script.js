const pointer = {
  second: document.querySelector(".second"),
  minute: document.querySelector(".minute"),
  hour: document.querySelector(".hour"),
};
const points = document.querySelector(".points");
const display = document.querySelector(".display");

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
    point.appendChild(text);
    hourNumber === 12 ? (hourNumber = 1) : (hourNumber += 1);
  }
  point.style.transform = `rotate(${i}deg) translateY(-150px)`;
  points.appendChild(point);
}

const setPointer = (pointer, deg) => {
  pointer.style.transition = deg === 0 ? "none" : "0.25s";
  pointer.style.transform = `rotate(${deg - 180}deg)`;
};

function setTime() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  display.textContent = time;

  const degree = {
    second: now.getSeconds() * 6,
    minute: now.getMinutes() * 6,
    hour: now.getHours() * 30 + now.getMinutes() * 0.5,
  };

  setPointer(pointer.second, degree.second);
  setPointer(pointer.minute, degree.minute);
  setPointer(pointer.hour, degree.hour);
}
setTime();
setInterval(setTime, 1000);
