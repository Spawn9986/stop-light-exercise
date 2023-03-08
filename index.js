//Go Light
const goButton = document.getElementById('goButton');
const goLight = document.getElementById('goLight');

goButton.addEventListener("click", clickGo)

function clickGo() {
  goLight.classList.add("go");
}

//Slow Light
const slowButton = document.getElementById('slowButton');
const slowLight = document.getElementById('slowLight');

slowButton.addEventListener("click", clickSlow)

function clickSlow() {
  slowLight.classList.add("slow");
}

//Stop Light
const stopButton = document.getElementById("stopButton");
const stopLight = document.getElementById("stopLight");

stopButton.addEventListener("click", clickStop);

function clickStop() {
  stopLight.classList.add("stop");
}





 
