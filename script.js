let isRunning = false;
let time = 0; // Time in seconds
let interval;
let laps = [];

function startStop() {
  if (isRunning) {
    clearInterval(interval);
    document.getElementById("start-stop-btn").textContent = "Start";
  } else {
    interval = setInterval(updateTime, 1000);
    document.getElementById("start-stop-btn").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function updateTime() {
  time++;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  
  document.getElementById("time-display").textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}

function resetStopwatch() {
  clearInterval(interval);
  time = 0;
  laps = [];
  isRunning = false;
  document.getElementById("start-stop-btn").textContent = "Start";
  document.getElementById("time-display").textContent = "00:00:00";
  document.getElementById("lap-times").innerHTML = '';
}

function recordLap() {
  if (isRunning) {
    const lapTime = document.getElementById("time-display").textContent;
    laps.push(lapTime);
    displayLaps();
  }
}

function displayLaps() {
  const lapList = document.getElementById("lap-times");
  lapList.innerHTML = '';
  laps.forEach((lap, index) => {
    const lapElement = document.createElement("div");
    lapElement.classList.add("lap");
    lapElement.textContent = `Lap ${index + 1}: ${lap}`;
    lapList.appendChild(lapElement);
  });
}
