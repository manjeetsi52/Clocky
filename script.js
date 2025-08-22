const time = document.querySelector(".timer-p");
const startTime = document.querySelector(".start-sw");
const stopTime = document.querySelector(".stop-sw");
const flagTime = document.querySelector(".flag-sw");
const resetTime = document.querySelector(".reset-sw");
const flagBg = document.querySelector(".show-times");

/*StopWatch*/
let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;
let intervalId = null;
const data = [];
// let str = "10";
// console.log(String(str).padStart(2, "0"));
const displayTime = () => {
  const formattedMs = String(ms).padStart(2, "0");
  const formattedSec = String(sec).padStart(2, "0");
  const formattedMin = String(min).padStart(2, "0");
  const formattedHr = String(hr).padStart(2, "0");
  // String(5).padStart(2, "0");   // "05"
  // String(10).padStart(2, "0");  // "10"
  time.innerText = `${formattedHr}:${formattedMin}:${formattedSec}:${formattedMs}`;
};
const createLi = (value) => {
  let li = document.createElement("li");
  li.classList.add("lichild");
  li.append(value);
  flagBg.append(li);
};
startTime.addEventListener("click", () => {
  if (intervalId !== null) return; //already running no need to create new id

  // const date = new Date();
  time.innerHTML = `${hr}:${min}:${sec}:${ms}`;
  intervalId = setInterval((e) => {
    ms += 1;
    if (ms === 10) {
      sec += 1;
      ms = 0;
    }
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
    if (min === 60) {
      hr += 1;
      min = 0;
    }
    // console.log(value)
    // time.innerHTML = `${min}:${sec}:${ms}`;
    // console.log(date.toLocaleTimeString());
    displayTime(); // use formatted display
  }, 100);
  stopTime.addEventListener("click", () => {
    clearInterval(intervalId);
    //after stoping the interval id is still holiding preval and it does not start from 000 bscs time variable is not reset
    intervalId = null;
  });
  flagTime.addEventListener("click", () => {
    let value = `${hr}:${min}:${sec}:${ms}`;
    //duplicate valu shown so to tackle this i do this
    if (!data.includes(value)) {
      data.push(value);
      // console.log(value);
      createLi(value);
    }
    // console.log(value)
  });

  resetTime.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    ms = sec = hr = min = 0;
    time.innerHTML = `00:00:00:00`;
    flagBg.innerHTML = "";
    data.length = 0;
    // console.log(hr, min, sec, ms);
  });
});


//toggle menu button
const menuButton = document.querySelector('.menu-open-button')
const menuClose = document.querySelector('.menu-close-button')
menuButton.addEventListener('click',(e)=>{
  document.body.classList.toggle('show-menu-mobile')
})
menuClose.addEventListener('click',()=>{
      menuButton.click()
})

