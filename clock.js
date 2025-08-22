const time = document.querySelector(".timer-p");

const intervalId = setInterval(() => {
  const date = new Date();
  // console.log(date.toLocaleTimeString())
  time.innerHTML = date.toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 600000);


const menuButton = document.querySelector('.menu-open-button')
const menuClose = document.querySelector('.menu-close-button')
menuButton.addEventListener('click',(e)=>{
  document.body.classList.toggle('show-menu-mobile')
})
menuClose.addEventListener('click',()=>{
      menuButton.click()
})
