const timer = document.querySelector(".timer-p");
const startTime = document.querySelector(".start-timer");
const stopTime = document.querySelector(".stop-timer");
const resetTime = document.querySelector(".reset-timer");
const setHour = document.querySelector("#hour");
const setMin = document.querySelector("#min");
const setSec = document.querySelector("#sec");

let sec = hr = min = 0;
let intervalId = null;

const handleInput = (e, type) => {
  e.target.value = e.target.value.slice(0, 2);
  let val = Math.max(0, Number(e.target.value) || 0);

  if (type === "sec") sec = val;
  if (type === "hr") hr = val;
  if (type === "min") min = val;
};

setHour.addEventListener("input", (e) => {
  handleInput(e, "hr");
});
setMin.addEventListener("input", (e) => {
  handleInput(e, "min");
});
setSec.addEventListener("input", (e) => {
  handleInput(e, "sec");
});
setSec.addEventListener("blur", (e) => {
  e.target.value = "";
});
setHour.addEventListener("blur", (e) => {
  e.target.value = "";
});
setMin.addEventListener("blur", (e) => {
  e.target.value = "";
});

const check = () => {
  // If seconds run out, borrow from minutes
  if (sec < 0) {
    if (min > 0) {
      min -= 1;
      sec = 59;
    } else if (hr > 0) {
      hr -= 1;
      min = 59;
      sec = 59;
    } else {
      // Timer finished
      clearInterval(intervalId);
      intervalId = null;
      hr = min = sec = 0;
    }
  }
};

const displayTime = () => {
  const formattedSec = String(sec).padStart(2, "0");
  const formattedMin = String(min).padStart(2, "0");
  const formattedHr = String(hr).padStart(2, "0");
  timer.innerText = `${formattedHr}:${formattedMin}:${formattedSec}`;
};

startTime.addEventListener("click", () => {
  if (intervalId !== null) return; // already running

  intervalId = setInterval(() => {
    
    if (hr === 0 && min === 0 && sec === 0) {
      clearInterval(intervalId);
      intervalId = null;
      alert("Timer Completed");
      return;
    }
    
    sec -= 1; // decrease after showing
    check(); // adjust hr/min if needed
    displayTime(); // show the current time first
  }, 1000);
});

stopTime.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetTime.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  sec = hr = min = 0;
  timer.innerHTML = `00:00:00`;
});
displayTime();

//toggle menu button
const menuButton = document.querySelector('.menu-open-button')
const menuClose = document.querySelector('.menu-close-button')
menuButton.addEventListener('click',(e)=>{
  document.body.classList.toggle('show-menu-mobile')
})
menuClose.addEventListener('click',()=>{
      menuButton.click()
})
