//Go Light
const goButton = document.getElementById("goButton");
const goLight = document.getElementById("goLight");

goButton.addEventListener("click", clickGo);

function clickGo() {
  if (true) {
    goLight.classList.remove("go");
    slowLight.classList.remove("slow");
    stopLight.classList.remove("stop");
  }
  goLight.classList.add("go");
}

//Slow Light
const slowButton = document.getElementById("slowButton");
const slowLight = document.getElementById("slowLight");

slowButton.addEventListener("click", clickSlow);

function clickSlow() {
  if (true) {
    goLight.classList.remove("go");
    slowLight.classList.remove("slow");
    stopLight.classList.remove("stop");
  }
  slowLight.classList.add("slow");
}

//Stop Light
const stopButton = document.getElementById("stopButton");
const stopLight = document.getElementById("stopLight");

stopButton.addEventListener("click", clickStop);

function clickStop() {
  if (true) {
    goLight.classList.remove("go");
    slowLight.classList.remove("slow");
    stopLight.classList.remove("stop");
  }
  stopLight.classList.add("stop");
}
