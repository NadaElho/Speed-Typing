let restart = document.querySelector("#restart");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let input = document.querySelector("input");
let timer = document.querySelector(".timer");
let words = document.querySelector(".words");
let test = document.querySelector(".test");
let result = document.querySelector(".result");
let required = document.querySelector(".required");
let num = document.getElementById("num");
let msg = document.getElementById("msg");
let initialTime;

let availableWords = [
  "Albania",
  "Algeria",
  "Andorra",
  "Argentina",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Costa Rica",
  "Egypt",
  "Germany",
  "Ghana",
  "Greece",
];
const len = availableWords.length;

startTimer = () => {
  required.style.display = "block";
  input.style.display = "block";
  required.innerText =
    availableWords[Math.floor(Math.random() * availableWords.length)];
  initialTime = 60;
  let time = setInterval(() => {
    initialTime--;
    timer.innerText = initialTime;
    if (initialTime <= 0 || availableWords.length == 0) {
      clearInterval(time);
      test.style.display = "none";
      result.style.display = "flex";
      res();
    }
    if (input.value == required.innerText) {
      input.value = "";
      required.innerText =
        availableWords[Math.floor(Math.random() * availableWords.length)];
      words.innerText++;
      let i = availableWords.indexOf(required.innerText);
      availableWords.splice(i, 1);
      num.innerText = words.innerText;
    }
  }, 1000);
};
start.onclick = () => {
  start.style.display = "none";
  stop.style.display = "block";
  startTimer();
};
stop.onclick = () => {
  window.location.reload();
};
restart.onclick = () => {
  timer.innerText = 60;
  words.innerText = 0;
  input.value = "";
  msg.innerText = "";
  test.style.display = "flex";
  result.style.display = "none";
  startTimer();
};

function res() {
  if (num.innerText == len) {
    msg.innerText = "Good Job";
  } else if (num.innerText < len && num.innerText > 3) {
    msg.innerText = "Try again, You can do it";
  } else {
    msg.innerText = "Sorry , You Failed";
  }
}
