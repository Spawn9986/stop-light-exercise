// ============ GLOBAL VARIABLES ==================
const goButton = document.getElementById("goButton");
const goLight = document.getElementById("goLight");

const slowButton = document.getElementById("slowButton");
const slowLight = document.getElementById("slowLight");

const stopButton = document.getElementById("stopButton");
const stopLight = document.getElementById("stopLight");

// ============== MAIN FUNCTION =======================

function clickGo() {
  reset();
  goLight.classList.add("go");
}

function clickSlow() {
  reset();
  slowLight.classList.add("slow");
}

function clickStop() {
  reset();
  stopLight.classList.add("stop");
}

// =============== SUPPORT FUNCTIONS ==================

goButton.addEventListener("click", clickGo);
slowButton.addEventListener("click", clickSlow);
stopButton.addEventListener("click", clickStop);

function reset() {
  goLight.classList.remove("go");
  slowLight.classList.remove("slow");
  stopLight.classList.remove("stop");
}
